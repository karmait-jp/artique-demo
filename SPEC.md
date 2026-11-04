# ARTIQUE — demo site specification

## 1. Purpose and audience

ARTIQUE ("Art + Antique + Unique") is a concept for a curated online auction house built around Japanese and wider Asian art, open to antiques, design, photography and contemporary art, aimed first at France (EUR, French buyers and sellers) with international reach.

This repository is a **demo site**: a static web app that a business partner will open on their **smartphone and laptop** to see how ARTIQUE would look and behave. It must feel like a finished product on the surface while being honest that it is a demo (no server, no real money, simulated rival bidders).

Tone of the concept deck we are implementing: *"Quiet luxury. Museum clarity. Digital ease."* and *"Each lot should feel like a page from a collector's book."*

## 2. Hard constraints

- Static site, deployable to **GitHub Pages** under the base path `/artique-demo/`. Set `base: '/artique-demo/'` in `vite.config.ts` and use **HashRouter** from react-router so that deep links such as `/#/lot/A-012` work on GitHub Pages without a 404 trick. All asset URLs must respect the base path (use `import.meta.env.BASE_URL` for the lot images in `public/lots/`).
- Stack (already installed): Vite 6, React 18, TypeScript (strict), react-router-dom 6. Plain CSS with CSS variables (one global stylesheet plus small component stylesheets or CSS modules). **No Tailwind, no component library, no icon library** (inline SVG for the 4–6 icons you need).
- No backend, no network calls at runtime except Google Fonts (see typography). All state in `localStorage` under the key `artique-demo-state-v1`.
- Must work on iOS Safari and Android Chrome at 360–430 px wide, and on desktop up to 1440 px. Minimum tap target 44 px. Respect `prefers-reduced-motion`.
- Must pass `npm run typecheck` and `npm run build`. Keep the JS bundle reasonable (< 300 kB gzipped is fine).
- Keep the lot images as they are in `public/lots/` (already optimised web-large JPEGs). Do not add other images; use CSS/SVG for any decoration.

## 3. Data you are given

### `data/met-objects.json`
An array of ~45 museum objects downloaded from The Metropolitan Museum of Art's Open Access API (all `isPublicDomain: true`, licence CC0). Fields: `metId, sale, query, image (path relative to public/), title, artist, artistBio, date, medium, dimensions, culture, period, classification, department, creditLine, objectURL, license`. The `sale` field is a rough pre-assignment: `japanese`, `asian`, `photography`, `design`.

Use these as the **objects of the demo lots**. You may drop objects that do not fit (for example photographs that are not of Japan or odd items like a "sample vase in process of making cloisonné") but keep **at least 30 lots** in total and at least 6 per sale. Build a curated `src/data/lots.json` (or `.ts`) by hand or with a small one-off script in `scripts/` — either is fine, but the committed result must be a static data file that the app imports.

