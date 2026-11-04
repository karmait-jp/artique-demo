# AGENTS.md — ARTIQUE demo site

You are implementing a static demo website from `SPEC.md`. Read `SPEC.md` fully before writing code.

Rules
- Work only inside this repository. Do not run `git commit`; the orchestrator commits.
- Do not modify or delete `data/met-objects.json`, `data/assumptions.json`, `public/lots/*`, `SPEC.md`, `AGENTS.md`, or `.github/`.
- Dependencies are already installed (`node_modules`). You may add small, well-known packages if truly needed, but prefer zero new dependencies. No Tailwind, no UI kits, no analytics, no external APIs.
- `npm run typecheck` and `npm run build` must both pass before you finish. Run them yourself.
- Do not use `npm run dev` left running in the background; use `npm run build` + `npm run preview` only for checks and stop them.
- Keep the final message short: what you built, what you could not finish, and any decisions you made that deviate from SPEC.md.
