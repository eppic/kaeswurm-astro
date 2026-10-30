export type Lang = "de" | "en";

/** Text, der entweder in beiden Sprachen gleich ist oder pro Sprache angegeben wird. */
export type Text = string | Record<Lang, string>;

/** Erzeugt für eine Seite unter src/pages/[...lang]/ die Routen /seite (de) und /en/seite. */
export function langPaths() {
    return [
        { params: { lang: undefined } },
        { params: { lang: "en" } },
    ];
}

export function getLang(param: string | undefined): Lang {
    return param === "en" ? "en" : "de";
}

export function tr(text: Text, lang: Lang): string {
    return typeof text === "string" ? text : text[lang];
}