### `data/assumptions.json`
36 provisional business rules (fees, increments, closing rules, payment terms, etc.), each with an id (A1…E3) and texts in English and Japanese. The app must **read its business rules from these values** where they are numeric (buyer's premium 15 % excl. VAT, VAT 20 %, seller commission 12 %, increments table B4, anti-sniping 2 minutes B2, lots close 60 s apart B2, payment within 3 days B8, starting price = 60 % of low estimate B3, minimum low estimate €300 B3). Put those numbers in one typed module `src/config/rules.ts` with a comment per line citing the assumption id, so the planning document and the site cannot drift apart. The Demo Notes page lists all 36 items (see §6.10). You must add **French** translations of every item's label and value in the app (keep the English and Japanese texts exactly as given).

## 4. Visual design (follow closely — this is what the partner will judge)

Derive the look from the concept deck, not from generic SaaS templates.

- **Background** pale green-grey `#EEF2EC` for page surfaces, pure white `#FFFFFF` for the image stage and catalogue pages, ink `#1F1F1F` for text, secondary text `#5C635C`, hairline rules `#C5CDC3`. One accent only, used sparingly for the live state (countdown, "You are the highest bidder"): deep green `#2F5D3A`. Red only for "outbid" `#9B2C2C`. No gradients, no drop shadows, no rounded corners larger than 2 px, no card borders — separate content with **hairline rules and whitespace**, like a printed catalogue.
- **Typography**: headings and lot titles in a classical serif via Google Fonts — `Cormorant Garamond` (600/500) for Latin, `Noto Serif JP` (500) for Japanese. Body in a quiet sans: `Inter` is NOT allowed; use the system stack `-apple-system, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans JP", sans-serif`. Section labels in small caps letter-spaced sans, numbered like the deck: `01 — Brand`, `02 — Positioning`. Italic serif for captions and legal footnotes. Load only the needed weights.
- **Layout**: generous margins (24 px on phones, 64–96 px on desktop), max content width 1280 px, catalogue grid 2 columns on phones (image-led, title + estimate + current bid + time left), 3–4 columns on desktop. Lot page: image stage first (object on white, pinch-zoom friendly `object-fit: contain`, swipeable thumbnails if more than one image — we only have one image per object, so show a single large image with a tasteful "1 / 1" indicator and allow tap-to-enlarge in a plain full-screen overlay).
- **Header**: wordmark "ARTIQUE" in serif, small subtitle "Asian Art & Design Auctions", language switch FR / EN / JA, a "My bids" link with a count, and a hamburger on mobile. **Footer**: category links, legal links, the line "Demo — nothing is sold, no payment is taken", and the Met credit.
- **Motion**: subtle only — countdown ticking, a 2 px underline on hover, a soft fade when a bid is accepted. No carousels, no parallax, no skeleton shimmer.
- Write real copy, not lorem ipsum. The tone is calm, specialist, European. Short sentences. Avoid marketing superlatives.

## 5. Internationalisation

Three languages: **French (default when the browser language starts with `fr`), English (default otherwise), Japanese (when browser language starts with `ja`)**. Language switch persists in localStorage. All UI strings, all lot titles and descriptions, all legal placeholders and the Demo Notes exist in the three languages. Implement a tiny `t()` helper with typed keys and JSON dictionaries in `src/i18n/{fr,en,ja}.ts`; no library.

Number and date formatting via `Intl.NumberFormat` / `Intl.DateTimeFormat` for the current locale. Prices always in EUR (`€1 200` in French, `€1,200` in English, `€1,200` in Japanese — use `Intl` and accept its output). Lot pages show an **indicative** JPY and USD conversion with fixed demo rates (EUR→JPY 165, EUR→USD 1.08) labelled "indicative".

Closing times: compute in `Europe/Paris` and show both Paris time and the visitor's local time when they differ.

## 6. Pages and behaviour (HashRouter routes)

### 6.1 `/` Home
- Hero: wordmark, the line "Where Asian heritage meets contemporary collecting.", one large lot image (choose the most striking), and two text links: "View the sales" and "Consign with us". No slider.
- "Current sales": the four sales as a list with hairline rules (title, dates, lot count, "Browse").
- "Highlights": 6 lots across sales.
- "How ARTIQUE works" in three numbered steps (register → bid → pay & receive) with the real fee line from the rules (buyer's premium 15 % excl. VAT, 18 % incl.).
- "Categories" as a plain list of the five categories from the deck: Japanese Art (ceramics, lacquer, metalwork, netsuke, ukiyo-e), Asian Art (China, Korea, Southeast Asia, India / Islamic art), Contemporary (painting, sculpture, mixed media, emerging artists — "consignments open", no lots in the demo), Photography (modern, vintage, documentary, fine-art), Antiques & Design (furniture, decorative arts, objects, interiors).

### 6.2 `/sales` and `/sale/:saleId`
Four timed sales. Suggested ids/titles (translate):
- `A` Japanese Art: Edo to Meiji — closes in ~2 days from first visit
- `B` Asian Art: China, Korea and Beyond — closes in ~5 days
- `C` Early Photography of Japan — closes in ~7 days
- `D` Design & Objects — closes in ~9 days
Each sale page: title, short curatorial introduction (3–5 sentences, written by you, specialist tone), dates, sort (lot number / ending soonest / price), the lot grid. Lot numbers like `A-001`.

### 6.3 `/lot/:lotId` Lot page (the most important page)
Sections in this order, separated by hairline rules:
1. Image stage (see §4) and lot number + sale name.
2. Title (serif), one-line attribution using Décret-Marcus-style wording where relevant (e.g. "Utagawa Hiroshige (1797–1858)", "Attribué à …", "École de …", "Japon, période Edo, XVIIIe siècle"). Keep the Met's factual title/date/medium/dimensions as the basis; write the attribution and description yourself in a concise specialist voice (3–6 sentences), in FR / EN / JA.
3. Estimate (low–high), current bid or starting price, number of bids, reserve status ("Reserve met" / "No reserve" / "Reserve not met"), countdown with the "extended" badge when anti-sniping has triggered, closing time (Paris + local).
4. Bid box: the next minimum bid is pre-filled; a select of the next 6 valid amounts; a "Place bid" button (black, square, the only solid button on the page); a "Set a maximum bid" toggle for proxy bids; a watch (heart/eye) toggle. If the visitor has not "registered", the first bid opens a registration modal (name, email, phone, card last-4 — all fake, stored locally; no validation beyond non-empty). After bidding, show the state inline: "You are the highest bidder" / "You have been outbid" / "Your maximum bid of €… is active".
5. Costs breakdown (collapsible on phones): hammer price → buyer's premium 15 % → VAT 20 % on premium → total; plus the shipping estimate line (France / EU / World) and the note on right of withdrawal depending on seller type (private vs Pro), per rules B10 and B11.
6. Description, Condition report (3–4 lines, illustrative), Provenance (one illustrative line such as "Private collection, Lyon, acquired in the 1980s"), Dimensions, Medium, Seller type (Private / Pro), Resale right note when the object is by an artist who died less than 70 years ago (will rarely apply; implement the rule anyway with a `artistDeathYear` field, null for most).
7. Bid history (pseudonymous: "Bidder 4F2A", time, amount, "max bid" marker for the visitor's own proxy).
8. Footnote in italic: "Demo lot. Object image and basic cataloguing: The Metropolitan Museum of Art, Open Access (CC0) — [object link]. Estimates, provenance, condition and bidders are illustrative."
9. Previous / next lot links.

### 6.4 Bidding simulation (shared logic in `src/state/`)
On first visit, seed the state: for every lot, `endsAt = firstVisit + saleOffset + lotIndex × 60 s`, a starting price computed by rule B3, a random number of prior bids (0–7) from simulated bidders forming a plausible history, `reserve` for about half of the lots (hidden; status computed). Persist the seed; subsequent visits continue from it.

Bidding rules: a bid must be ≥ next minimum (current + increment per table B4, or the starting price when no bids). Proxy bids: store the visitor's maximum; the displayed current bid is one increment above the second-highest max (standard eBay-style resolution). Anti-sniping: if a bid lands within 2 minutes of `endsAt`, extend `endsAt` to `now + 2 min` and flag `extended`.

Rival bidders: after the visitor bids, with 60 % probability schedule one simulated rival bid 8–40 s later (one increment above, or above the visitor's max if the max is small), at most **2 rival reactions per lot per visit**, so the visitor can always end up winning. Use `setTimeout` while the tab is open; on reload, apply any rival bids whose scheduled time has passed. Show an "Outbid" banner on the page and a dot on "My bids" in the header.

When `now ≥ endsAt`: the lot is closed. If the visitor is highest (and reserve met or no reserve) → "Won" and a "Pay now" button leading to checkout. If reserve not met → "Unsold — reserve not met". Otherwise "Sold to another bidder".

### 6.5 Demo controls
A discreet "Demo" tab fixed at the bottom-right that opens a small panel: **Reset demo**, **Close this lot now** (only on a lot page: sets `endsAt = now`), **Trigger a rival bid**, **Jump to the checkout example**. Always visible, labelled "Demo controls", so the partner can explore the end-of-sale flow without waiting days.

### 6.6 `/my-bids` and `/watchlist`
Lists of lots the visitor bid on / watched, with status (leading / outbid / won / lost), amounts, and links. Empty states in the three languages.

### 6.7 `/checkout/:lotId` Mock payment
A page that looks like a real, restrained checkout (Stripe Checkout-like layout but our styling): order summary with the breakdown of §6.3.5, shipping choice (seller ships: France / EU / World estimate; pickup in Paris), payment method tabs **Card** (fields: card number, expiry, CVC, name — fake, accept anything; show the brand icon after 4 digits), **SEPA bank transfer** (shows IBAN placeholder and "transfer within 3 days"). A "Pay €…" button → a confirmation page with a fake order number, the payment deadline rule (B8), next steps (seller ships within 5 business days, B10), and an explicit banner "Demo — no payment was taken. Production will use Stripe." Never call Stripe or any API.

### 6.8 `/consign` Sell with ARTIQUE
A 3-step form: object (category, title, description, dimensions, up to 6 photos via file input — previews only, not uploaded), seller (private / professional, country, contact), expectations (asking price / estimate, reserve, shipping from). Submit → "Thank you. A specialist will reply within 3 business days." Show the seller fee line (12 % excl. VAT, no listing fee) and the payout rule (B9) on the first step.

### 6.9 `/how-it-works`, `/about`
- How it works: for buyers (register, bid, proxy, closing/anti-sniping, pay, shipping, withdrawal rights) and for sellers (consign, review, cataloguing by specialists with AI drafting, sale, payout). Include the **bid increments table** and the fee table from the rules.
- About: the concept deck's positioning (curated, built around Japanese and wider Asian art, European presentation standards, trust is the product), the five pillars of trust, and the team roles (Specialist / Sales / IT / Press) — no names.

### 6.10 `/demo-notes` Demo notes & assumptions
Render all 36 items of `data/assumptions.json` grouped (Business / Auction / Payment / Tech / Demo) in the current language (you supply the French), with the sentence from `note_en/note_ja` at the top, the version date, and a "Image credits" section listing every lot's Met object link. This page is where the partner reads what has been assumed.

### 6.11 Legal placeholders
`/legal/terms`, `/legal/privacy`, `/legal/mentions`, `/legal/cookies`: short structured placeholders in three languages with a visible "Placeholder — to be drafted by counsel" tag, but with real headings (identity of the operator, nature of the service as an electronic auction brokerage, fees, right of withdrawal, disputes, data processing in the EU, cookies). A minimal cookie banner (essential only, "OK") shown once.

### 6.12 404
Plain page with a link home.

## 7. Content quality bar

- Lot descriptions must be plausible to an art-market reader: object type, decoration, technique, period, function, condition language ("minor wear to the gilding consistent with age", "firing crack to the foot rim, stable"). Never claim a specific famous provenance or a specific historical owner; keep provenance generic and clearly illustrative.
- Estimates must be plausible for the object class (e.g. an unsigned 19th-century netsuke €300–500; a Goryeo celadon maebyeong €8,000–12,000; a hand-coloured 1870s albumen print €200–300; a Hokusai album leaf €1,500–2,500). Round to clean numbers.
- French must read as native French for the art market (use "estimation", "enchère", "prix d'adjudication", "frais acheteur", "commissaire-priseur" only where appropriate, "frais de vente"). Japanese must use natural auction vocabulary（落札価格、見積、入札、最高額入札、手数料、状態、来歴）.

## 8. Deliverables

- Working app with the routes above; `npm run build` output in `dist/`.
- `README.md` (English, short): what the demo is, how to run (`npm install`, `npm run dev`, `npm run build`), where the business rules live (`src/config/rules.ts` ↔ `data/assumptions.json`), and the image credit.
- No git commits (the orchestrator commits and deploys).

Work in this order: data/lots → rules + i18n scaffolding → layout/header/footer → catalogue + lot page + bidding state → checkout/consign/my-bids → how-it-works/about/demo-notes/legal → polish on a 390 px viewport. If time is short, cut polish on legal placeholders before anything else.
