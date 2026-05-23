import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// For GitHub Pages: set site to your GitHub Pages URL and base to your repo name
// e.g. site: 'https://yourname.github.io', base: '/ig-unfollow-tool'
export default defineConfig({
  site: 'https://yourname.github.io',
  base: '/',
  integrations: [tailwind()],
});
