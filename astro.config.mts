// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://poplanguage.github.io',
  base: '/pop-site',
  integrations: [mdx()],
  redirects: {
    "/book": "https://poplanguage.github.io/book/"
  }
});
