# Pop language website

The Astro source for the Pop programming language homepage.

## Local development

Install dependencies with `pnpm install`, then use Astro's managed background server:

```sh
pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Create the production site with:

```sh
pnpm build
```

The build is fully static and deploys to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The external Pop Book remains available at <https://poplanguage.github.io/book/>; `/book` is retained as a compatibility redirect.

## Structure

- `src/pages/index.astro` — homepage narrative and content
- `src/components/` — brand, navigation, atmosphere, and code presentation
- `src/styles/global.css` — design tokens and global behavior
- `public/pop.svg` — official Pop mark from the language repository
