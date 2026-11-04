import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function moduleFrom(path) {
  const result = await build({ entryPoints: [path], bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent' });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}
const e = await moduleFrom('src/state/engine.ts');
const { rules, incrementFor, costs } = await moduleFrom('src/config/rules.ts');
const blank = (overrides = {}) => ({ endsAt: 1_000_000, startingPrice: 180, currentBid: 0, bids: [], leader: null, maxima: {}, visitorMax: null, watched: false, reserve: null, participated: false, ...overrides });
const bid = (lot, bidder, amount, proxy, now = 0) => {
  const result = e.applyBid(lot, bidder, amount, proxy, now);
  assert.equal(result.ok, true);
  return result.lot;
};
for (const [amount, expected] of [[0,5],[99,5],[100,10],[299,10],[300,20],[499,20],[500,50],[999,50],[1000,100],[2999,100],[3000,200],[4999,200],[5000,500],[9999,500],[10000,1000],[19999,1000],[20000,2000]]) {
  assert.equal(incrementFor(amount), expected, `Increment at €${amount}`);
}
assert.deepEqual(costs(1000, 35), { hammer: 1000, premium: 250, vat: 50, shipping: 35, total: 1335 });
assert.equal(rules.lotSpacingMs, 60_000);
assert.equal(rules.paymentDays, 3);
let proxy = bid(blank(), 'you', 1000, true);
assert.equal(proxy.currentBid, 180, 'A lone proxy reveals only the starting price');
proxy = bid(proxy, '4F2A', 190, false, 10);
assert.equal(proxy.currentBid, 200);
assert.equal(proxy.leader, 'you');
assert.deepEqual(proxy.bids.slice(-2).map(({ bidder, amount }) => [bidder, amount]), [['4F2A',190],['you',200]]);
assert.equal(e.applyBid(proxy, 'you', 205, false, 20).ok, false, 'Below minimum is rejected');
assert.equal(e.applyBid(proxy, 'you', 900, true, 20).error, 'maximum', 'An active maximum cannot be lowered');
proxy = bid(proxy, 'ABCD', 1000, false, 20);
assert.equal(proxy.leader, 'you', 'The earlier maximum wins a tie');
assert.equal(proxy.currentBid, 1000);
let tie = bid(blank(), '1234', 180, false);
tie = bid(tie, 'you', 1000, true, 10);
tie = bid(tie, '1234', 1000, false, 20);
assert.equal(tie.leader, 'you', 'Earlier first participation gives no priority when reaching a maximum later');
const late = bid(blank({ endsAt: 1000 }), 'you', 180, false, 900);
assert.equal(late.endsAt, 1000, 'Last-second bids keep the fixed close');
assert.equal(rules.antiSnipingMs, 0);
assert.equal(e.applyBid(blank({ endsAt: 1000 }), 'you', 180, false, 1000).error, 'closed');
const reserve = bid(blank({ reserve: 300 }), 'you', 250, true);
assert.equal(e.lotStatus({ ...reserve, endsAt: 1 }, 2), 'unsold');
const reached = bid(blank({ reserve: 300 }), 'you', 500, true);
assert.equal(reached.currentBid, 300);
assert.equal(e.lotStatus({ ...reached, endsAt: 1 }, 2), 'won');
assert.equal(e.lotStatus({ ...reached, leader: '1234', endsAt: 1 }, 2), 'lost');
const state = e.seedState('fr', 0);
assert.ok(Object.keys(state.lots).length >= 30);
for (const lot of Object.values(state.lots)) {
  assert.ok(lot.bids.every((entry, i) => !i || entry.at >= lot.bids[i-1].at), 'Prior history is chronological');
  assert.ok(lot.bids.length <= 7);
}
state.lots.example = blank({ endsAt: 1000 });
state.pendingRivals = [{ id: 'reload', lotId: 'example', at: 950, bidder: 'ABCD' }];
const reloaded = e.applyDueRivals(state, 2000);
assert.equal(reloaded.pendingRivals.length, 0);
assert.equal(reloaded.lots.example.currentBid, 180);
assert.equal(reloaded.lots.example.endsAt, 1000, 'Overdue rival uses its scheduled time and keeps the fixed close');
const { lots } = await moduleFrom('src/data/lots.ts');
assert.equal(lots.filter(lot=>lot.estimateLow!==undefined).length,24);
assert.equal(lots.filter(lot=>lot.buyNowPrice!==undefined).length,12);
for (const lot of lots) {
  assert.equal(state.lots[lot.id].startingPrice, lot.startingPrice, 'Seller-set starting price is copied verbatim');
  assert.equal(lot.sellerType, 'private');
  assert.ok(['fr','en','ja'].includes(lot.sourceLang));
  for (const price of [lot.startingPrice,lot.estimateLow,lot.estimateHigh,lot.buyNowPrice].filter(x=>x!==undefined)) assert.ok(price>0&&price<=rules.maxLotAmount);
  if(lot.buyNowPrice!==undefined) assert.ok(lot.buyNowPrice>(lot.estimateHigh??lot.startingPrice));
}
assert.equal(e.applyBid(blank(), 'you', 10000, false, 1).error, 'cap');
assert.equal(e.applyBid(blank(), 'you', 10000, true, 1).error, 'cap');
for(const invalid of [NaN,-1,-Infinity]) assert.equal(e.applyBid(blank(),'you',invalid,true,1).ok,false);
const capped=bid(blank(), 'you', 9999, true, 1);
assert.ok(e.applyRival(capped, 2).currentBid<=rules.maxLotAmount);
assert.deepEqual(e.validAmounts(blank({currentBid:9500,bids:[{bidder:'ABCD',amount:9500,at:0,proxy:false}]})),[9999]);
const capWon=bid(blank(), 'you', 9999, false, 1);
assert.deepEqual(e.validAmounts(capWon),[]);
assert.equal(e.applyBid(capWon,'ABCD',9999,false,2).ok,false,'No bid after the cap is reached');
const buyable=blank({buyNowPrice:800,reserve:700});
const bought=e.applyBuyNow(buyable,'you',900);
assert.equal(bought.ok,true);
assert.equal(bought.lot.endsAt,900);
assert.equal(bought.lot.currentBid,800);
assert.equal(e.lotStatus(bought.lot,900),'won');
assert.equal(e.canBuyNow(bought.lot,900),false);
assert.equal(e.applyBuyNow(bought.lot,'ABCD',901).ok,false);
assert.equal(e.applyBuyNow(blank({buyNowPrice:10000}),'you',1).ok,false);
assert.equal(e.applyBuyNow(blank({buyNowPrice:800,endsAt:1}),'you',1).ok,false);
assert.equal(e.applyBuyNow(blank(),'you',1).ok,false);
assert.equal(bid(buyable,'you',850,false,900).currentBid,800,'A direct bid reaching buy-now closes at the buy-now price');
const hidden=bid(blank({buyNowPrice:800}), 'you', 900, true, 100);
assert.equal(hidden.endsAt,1_000_000,'A hidden maximum alone does not buy the lot');
const competed=bid(hidden,'ABCD',790,true,200);
assert.equal(competed.currentBid,800);
assert.equal(e.lotStatus(competed,200),'won');
const existingRival=bid(blank({buyNowPrice:800}),'ABCD',900,true,100);
const losingVisitor=bid(existingRival,'you',790,true,200);
assert.equal(e.lotStatus(losingVisitor,200),'lost');
assert.equal(losingVisitor.participated,true,'A losing proxy still records visitor participation when buy-now is reached');
assert.ok(losingVisitor.bids.some(entry=>entry.bidder==='you'),'The competing bid remains in history');
assert.ok(losingVisitor.bids.every(entry=>entry.amount<=800),'History shows only prices through buy-now');
assert.equal(e.applyRival(bought.lot,901),bought.lot,'Rivals cannot change a purchased lot');
assert.equal(e.makeOrder(lots[0], bought.lot,'pickup','paypal',901).total,costs(800).total);
assert.throws(() => e.makeOrder(lots[0], blank(), 'france', 'card', 100), /Only a won lot/);
const order = e.makeOrder(lots[0], { ...reached, endsAt: 1 }, 'france', 'card', 100);
assert.equal(order.hammer, 300);
assert.equal(order.deadline, 1 + rules.paymentDays * 86_400_000);
assert.equal(order.total, costs(300, lots[0].shipping.france).total);
const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
const storageDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
let savedState = null;
try {
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: () => savedState } });
  for (const [languages, language, expected] of [
    [['fr-CA', 'en-GB'], 'ja-JP', 'fr'],
    [['ja-JP', 'fr-FR'], 'en-GB', 'ja'],
    [['de-DE', 'fr-FR'], 'fr-FR', 'en'],
    [['en-US', 'ja-JP'], 'ja-JP', 'en'],
    [[], 'fr-FR', 'fr'],
    [[], 'ja-JP', 'ja'],
    [[], undefined, 'en'],
  ]) {
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { languages, language } });
    assert.equal(e.loadState().language, expected, `Initial language for ${languages[0] ?? language}`);
  }
  savedState = JSON.stringify(state);
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { languages: ['ja-JP'], language: 'ja-JP' } });
  assert.equal(e.loadState().language, 'fr', 'Stored language takes precedence over browser preferences');
  savedState = JSON.stringify({...state,version:1,cookieAccepted:true,registered:{name:'Demo',email:'x',phone:'x',cardLast4:'4242'},lots:{...state.lots,[lots[0].id]:{...state.lots[lots[0].id],watched:true,currentBid:20000}},orders:{legacy:{}}});
  const migrated=e.loadState();
  assert.equal(migrated.version,2);
  assert.equal(migrated.language,'fr');
  assert.equal(migrated.cookieAccepted,true);
  assert.equal(migrated.lots[lots[0].id].watched,true);
  assert.ok(migrated.lots[lots[0].id].currentBid<=9999);
  assert.deepEqual(migrated.orders,{});
  savedState = null;
  delete globalThis.navigator;
  assert.equal(e.loadState().language, 'en', 'Missing navigator defaults to English');
} finally {
  if (navigatorDescriptor) Object.defineProperty(globalThis, 'navigator', navigatorDescriptor);
  else delete globalThis.navigator;
  if (storageDescriptor) Object.defineProperty(globalThis, 'localStorage', storageDescriptor);
  else delete globalThis.localStorage;
}
console.log('Auction verification passed: rule boundaries, proxy resolution and ties, reserves, fixed closing, caps, buy-now, explicit prices, seeded histories, overdue rivals, checkout eligibility and totals, and initial and stored languages.');
