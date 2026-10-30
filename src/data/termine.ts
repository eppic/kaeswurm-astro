import type { Text } from "@i18n/paths";
import type { DateRange } from "@i18n/dates";

interface Basis {
    title: Text;
    country?: string;
    address: string;
    linkName?: string;
    linkRef?: string;
    linkDescription?: Text;
    details?: Text;
    open?: boolean;
    hidden?: boolean;
}

export interface Kurs extends Basis {
    date: Text;
    end?: string;
}

export interface Veranstaltung extends Basis {
    dates: DateRange[];
    time?: Text;
}

const infoLink = { de: "Info & Zeitplan", en: "Info & Schedule" };

export const regular: Kurs[] = [
    {
        open: true,
        title: { de: "Line Dance Lernen mit Cheesy ist easy", en: "Line Dance with Cheesy is easy" },
        country: "DE",
        date: {
            de: "Jeden Montag, ab dem 28. September 2026 (10 Abende, 18:30 – 20:00 Uhr)",
            en: "Every Monday, starting September 28, 2026 (10 Evenings, 6:30 PM – 8:00 PM)",
        },
        end: "2026-11-30",
        address: "Reichenhaller Straße 15, 83451 Piding",
        linkName: "astrid@kaeswurm.de",
        linkRef: "mailto:astrid@kaeswurm.de",
        linkDescription: { de: "Info & Anmeldung (Email)", en: "Information & Registration (Email)" },
        details: {
            de: `<ul><li><span>Leitung</span>: Astrid „Cheesy“ Kaeswurm</li><li>10 Abende für <span>100€</span></li></ul>`,
            en: `<ul><li><span>Instruction</span>: Astrid „Cheesy“ Kaeswurm</li><li>10 Evenings for <span>100€</span></li></ul>`,
        },
    },
    {
        hidden: true,
        title: { de: "Line Dance in Piding", en: "Line Dance in Piding" },
        date: { de: "Montags von 18:30 Uhr - 20:00 Uhr", en: "Mondays from 6:30 PM - 8:00 PM" },
        address: "Reichenhaller Str. 15, 83451 Piding",
        details: {
            de: `<ul><li><span>Leitung</span>: Astrid „Cheesy“ Kaeswurm</li><li>10er-Block <span>100€</span></li><li>5er-Block <span>60€</span></li><li>Schnuppertraining <span>5€</span></li></ul>`,
            en: `<ul><li><span>Instruction</span>: Astrid „Cheesy“ Kaeswurm</li><li>10er-Block <span>100€</span></li><li>5er-Block <span>60€</span></li><li>Intro Session <span>5€</span></li></ul>`,
        },
    },
    {
        title: { de: "Line Dance im TSC Dance & Lifestyle in Salzburg", en: "Line Dance at TSC Dance & Lifestyle in Salzburg" },
        country: "AT",
        date: { de: "Dienstags von 18:00 Uhr - 21:00 Uhr", en: "Tuesdays from 6:00 PM - 9:00 PM" },
        address: "TSC Dance & Lifestyle - Wiener Bundesstraße 15, 5300 Hallwang bei Salzburg",
    },
];

export const single: Veranstaltung[] = [
    {
        title: { de: "Line Dance Kurs im Oceans", en: "Line Dance Class at Oceans" },
        country: "DE",
        dates: [
            { start: "2026-11-07" },
            { start: "2027-03-06" },
            { start: "2027-04-24" },
        ],
        time: { de: "19 – 21 Uhr", en: "from 7 PM to 9 PM" },
        address: "Oceans in der Spielbank Bad Reichenhall",
        linkName: "spielbanken-bayern.de",
        linkRef: "https://www.spielbanken-bayern.de/spielbanken/bad-reichenhall/oceans-club",
        linkDescription: infoLink,
    },
    {
        title: "Tanz:fest Gastein, Linedance Edition",
        country: "AT",
        dates: [{ start: "2027-03-18", end: "2027-03-21" }],
        address: "Bad Gastein",
        linkName: "gastein.com",
        linkRef: "https://www.gastein.com/erlebnisse-events/veranstaltungen/tanzfest/tanzfest-linedance-edition/",
        linkDescription: infoLink,
    },
    {
        title: "T-T-T-T - Tanz-Trainer-Tratsch-Treff in Piding",
        dates: [{ start: "2027-04-09" }],
        time: { de: "ab 10:00 Uhr", en: "from 10:00 AM" },
        address: "Neubichler Alm, Piding",
        linkName: "Facebook",
        linkRef: "https://www.facebook.com/photo?fbid=26515300708079460&set=a.558382834197936",
        details: {
            de: "<p>Austausch & Treffen für Tanz-Trainer:innen</p>",
            en: "<p>Exchange & Meetup for Dance Instructors</p>",
        },
    },
    {
        title: { de: "Line Dance Ferien & Festival 2027", en: "Line Dance Holidays & Festival 2027" },
        country: "DE",
        dates: [{ start: "2027-05-30", end: "2027-06-06" }],
        address: "Oberstaufen",
        linkName: "perfects-shop.ch",
        linkRef: "https://www.perfects-shop.ch/de/?cPath=2_36&cat=c36_Oberstaufen-Line-Dance-Ferien---Festival-2027-line-dance-ferien.html",
        linkDescription: infoLink,
    },
    {
        title: { de: "Alp Festival mit Weltrekordversuch", en: "Alp Festival with World Record Attempt" },
        country: "AT",
        dates: [{ start: "2027-06-17", end: "2027-06-20" }],
        address: "Zell am See-Kaprun",
        linkName: "zellamsee-kaprun.com",
        linkRef: "https://www.zellamsee-kaprun.com/de/events/line-dance-alpfestival",
        linkDescription: infoLink,
    },
    {
        title: "Line Dance Festival",
        country: "DE",
        dates: [{ start: "2027-09-17", end: "2027-09-19" }],
        address: "Freiburg im Breisgau",
        linkName: "linedancefestival.de",
        linkRef: "https://linedancefestival.de/freiburg/",
        linkDescription: infoLink,
    },
];
