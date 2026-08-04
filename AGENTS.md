# AGENTS.md

## Cursor Cloud specific instructions

This repo (`demo-react-app`) is a single-page **Vite + React 19** app. There is no backend — the
Profile Search and iForm (I-9) tabs use in-memory dummy data and simulated (`setTimeout`) async calls,
so no database, API keys, or external services are required to run or test it.

### Toolchain
- Node 22 and npm are preinstalled. The package manager is **npm** (`package-lock.json`); do not switch to pnpm/yarn.
- Dependencies are installed automatically by the environment update script (`npm install`). No extra setup is needed.

### Commands (see `package.json` scripts)
- Dev server: `npm run dev` (Vite, defaults to port 5173). Use `npm run dev -- --host 0.0.0.0 --port 5173` when the app must be reachable outside localhost.
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`).
- Production build: `npm run build` (outputs to `dist/`).
- Preview a built bundle: `npm run preview`.

### Notes / gotchas
- There is no automated test suite (no `test` script). "Testing" means running lint/build and exercising the UI in the dev server.
- The I-9 form validates required fields (SSN, ZIP, email, phone use regex formats) before showing the success message, and it auto-resets a few seconds after a successful submit.
