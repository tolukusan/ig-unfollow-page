# IG Unfollow Tool — Marketing Page

Apple-style landing page for the Instagram unfollow browser tool. Built with Astro, GSAP, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- pnpm 9+ (`npm i -g pnpm` if you don't have it)

## Local development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:4321`.

## Build

```bash
pnpm build
```

Output goes to `dist/`. Preview it locally with:

```bash
pnpm preview
```

## Deploy to GitHub Pages

### 1. Configure your repo details

Open `astro.config.mjs` and update:

```js
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',  // your GitHub Pages domain
  base: '/YOUR_REPO_NAME',                  // the repo name (omit if deploying to username.github.io directly)
  ...
});
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Deploy

```bash
pnpm deploy
```

This runs `astro build` then publishes `dist/` to the `gh-pages` branch via the `gh-pages` package.

### 4. Enable GitHub Pages

In your repo on GitHub:
- Settings → Pages
- Source: Deploy from branch
- Branch: `gh-pages` / `/ (root)`
- Save

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` within a minute or two.

---

## Project structure

```
src/
├── layouts/
│   └── Layout.astro          — HTML shell, global styles, fonts
├── pages/
│   └── index.astro           — All page sections + GSAP animations
└── components/
    ├── CodeBlock.astro        — Dark code block with macOS chrome + copy button
    ├── TerminalMock.astro     — Animated terminal with scroll-triggered line reveals
    ├── InstagramModalMock.astro — Animated IG-style modal mock (no real assets)
    └── InteractiveTool.astro  — Full paste → review → generate script state machine
```

## Updating GitHub Pages base path

If you rename the repo or deploy to a custom domain, update `base` in `astro.config.mjs` accordingly. A bare `base: '/'` works for `username.github.io` root deployments.
