import type { Lang } from "./paths";

const ui = {
    de: {
        "meta.title": "Line Dance by Cheesy",
        "meta.description": "Begeisterte Tänzerin, Trainerin und Autorin im Bereich Line Dance. Bestelle jetzt 'Von Anchor Step bis Weave – Das Referenzbuch für Line Dance'!",

        "nav.home": "Startseite",
        "nav.courses": "Kurse",
        "nav.training": "Ausbildung",
        "nav.about": "Über mich",
        "nav.shop": "Shop",
        "nav.switch": "Change to English",
        "nav.open": "Menü öffnen",
        "nav.close": "Menü schließen",

        "footer.contact": "Kontakt",
        "footer.address": "Adresse",
        "footer.phone": "Telefon",
        "footer.privacy": "Datenschutz",
        "footer.imprint": "Impressum",
        "footer.rights": "alle Rechte vorbehalten.",

        "kurse.date": "Termin",
        "kurse.location": "Ort",
        "kurse.more": "Weitere Informationen",
        "kurse.each": "jeweils",

        "dates.until": "bis",

        "mail.text": "Melde dich bei mir!",
        "shop.shipping": "zzgl. Versandkosten",
    },
    en: {
        "meta.title": "Line Dance by Cheesy",
        "meta.description": "Passionate dancer, trainer and author in the field of line dance. Order 'From Anchor Step to Weave – A Reference Book for Line Dancers' now!",

        "nav.home": "Home",
        "nav.courses": "Courses",
        "nav.training": "Certification",
        "nav.about": "About me",
        "nav.shop": "Shop",
        "nav.switch": "Wechsel zu Deutsch",
        "nav.open": "Open menu",
        "nav.close": "Close menu",

        "footer.contact": "Contact",
        "footer.address": "Address",
        "footer.phone": "Phone",
        "footer.privacy": "Privacy Policy",
        "footer.imprint": "Legal Notice",
        "footer.rights": "All rights reserved.",

        "kurse.date": "Date",
        "kurse.location": "Location",
        "kurse.more": "More information",
        "kurse.each": "each",

        "dates.until": "-",

        "mail.text": "Get in touch with me!",
        "shop.shipping": "plus shipping",
    },
} as const;

export type UiKey = keyof typeof ui.de;

export function useTranslations(lang: Lang) {
    return (key: UiKey): string => ui[lang][key];
}

export const navItems: { path: string; key: UiKey }[] = [
    { path: "", key: "nav.home" },
    { path: "kurse", key: "nav.courses" },
    { path: "ausbildung", key: "nav.training" },
    { path: "astrid", key: "nav.about" },
    { path: "shop", key: "nav.shop" },
];
