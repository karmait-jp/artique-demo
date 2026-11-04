import assumptions from '../../data/assumptions.json';

// Numeric rules are extracted from the planning document, rather than duplicated.
function value(id: string): string {
  const item = assumptions.items.find((entry) => entry.id === id);
  if (!item) throw new Error(`Missing assumption ${id}`);
  return item.value_en;
}
function number(id: string, pattern: RegExp): number {
  const result = value(id).match(pattern)?.[1];
  if (result === undefined) throw new Error(`Cannot read numeric rule ${id}`);
  return Number(result.replace(/,/g, ''));
}
export interface Increment { from: number; to: number; increment: number }
const increments: Increment[] = value('B4').split(' · ').map((part) => {
  const values = [...part.matchAll(/[\d,]+/g)].map((match) => Number(match[0].replace(/,/g, '')));
  if (part.startsWith('<')) return { from: 0, to: values[0], increment: values[1] };
  if (part.startsWith('≥')) return { from: values[0], to: Infinity, increment: values[1] };
  return { from: values[0], to: values[1] + 1, increment: values[2] };
});
export const rules = {
  buyerPremium: number('B7', /premium (\d+)%/) / 100, // B7 — buyer's premium, excluding VAT.
  vat: number('C4', /^(\d+)%/) / 100, // C4 — VAT on ARTIQUE's fees.
  sellerCommission: number('B7', /commission (\d+)%/) / 100, // B7 — seller's commission, excluding VAT.
  minimumEstimate: number('B3', /estimate €([\d,]+)/), // B3 — minimum low estimate.
  startingRatio: number('B3', /price = (\d+)%/) / 100, // B3 — opening price as a share of low estimate.
  increments, // B4 — all nine bid increments, parsed in source order.
  antiSnipingMs: number('B2', /last (\d+) minutes/) * 60_000, // B2 — extension measured from the latest bid.
  lotSpacingMs: number('B2', /(\d+) seconds apart/) * 1_000, // B2 — staggered closings.
  saleWindowDays: number('B1', /(\d+)-day/), // B1 — bidding window.
  paymentDays: number('B8', /within (\d+) days/), // B8 — payment deadline.
  transferRecommendedAbove: number('B8', /above €([\d,]+)/), // B8 — indicative bank-transfer threshold.
  payoutConfirmedDays: number('B9', /^(\d+) days/), // B9 — seller payout after confirmed delivery.
  payoutUnconfirmedDays: number('B9', /or (\d+) days/), // B9 — seller payout without delivery confirmation.
  shippingBusinessDays: number('B10', /within (\d+) business days/), // B10 — tracked and insured dispatch.
  fineArtShippingAbove: number('B10', /above €([\d,]+)/), // B10 — specialist art transport threshold.
  withdrawalDays: number('B11', /^(\d+)-day/), // B11 — consumer purchases from professional sellers.
  discrepancyDays: number('A8', /within (\d+) days/), // A8 — illustrative as-described guarantee.
  identityThreshold: number('B12', /reach €([\d,]+)/), // B12 — production identity-verification threshold.
  resaleMinimum: number('C3', /from €([\d,]+)/), // C3 — minimum hammer price for eligible resale rights.
  resaleFirstRate: number('C3', /\((\d+)%/) / 100, // C3 — first resale-right band, paid by seller.
  resaleFirstBand: number('C3', /first €([\d,]+)/), // C3 — top of the first resale-right band.
  resaleYears: 70, // C3 / SPEC §6.3 — artist's death within the copyright term.
  eurToJpy: 165, // C5 / SPEC §5 — fixed indicative demo exchange rate.
  eurToUsd: 1.08, // C5 / SPEC §5 — fixed indicative demo exchange rate.
  timeZone: 'Europe/Paris', // A4 — the reference time zone for closing times.
} as const;
export const incrementFor = (amount: number): number =>
  rules.increments.find((band) => amount >= band.from && amount < band.to)?.increment ?? rules.increments[0].increment;
export const startingPrice = (lowEstimate: number): number => {
  const raw = Math.max(rules.minimumEstimate, lowEstimate) * rules.startingRatio;
  return Math.floor(raw / incrementFor(raw)) * incrementFor(raw);
};
const cents = (amount: number): number => Math.round(amount * 100) / 100;
export function costs(hammer: number, shipping = 0) {
  const premium = cents(hammer * rules.buyerPremium);
  const vat = cents(premium * rules.vat);
  return { hammer, premium, vat, shipping, total: cents(hammer + premium + vat + shipping) };
}
export const resaleApplies = (deathYear: number | null, hammer: number, year = new Date().getFullYear()): boolean =>
  deathYear !== null && year - deathYear < rules.resaleYears && hammer >= rules.resaleMinimum;
