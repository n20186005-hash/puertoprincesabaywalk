import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config';

const integrations = [sitemap()];
if (!siteConfig.baseUrl) {
  // sitemap 仅在 site 有值时启用，域名缺失时优雅降级
  integrations.length = 0;
}

export default defineConfig({
  site: siteConfig.baseUrl || undefined,
  trailingSlash: 'ignore',
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
