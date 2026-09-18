# knowlith-site

Marketing site and docs for [Knowlith](https://github.com/bethel-ai-labs/knowlith), under [Bethel AI Labs](https://github.com/bethel-ai-labs).

This repository (`bethel-ai-labs/knowlith-site`) is the public **marketing + docs** web surface: thesis pages, product story, documentation, and approve/review metaphors. The product daemon, MCP gateway, and desktop UI live in **bethel-ai-labs/knowlith** — not here.

## Layout

| Path | Purpose |
|------|---------|
| `apps/web` | Vite / React + TypeScript marketing site + Docs |
| `docs` | Long-form docs (scores, claims, context engineering) |
| `brand` | Brand assets |
| `campaigns` | GTM / campaign notes |

## Run the web app

```sh
cd apps/web
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the build
```

## Ownership

- Org / this site: `bethel-ai-labs/knowlith-site`
- Product daemon: [`bethel-ai-labs/knowlith`](https://github.com/bethel-ai-labs/knowlith)
- CODEOWNERS: `@PetarVukovic`

## What this is not

- Not the Knowlith daemon or MCP server
- Not a GitHub Releases host (install still points at the product repo)
- Not a place for invented metrics or “Claude ✓ updated” claims
