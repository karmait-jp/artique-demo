# ARTIQUE demo

A static, multilingual auction-house concept for Japanese and wider Asian art. The catalogue uses museum objects to illustrate simulated lots. Bids, rivals, registration, consignments and checkout are browser-only demonstrations: nothing is sold and no money is taken.

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

The production build is written to `dist/`. Vite uses `/artique-demo/` as its base and React uses hash routes for GitHub Pages. Browser state is saved under `artique-demo-state-v1`; the Demo controls can reset it.

Business rules live in `src/config/rules.ts`, sourced from the numbered planning assumptions in `data/assumptions.json`. The Demo Notes page reproduces those assumptions in French, English and Japanese. Curated lot records live in `src/data/lots.ts`.

Object images and basic cataloguing: The Metropolitan Museum of Art, Open Access (CC0). Each lot and the image credits page link to its museum record. Estimates, provenance, condition reports and bidders are illustrative. Existing local images are used unchanged. Google Fonts supplies Cormorant Garamond and Noto Serif JP; no external API, payment provider or analytics is called.
