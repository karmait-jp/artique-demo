import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { lots, type Lang } from '../data/lots';
import { incrementFor } from '../config/rules';
import {
  applyBid, applyDueRivals, applyRival, loadState, lotStatus, makeOrder, nextMinimum,
  seedState, STORAGE_KEY, type AuctionState, type BidResult, type Order,
  type PaymentMethod, type Registration, type Shipping,
} from './engine';

interface AuctionContextValue {
  state: AuctionState;
  now: number;
  setLanguage: (language: Lang) => void;
  acceptCookies: () => void;
  register: (registration: Registration) => void;
  placeBid: (lotId: string, amount: number, proxy?: boolean) => BidResult;
  toggleWatch: (lotId: string) => void;
  reset: () => void;
  closeLot: (lotId: string) => void;
  triggerRival: (lotId?: string) => void;
  checkoutExample: () => string;
  completeOrder: (lotId: string, shipping: Shipping, method: PaymentMethod) => Order;
  saveConsignment: (draft: Record<string, string> | null) => void;
}
const AuctionContext = createContext<AuctionContextValue | null>(null);

export function AuctionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuctionState>(loadState);
  const [now, setNow] = useState(Date.now);
  const stateRef = useRef(state);
  const reactions = useRef<Record<string, number>>({});
  const commit = useCallback((change: (current: AuctionState) => AuctionState) => {
    const next = change(stateRef.current);
    if (next === stateRef.current) return;
    stateRef.current = next;
    setState(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* The demo remains usable if browser storage is full or unavailable. */ }
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Private browsing can disable persistence. */ }
  }, [state]);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const timer = window.setInterval(tick, 1000);
    window.addEventListener('focus', tick);
    document.addEventListener('visibilitychange', tick);
    return () => { window.clearInterval(timer); window.removeEventListener('focus', tick); document.removeEventListener('visibilitychange', tick); };
  }, []);
  useEffect(() => {
    const soonest = state.pendingRivals.reduce((next, pending) => Math.min(next, pending.at), Infinity);
    if (!Number.isFinite(soonest)) return;
    const timer = window.setTimeout(() => {
      const timestamp = Date.now();
      commit((current) => applyDueRivals(current, timestamp));
      setNow(timestamp);
    }, Math.max(0, Math.min(soonest - Date.now(), 2_147_483_647)));
    return () => window.clearTimeout(timer);
  }, [state.pendingRivals, commit]);

  const placeBid = (lotId: string, amount: number, proxy = false): BidResult => {
    const timestamp = Date.now();
    const current = applyDueRivals(stateRef.current, timestamp);
    if (!current.registered) return { ok: false, error: 'registration' };
    const lot = current.lots[lotId];
    if (!lot) return { ok: false, error: 'closed' };
    const result = applyBid(lot, 'you', amount, proxy, timestamp);
    if (!result.lot) { commit(() => current); return result; }
    const next: AuctionState = { ...current, lots: { ...current.lots, [lotId]: result.lot } };
    const count = reactions.current[lotId] ?? 0;
    if (count < 2 && !next.pendingRivals.some((pending) => pending.lotId === lotId) && Math.random() < 0.6) {
      reactions.current[lotId] = count + 1;
      const delay = 8_000 + Math.floor(Math.random() * 32_001);
      next.pendingRivals = [...next.pendingRivals, { id: `${lotId}-${timestamp}-${count}`, lotId, at: timestamp + delay, bidder: Math.floor(0x1000 + Math.random() * 0xefff).toString(16).toUpperCase() }];
    }
    commit(() => next);
    setNow(timestamp);
    return result;
  };
  const closeLot = (lotId: string) => {
    const timestamp = Date.now();
    commit((current) => {
      if (!current.lots[lotId]) return current;
      return { ...current, lots: { ...current.lots, [lotId]: { ...current.lots[lotId], endsAt: timestamp } }, pendingRivals: current.pendingRivals.filter((pending) => pending.lotId !== lotId) };
    });
    setNow(timestamp);
  };
  const triggerRival = (lotId?: string) => {
    const timestamp = Date.now();
    const target = lotId ?? lots.find((lot) => stateRef.current.lots[lot.id].participated && stateRef.current.lots[lot.id].endsAt > timestamp)?.id ?? lots[0].id;
    commit((current) => {
      const entry = current.lots[target];
      if (!entry || entry.endsAt <= timestamp) return current;
      return { ...current, lots: { ...current.lots, [target]: applyRival(entry, timestamp) }, pendingRivals: current.pendingRivals.filter((pending) => pending.lotId !== target) };
    });
    setNow(timestamp);
  };
  const checkoutExample = (): string => {
    const target = lots.find((lot) => lot.saleId === 'A') ?? lots[0];
    const timestamp = Date.now();
    commit((current) => {
      const entry = current.lots[target.id];
      const amount = Math.max(nextMinimum(entry), entry.reserve ?? 0, entry.visitorMax ?? 0);
      const prepared = { ...entry, currentBid: amount, leader: 'you', visitorMax: amount, maxima: { ...entry.maxima, you: amount + incrementFor(amount) }, participated: true, endsAt: timestamp - 1, bids: [...entry.bids, { bidder: 'you', amount, at: timestamp - 2, proxy: false }] };
      const orders = { ...current.orders };
      delete orders[target.id];
      return { ...current, lots: { ...current.lots, [target.id]: prepared }, orders, pendingRivals: current.pendingRivals.filter((pending) => pending.lotId !== target.id) };
    });
    setNow(timestamp);
    return target.id;
  };
  const completeOrder = (lotId: string, shipping: Shipping, method: PaymentMethod): Order => {
    const current = stateRef.current;
    if (current.orders[lotId]) return current.orders[lotId];
    const lot = lots.find((entry) => entry.id === lotId);
    const lotState = current.lots[lotId];
    if (!lot || !lotState || lotStatus(lotState, Date.now()) !== 'won') throw new Error('Only a won lot can be checked out.');
    const order = makeOrder(lot, lotState, shipping, method, Date.now());
    commit((latest) => ({ ...latest, orders: { ...latest.orders, [lotId]: order } }));
    return order;
  };
  return <AuctionContext.Provider value={{
    state, now, placeBid, closeLot, triggerRival, checkoutExample, completeOrder,
    setLanguage: (language) => commit((current) => ({ ...current, language })),
    acceptCookies: () => commit((current) => ({ ...current, cookieAccepted: true })),
    register: (registered) => commit((current) => ({ ...current, registered })),
    toggleWatch: (lotId) => commit((current) => current.lots[lotId] ? ({ ...current, lots: { ...current.lots, [lotId]: { ...current.lots[lotId], watched: !current.lots[lotId].watched } } }) : current),
    reset: () => { reactions.current = {}; commit((current) => ({ ...seedState(current.language), cookieAccepted: current.cookieAccepted })); setNow(Date.now()); },
    saveConsignment: (consignment) => commit((current) => ({ ...current, consignment })),
  }}>{children}</AuctionContext.Provider>;
}
export function useAuction(): AuctionContextValue {
  const context = useContext(AuctionContext);
  if (!context) throw new Error('useAuction must be used inside AuctionProvider');
  return context;
}
