export const site = {
    name: "Astrid Kaeswurm",
    email: "astrid@kaeswurm.de",
    orderEmail: "bestellung@linedance-buch.de",
    phone: {
        display: "+49 (0)170 3171206",
        href: "tel:+491703171206",
    },
    address: {
        street: "Marzoller Weg 21",
        city: "83451 Piding",
        country: "D",
    },
    instagram: {
        name: "@astrid_kaeswurm",
        url: "https://www.instagram.com/astrid_kaeswurm",
    },
    facebook: {
        name: "Astrid Kaeswurm",
        url: "https://www.facebook.com/LD.Cheesy",
    },
};

export function mailto(email: string, subject?: string) {
    return subject ? `mailto:${email}?subject=${subject}` : `mailto:${email}`;
}
