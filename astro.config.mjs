// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // Интеграци @astrojs/sitemap для sitemap.xml
import robotsTxt from 'astro-robots-txt'; // Интеграци astro-robots-txt для robots.txt
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(), // Интеграци @astrojs/sitemap для sitemap.xml
    mdx(),
    icon(),
    robotsTxt({
      // Тут вы добавляете конфигурацию для robots.txt
      // (Например, ссылку на ваш sitemap, которую он добавит автоматически)
      sitemap: true, // Это ОЧЕНЬ важно, чтобы robots.txt ссылался на sitemap.xml
      
      // Дополнительные правила, если нужны:
      policy: [
        {
          userAgent: '*', // Правила для всех ботов
          allow: '/',     // Разрешить индексацию всего сайта
          // disallow: '/private/', // Запретить индексацию папки '/private/'
        },
      ],
      
    }),
  ],
  site: 'https://dd.co.ua', // УКАЖИТЕ ТОЛЬКО АДРЕС ВАШЕГО ЛЕНДИНГА,
  trailingSlash: 'never', // без слеша в конце домена
});
