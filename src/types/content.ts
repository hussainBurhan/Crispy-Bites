export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    description: string;
    features: string[];
}

export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface AboutSection {
    title: string;
    story: string;
    features: Feature[];
}

export interface HeroSection {
    tagline: string;
    subtitle: string;
    cta: {
        primary: string;
        secondary: string;
    };
}

export interface ContactInfo {
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    hours: string;
}

export interface QuickLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    url: string;
}

export interface FooterSection {
    tagline: string;
    quickLinks: QuickLink[];
    social: SocialLink[];
    copyright: string;
}

export interface SiteContent {
    hero: HeroSection;
    about: AboutSection;
    products: Product[];
    contact: ContactInfo;
    footer: FooterSection;
}
