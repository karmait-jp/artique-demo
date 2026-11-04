# ARTIQUE demo

A static, multilingual auction concept launching with photography, with Japanese art, wider Asian art and design shown as later phases. The catalogue uses museum objects to illustrate simulated lots. Bids, rivals, registration, consignments and checkout are browser-only demonstrations: nothing is sold and no money is taken.

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

The production build is written to `dist/`. Vite uses `/artique-demo/` as its base and React uses hash routes for GitHub Pages. Browser state is saved under `artique-demo-state-v1`; the Demo controls can reset it. Earlier demo saves are reseeded under the revised rules while keeping language, registration, cookie preference and watched lots.

Business rules live in `src/config/rules.ts`, sourced from the numbered planning assumptions in `data/assumptions.json`. The Demo Notes page reproduces those assumptions in French, English and Japanese. Curated lot records live in `src/data/lots.ts`: seller-language listings, explicit starting prices, optional estimates and buy-now prices, and seller-set France/EU shipping. Bids and buy-now prices are capped at €9,999; closing times are fixed. Checkout offers mock card and PayPal payments. The AI drafting button is a local template, with vocabulary guidance sourced from the [Décret Marcus](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000684875/).

Object images and basic cataloguing: The Metropolitan Museum of Art, Open Access (CC0). Each lot and the image credits page link to its museum record. Estimates, provenance, condition reports and bidders are illustrative. Existing local images are used unchanged. Google Fonts supplies Cormorant Garamond and Noto Serif JP; no external API, payment provider or analytics is called.

Verification: `npm run typecheck`, `npm run build`, `node scripts/verify-engine.mjs` and `node scripts/verify-rules.mjs`. Optional browser checks use `scripts/browser-check.mjs` with a preview server and Chromium’s debugging port 9222; `PREVIEW_URL` can override the default preview URL. App-authored UI copy is checked for retired terms; the Demo Notes reproduce the immutable English/Japanese planning record verbatim, including explicit exclusions.
