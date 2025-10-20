// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    icon()
  ],
  site: 'https://dd.co.ua', // УКАЖИТЕ ТОЛЬКО АДРЕС ВАШЕГО ЛЕНДИНГА,
  trailingSlash: 'never', // без слеша в конце домена
});
