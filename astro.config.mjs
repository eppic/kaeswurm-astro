// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: "/",
    site: "https://kaeswurm.de/",
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "de",
        routing: {
            prefixDefaultLocale: false,
            fallbackType: "rewrite"
        },
        fallback: {
            en: "de"
        }
    }
});
