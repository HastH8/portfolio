import type { Metadata } from "next";

/** Canonical production domain */
export const SITE_DOMAIN = "hastherish.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${SITE_DOMAIN}`);

export const SITE_NAME = "Hast Herish";
export const SITE_HANDLE = "hastherish";
export const DISCORD_HANDLE = "ked.ss";
export const SITE_DESCRIPTION =
  "Hast Herish (hastherish.com) — software engineering student at York University in Toronto. Full-stack developer building web apps, mobile apps, desktop apps, FiveM scripts, and RedM scripts. Founder of CodeRanch & UiForge. Hire for freelance software engineering in Canada.";
export const GITHUB_USERNAME = "HastH8";
export const SITE_EMAIL = "hast.herish@icloud.com";
export const SITE_LOCATION = "Toronto, Canada";
export const SITE_TIMEZONE = "America/Toronto (EST)";
/** @see https://github.com/Phineas/lanyard */
export const DISCORD_USER_ID = "667286933097152513";
export const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

export const SITE_KEYWORDS = [
  "Hast Herish",
  "hastherish",
  "hastherish.com",
  "Hast Herish portfolio",
  "Hast Herish Toronto",
  "Hast Herish York University",
  "York University software engineering",
  "York University Toronto developer",
  "Toronto software developer",
  "Toronto full stack developer",
  "full stack developer Toronto",
  "freelance software engineer Canada",
  "freelance developer Toronto",
  "hire full stack developer Toronto",
  "web application development",
  "mobile app development Toronto",
  "desktop application development",
  "Next.js developer Toronto",
  "React developer Canada",
  "React Native Expo developer",
  "Flutter UI developer",
  "TypeScript developer",
  "Java developer",
  "Lua developer",
  "FiveM script developer",
  "RedM script developer",
  "FiveM Lua scripts",
  "RedM resources",
  "Tebex scripts",
  "CodeRanch",
  "coderanch.store",
  "UiForge",
  "uiforge.tebex.io",
  "FastScripts",
  "0Resmon",
  "game server scripting",
  "NUI developer",
  "full stack engineer",
  "software engineering student portfolio",
] as const;

export const SOCIAL_LINKS = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  discord: `https://discord.com/users/${DISCORD_USER_ID}`,
  website: `https://${SITE_DOMAIN}`,
  coderanch: "https://coderanch.store",
  fastscripts: "https://fastscripts.tebex.io",
  zeroResmon: "https://0resmon.com",
  uiforge: "https://uiforge.tebex.io",
} as const;

export function absoluteUrl(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalized, SITE_URL).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = [...new Set([...SITE_KEYWORDS, ...keywords])];
  const fullTitle = path === "/" ? `${SITE_NAME} | Full Stack Developer in Toronto` : `${title} | ${SITE_NAME}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    applicationName: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-CA": url,
        en: url,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${SITE_NAME} | ${SITE_DOMAIN}`,
      locale: "en_CA",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: `@${SITE_HANDLE}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    image: absoluteUrl("/og-image.png"),
    jobTitle: "Software Engineering Student & Full Stack Developer",
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "York University",
      url: "https://www.yorku.ca/",
    },
    knowsLanguage: ["en", "tr", "ar", "fr"],
    sameAs: Object.values(SOCIAL_LINKS),
    knowsAbout: [
      "Web Applications",
      "Mobile Applications",
      "Desktop Applications",
      "Next.js",
      "TypeScript",
      "React",
      "Flutter",
      "Expo",
      "Java",
      "FiveM",
      "RedM",
      "Lua",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ["hastherish", SITE_DOMAIN],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
