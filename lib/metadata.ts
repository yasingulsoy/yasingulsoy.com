import type { Metadata, Viewport } from "next";
import { content } from "./content";
import { localePath, site, type Locale } from "./site";

export function buildMetadata(locale: Locale): Metadata {
  const c = content[locale];
  return {
    metadataBase: new URL(site.url),
    title: c.meta.title,
    description: c.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: localePath[locale],
      languages: { tr: localePath.tr, en: localePath.en, "x-default": localePath.tr },
    },
    openGraph: {
      type: "profile",
      firstName: "Yasin",
      lastName: "Gülsoy",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
      url: localePath[locale],
      siteName: site.name,
      title: c.meta.title,
      description: c.meta.description,
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a111b" },
  ],
};

export function personJsonLd(locale: Locale) {
  const c = content[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url + (locale === "en" ? "/en" : ""),
    image: `${site.url}/yasin-gulsoy.jpg`,
    jobTitle: c.hero.role,
    worksFor: { "@type": "Organization", name: "Hospitadent" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "İstanbul Beykent Üniversitesi" },
    address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    knowsLanguage: ["tr", "en"],
    sameAs: [site.linkedin, site.github],
  };
}
