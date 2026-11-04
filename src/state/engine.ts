import { lots, sales, type Lang, type Lot } from '../data/lots';
import { costs, incrementFor, rules } from '../config/rules';

export interface Registration { name: string; email: string; phone: string; cardLast4: string }
export interface Bid { bidder: string; amount: number; at: number; proxy: boolean }
export interface LotState {
  endsAt: number;
  startingPrice: number;
  currentBid: number;
  bids: Bid[];
  leader: string | null;
  maxima: Record<string, number>;
  maximaOrder?: Record<string, number>;
  visitorMax: number | null;
  watched: boolean;
  reserve: number | null;
  buyNowPrice?: number;
  participated: boolean;
}
export type LotStatus = 'open' | 'leading' | 'outbid' | 'won' | 'lost' | 'unsold';
export type Shipping = 'france' | 'eu' | 'pickup';
export type PaymentMethod = 'card' | 'paypal';
export interface Order {
  id: string; lotId: string; createdAt: number; shipping: Shipping; method: PaymentMethod;
  hammer: number; premium: number; vat: number; shippingCost: number; total: number; deadline: number;
}
export interface PendingRival { id: string; lotId: string; at: number; bidder: string }
export interface AuctionState {
  version: 2;
  firstVisit: number;
  language: Lang;
  registered: Registration | null;
  cookieAccepted: boolean;
  lots: Record<string, LotState>;
  orders: Record<string, Order>;
  pendingRivals: PendingRival[];
  consignment: Record<string, string> | null;
}
export const STORAGE_KEY = 'artique-demo-state-v1';
export const reserveMet = (lot: LotState): boolean => lot.reserve === null || lot.currentBid >= lot.reserve;
export const nextMinimum = (lot: LotState): number => lot.bids.length ? Math.min(rules.maxLotAmount, lot.currentBid + incrementFor(lot.currentBid)) : lot.startingPrice;
export function validAmounts(lot: LotState, count = 6): number[] {
  if (lot.currentBid >= rules.maxLotAmount) return [];
  const values = [nextMinimum(lot)];
  while (values.length < count && values[values.length - 1] < rules.maxLotAmount) {
    values.push(Math.min(rules.maxLotAmount, values[values.length - 1] + incrementFor(values[values.length - 1])));
  }
  return values;
}
export function lotStatus(lot: LotState, now: number): LotStatus {
  if (now >= lot.endsAt) {
    if (!lot.bids.length || !reserveMet(lot)) return 'unsold';
    return lot.leader === 'you' ? 'won' : 'lost';
  }
  if (lot.leader === 'you') return 'leading';
  return lot.participated ? 'outbid' : 'open';
}
export interface BidResult { ok: boolean; error?: 'closed' | 'minimum' | 'maximum' | 'registration' | 'cap'; lot?: LotState }
/** Resolve competing maxima. The first bidder to reach a tied maximum keeps priority. */
export function applyBid(lot: LotState, bidder: string, amount: number, proxy: boolean, now: number): BidResult {
  if (now >= lot.endsAt) return { ok: false, error: 'closed' };
  if (amount > rules.maxLotAmount) return { ok: false, error: 'cap' };
  if (!Number.isFinite(amount) || amount < nextMinimum(lot) || lot.currentBid >= rules.maxLotAmount) return { ok: false, error: 'minimum' };
  if (bidder === 'you' && amount <= (lot.visitorMax ?? 0)) return { ok: false, error: 'maximum' };
  if (!proxy && canBuyNow(lot, now) && amount >= lot.buyNowPrice!) return applyBuyNow(lot, bidder, now);
  const maxima = { ...lot.maxima, [bidder]: Math.max(lot.maxima[bidder] ?? 0, amount) };
  const maximaOrder = { ...lot.maximaOrder };
  if (amount > (lot.maxima[bidder] ?? 0)) maximaOrder[bidder] = lot.bids.length;
  const ranked = Object.entries(maxima).sort((a, b) => b[1] - a[1] || (maximaOrder[a[0]] ?? -1) - (maximaOrder[b[0]] ?? -1));
  const [leader, maximum] = ranked[0];
  const runnerUp = ranked[1]?.[1];
  let displayed = runnerUp === undefined ? lot.startingPrice : Math.min(maximum, runnerUp + incrementFor(runnerUp));
  // A direct bid bids the offered amount; a proxy reveals only what is needed.
  if (!proxy) displayed = Math.max(displayed, Math.min(amount, maximum));
  // As in a conventional reserve auction, a sufficient maximum reaches reserve.
  if (lot.reserve !== null && maximum >= lot.reserve) displayed = Math.max(displayed, lot.reserve);
  displayed = Math.max(lot.currentBid, Math.min(maximum, displayed));
  const offered = proxy && leader === bidder ? displayed : amount;
  const bids: Bid[] = [...lot.bids, { bidder, amount: offered, at: now, proxy: bidder === 'you' && proxy }];
  if (leader !== bidder && displayed > amount) bids.push({ bidder: leader, amount: displayed, at: now + 1, proxy: leader === 'you' });
  const bought = lot.buyNowPrice !== undefined && displayed >= lot.buyNowPrice;
  return { ok: true, lot: {
    ...lot, maxima, maximaOrder, leader, currentBid: bought ? lot.buyNowPrice! : displayed,
    bids: bought ? [...lot.bids, ...bids.slice(lot.bids.length).map(bid => ({ ...bid, amount: Math.min(bid.amount, lot.buyNowPrice!) }))] : bids,
    visitorMax: bidder === 'you' ? amount : lot.visitorMax,
    participated: lot.participated || bidder === 'you',
    endsAt: bought ? now : lot.endsAt,
    reserve: bought && lot.reserve !== null ? Math.min(lot.reserve, lot.buyNowPrice!) : lot.reserve,
  } };
}
export const canBuyNow = (lot: LotState, now: number): boolean =>
  now < lot.endsAt && lot.buyNowPrice !== undefined && lot.buyNowPrice <= rules.maxLotAmount && lot.currentBid < lot.buyNowPrice;
