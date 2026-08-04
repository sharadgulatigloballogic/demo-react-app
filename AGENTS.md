# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single client-side React SPA built with Vite (see `package.json`). There is no
backend, database, or environment variables — the "Profile Search" and "iForm" (I-9) tabs use
in-memory dummy data only.

- Node 22 and npm are preinstalled; the startup update script runs `npm install`.
- Standard commands live in `package.json` scripts — use them directly:
  - Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`).
  - Lint: `npm run lint` (ESLint flat config in `eslint.config.js`).
  - Production build: `npm run build`; preview a built bundle with `npm run preview`.
- There is no test runner configured (no `test` script / test files); "testing" here means lint +
  build + manually exercising the two tabs in the browser.
- The dev server binds to localhost only. Use `npm run dev -- --host` if you need it reachable
  from outside the VM.
