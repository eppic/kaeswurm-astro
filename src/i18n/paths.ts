export type Lang = "de" | "en";

export type Text = string | Record<Lang, string>;

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