export function applyBuyNow(lot: LotState, bidder: string, now: number): BidResult {
  if (!canBuyNow(lot, now)) return { ok: false, error: 'closed' };
  const amount = lot.buyNowPrice!;
  return { ok: true, lot: { ...lot, endsAt: now, currentBid: amount, leader: bidder,
    maxima: { ...lot.maxima, [bidder]: amount },
    visitorMax: bidder === 'you' ? amount : lot.visitorMax,
    participated: lot.participated || bidder === 'you',
    reserve: lot.reserve === null ? null : Math.min(lot.reserve, amount),
    bids: [...lot.bids, { bidder, amount, at: now, proxy: false }],
  } };
}
const randomBidder = (): string => Math.floor(0x1000 + Math.random() * 0xefff).toString(16).toUpperCase();
export function seedState(language: Lang, now = Date.now()): AuctionState {
  const seeded: Record<string, LotState> = {};
  for (const lot of lots) {
    const offsetDays = sales.find((sale) => sale.id === lot.saleId)?.offsetDays ?? 2;
    let entry: LotState = {
      endsAt: now + offsetDays * 86_400_000 + lot.index * rules.lotSpacingMs,
      startingPrice: lot.startingPrice, buyNowPrice: lot.buyNowPrice, currentBid: 0, bids: [], leader: null,
      maxima: {}, maximaOrder: {}, visitorMax: null, watched: false,
      reserve: Math.random() < 0.5 ? Math.min(lot.buyNowPrice ?? rules.maxLotAmount, lot.estimateLow ?? Math.round(lot.startingPrice * 1.25)) : null,
      participated: false,
    };
    const count = Math.floor(Math.random() * 8);
    const priorSpacing = (20 + Math.floor(Math.random() * 100)) * 60_000;
    for (let i = 0; i < count; i++) {
      const at = now - (count - i) * priorSpacing;
      const result = applyBid(entry, randomBidder(), nextMinimum(entry), false, at);
      if (result.lot) entry = result.lot;
    }
    seeded[lot.id] = entry;
  }
  return { version: 2, firstVisit: now, language, registered: null, cookieAccepted: false, lots: seeded, orders: {}, pendingRivals: [], consignment: null };
}
/** One increment normally; a deliberately modest proxy can be overtaken. */
export function applyRival(lot: LotState, now: number, bidder = randomBidder()): LotState {
  const minimum = nextMinimum(lot);
  const modestMaximum = lot.visitorMax !== null && lot.visitorMax <= minimum + 2 * incrementFor(minimum);
  const amount = Math.min(rules.maxLotAmount, modestMaximum ? Math.max(minimum, (lot.visitorMax ?? 0) + incrementFor(lot.visitorMax ?? minimum)) : minimum);
  return applyBid(lot, bidder, amount, false, now).lot ?? lot;
}
export function applyDueRivals(state: AuctionState, now: number): AuctionState {
  const due = state.pendingRivals.filter((pending) => pending.at <= now);
  if (!due.length) return state;
  const next = { ...state, lots: { ...state.lots }, pendingRivals: state.pendingRivals.filter((pending) => pending.at > now) };
  for (const pending of due.sort((a, b) => a.at - b.at)) {
    const lot = next.lots[pending.lotId];
    // Process at its scheduled timestamp after reload, without changing the fixed close.
    if (lot) next.lots[pending.lotId] = applyRival(lot, pending.at, pending.bidder);
  }
  return next;
}
export function makeOrder(lot: Lot, state: LotState, shipping: Shipping, method: PaymentMethod, now: number): Order {
  if (lotStatus(state, now) !== 'won') throw new Error('Only a won lot can be checked out.');
  const shippingCost = shipping === 'pickup' ? 0 : lot.shipping[shipping];
  const total = costs(state.currentBid || state.startingPrice, shippingCost);
  return {
    id: `ART-${new Date(now).getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
    lotId: lot.id, createdAt: now, shipping, method,
    hammer: total.hammer, premium: total.premium, vat: total.vat, shippingCost, total: total.total,
    deadline: state.endsAt + rules.paymentDays * 86_400_000,
  };
}
export function loadState(): AuctionState {
  const browserLanguage = typeof navigator === 'undefined' ? 'en' : (navigator.languages?.[0] ?? navigator.language ?? 'en').toLowerCase();
  const language: Lang = browserLanguage.startsWith('fr') ? 'fr' : browserLanguage.startsWith('ja') ? 'ja' : 'en';
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as AuctionState | null;
    if (saved?.version === 2 && typeof saved.firstVisit === 'number' && ['fr', 'en', 'ja'].includes(saved.language) && saved.lots && lots.every((lot) => saved.lots[lot.id] && Array.isArray(saved.lots[lot.id].bids)) && Array.isArray(saved.pendingRivals)) {
      return applyDueRivals({ ...saved, orders: saved.orders ?? {}, consignment: saved.consignment ?? null }, Date.now());
    }
  } catch { /* An absent or damaged demo save is replaced with a fresh seed. */ }
  const fresh = seedState(language);
  try {
    const legacy = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as AuctionState | null;
    if (legacy && ['fr', 'en', 'ja'].includes(legacy.language)) {
      fresh.language = legacy.language;
      fresh.cookieAccepted = !!legacy.cookieAccepted;
      fresh.registered = legacy.registered ?? null;
      for (const lot of lots) fresh.lots[lot.id].watched = !!legacy.lots?.[lot.id]?.watched;
    }
  } catch { /* Start fresh when a legacy save cannot be read. */ }
  return fresh;
}
