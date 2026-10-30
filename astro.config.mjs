// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    base: "/",
    site: "https://kaeswurm.de/",
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "de",
        routing: {
            prefixDefaultLocale: false
        }
    },
    integrations: [
        sitemap({
            filter: (page) => !/\/(404|500)\/?$/.test(page),
            i18n: {
                defaultLocale: "de",
                locales: { de: "de-DE", en: "en-US" },
            },
        }),
    ],
});
