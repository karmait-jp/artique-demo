import assumptions from '../../data/assumptions.json';

export interface Increment { from: number; to: number; increment: number }

// Keep deriving rules from the planning document; these defaults keep wording changes safe.
export const defaultRules = {
  buyerPremium: 0.25, // B7 — buyer's premium, excluding VAT.
  vat: 0.20, // C4 — VAT on ARTIQUE's fees.
  sellerCommission: 0.12, // B7 — seller's commission, excluding VAT.
  increments: [ // B4 — all nine bid increments.
    { from: 0, to: 100, increment: 5 }, // B4
    { from: 100, to: 300, increment: 10 }, // B4
    { from: 300, to: 500, increment: 20 }, // B4
    { from: 500, to: 1_000, increment: 50 }, // B4
    { from: 1_000, to: 3_000, increment: 100 }, // B4
    { from: 3_000, to: 5_000, increment: 200 }, // B4
    { from: 5_000, to: 10_000, increment: 500 }, // B4
    { from: 10_000, to: 20_000, increment: 1_000 }, // B4
    { from: 20_000, to: Infinity, increment: 2_000 }, // B4
  ] as Increment[], // B4
  antiSnipingMs: 0, // B2 — fixed closing with no extension.
  maxLotAmount: 9_999, // B12 — per-lot limit for bids, proxy maxima and buy-now.
  payoutDay: 15, // B9 — confirmations through month-end paid next month on this day.
  lotSpacingMs: 60_000, // B2 — staggered closings.
  saleWindowDays: 10, // B1 — bidding window.
  paymentDays: 3, // B8 — payment deadline.
  withdrawalDays: 14, // B11 — consumer purchases from professional sellers.
  discrepancyDays: 30, // A8 — illustrative as-described guarantee.
  resaleMinimum: 750, // C3 — minimum hammer price for eligible resale rights.
  resaleFirstRate: 0.04, // C3 — first resale-right band, paid by seller.
  resaleYears: 70, // C3 / SPEC §6.3 — artist's death within the copyright term.
  timeZone: 'Europe/Paris', // A4 — the reference time zone for closing times.
} as const;

const warned = new Set<string>();
function warnFallback(id: string): void {
  if (warned.has(id)) return;
  warned.add(id);
  console.warn(`[ARTIQUE] Cannot parse assumption ${id}; using explicit rule defaults.`);
}
function value(id: string): string {
  return assumptions.items.find((entry) => entry.id === id)?.value_en ?? '';
}
function number(id: string, pattern: RegExp, fallback: number, scale = 1): number {
  const result = value(id).match(pattern)?.[1];
  const parsed = result === undefined ? NaN : Number(result.replace(/,/g, '')) * scale;
  if (Number.isFinite(parsed)) return parsed;
  warnFallback(id);
  return fallback;
}
function parseIncrements(): Increment[] {
  const parsed = value('B4').split(' · ').map((part) => {
    const values = [...part.matchAll(/[\d,]+/g)].map((match) => Number(match[0].replace(/,/g, '')));
    if (part.startsWith('<')) return { from: 0, to: values[0], increment: values[1] };
    if (part.startsWith('≥')) return { from: values[0], to: Infinity, increment: values[1] };
    return { from: values[0], to: values[1] + 1, increment: values[2] };
  });
  if (parsed.length >= 9 && parsed.every(({ from, to, increment }) =>
    Number.isFinite(from) && from >= 0 && (Number.isFinite(to) || to === Infinity) && to > from && Number.isFinite(increment) && increment > 0)) return parsed;
  warnFallback('B4');
  return defaultRules.increments;
}
export const rules = {
  buyerPremium: number('B7', /premium (?:provisionally )?(\d+)%/, defaultRules.buyerPremium, 0.01), // B7 — buyer's premium, excluding VAT.
  vat: number('C4', /^(\d+)%/, defaultRules.vat, 0.01), // C4 — VAT on ARTIQUE's fees.
  sellerCommission: number('B7', /commission (\d+)%/, defaultRules.sellerCommission, 0.01), // B7 — seller's commission, excluding VAT.
  increments: parseIncrements(), // B4 — all nine bid increments, parsed in source order.
  antiSnipingMs: defaultRules.antiSnipingMs, // B2 — fixed closing with no extension.
  maxLotAmount: number('B12', /maximum of €([\d,]+)/, defaultRules.maxLotAmount), // B12 — bids, proxy maxima and buy-now cap.
  payoutDay: number('B9', /on the (\d+)th/, defaultRules.payoutDay), // B9 — monthly payout after confirmed receipt.
  lotSpacingMs: number('B2', /(\d+) seconds apart/, defaultRules.lotSpacingMs, 1_000), // B2 — staggered closings.
  saleWindowDays: number('B1', /(\d+)-day/, defaultRules.saleWindowDays), // B1 — bidding window.
  paymentDays: number('B8', /within (\d+) days/, defaultRules.paymentDays), // B8 — payment deadline.
  withdrawalDays: number('B11', /a (\d+)-day/, defaultRules.withdrawalDays), // B11 — consumer purchases from professional sellers.
  discrepancyDays: number('A8', /within (\d+) days/, defaultRules.discrepancyDays), // A8 — illustrative as-described guarantee.
  resaleMinimum: number('C3', /from €([\d,]+)/, defaultRules.resaleMinimum), // C3 — minimum hammer price for eligible resale rights.
  resaleFirstRate: number('C3', /\((\d+)%/, defaultRules.resaleFirstRate, 0.01), // C3 — first resale-right band, paid by seller.
  resaleYears: defaultRules.resaleYears, // C3 / SPEC §6.3 — artist's death within the copyright term.
  timeZone: defaultRules.timeZone, // A4 — the reference time zone for closing times.
} as const;
export const incrementFor = (amount: number): number =>
  rules.increments.find((band) => amount >= band.from && amount < band.to)?.increment ?? rules.increments[0].increment;
const cents = (amount: number): number => Math.round(amount * 100) / 100;
export function costs(hammer: number, shipping = 0) {
  const premium = cents(hammer * rules.buyerPremium);
  const vat = cents(premium * rules.vat);
  return { hammer, premium, vat, shipping, total: cents(hammer + premium + vat + shipping) };
}
export const resaleApplies = (deathYear: number | null, hammer: number, year = new Date().getFullYear()): boolean =>
  deathYear !== null && year - deathYear < rules.resaleYears && hammer >= rules.resaleMinimum;
