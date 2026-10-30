import type { Lang } from "./paths";
import { useTranslations } from "./ui";

export interface DateRange {
    start: string;
    end?: string;
}

const locales: Record<Lang, string> = { de: "de-DE", en: "en-US" };

export function today(): string {
    return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Berlin" }).format(new Date());
}

export function isPast(range: DateRange, now = today()): boolean {
    return (range.end ?? range.start) < now;
}

function formatDay(date: string, lang: Lang): string {
    return new Intl.DateTimeFormat(locales[lang], {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));
}

function formatRange(range: DateRange, lang: Lang): string {
    const start = formatDay(range.start, lang);
    if (!range.end || range.end === range.start) return start;
    return `${start} ${useTranslations(lang)("dates.until")} ${formatDay(range.end, lang)}`;
}

export function formatDates(ranges: DateRange[], lang: Lang): string {
    const parts = ranges.map((r) => formatRange(r, lang));
    return new Intl.ListFormat(locales[lang], { type: "conjunction" }).format(parts);
}
