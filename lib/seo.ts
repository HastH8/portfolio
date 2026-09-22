import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://hastherish.com");
export const SITE_NAME = "Hast Herish";
export const SITE_HANDLE = "hastherish";
export const DISCORD_HANDLE = "ked.ss";
export const SITE_DESCRIPTION =
  "Hast Herish — software engineering student at York University (Toronto) building web apps, mobile apps, desktop apps, FiveM scripts, and RedM scripts. Full-stack developer, freelance engineer, and founder of CodeRanch & UiForge.";
export const GITHUB_USERNAME = "HastH8";
export const SITE_EMAIL = "hast.herish@icloud.com";
export const SITE_LOCATION = "Toronto, Canada";
export const SITE_TIMEZONE = "America/Toronto (EST)";
/** @see https://github.com/Phineas/lanyard */
export const DISCORD_USER_ID = "667286933097152513";
export const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

export const SITE_KEYWORDS = [
  "Hast Herish",
  "Hast Herish portfolio",
  "York University software engineering",
  "Toronto software developer",
  "full stack developer Toronto",
  "freelance software engineer Canada",
  "web application development",
  "mobile app development",
  "desktop application development",
  "Next.js developer",
  "React Native Expo",
  "Flutter UI",
  "TypeScript developer",
  "Java developer",
  "FiveM script developer",
  "RedM script developer",
  "FiveM Lua scripts",
  "RedM resources",
  "CodeRanch",
  "UiForge",
  "FastScripts",
  "0Resmon",
  "Tebex scripts",
  "game server scripting",
  "full stack engineer",
] as const;

export const SOCIAL_LINKS = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  discord: `https://discord.com/users/${DISCORD_USER_ID}`,
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
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = [...SITE_KEYWORDS, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      creator: `@${SITE_HANDLE}`,
      images: [absoluteUrl("/og-image.png")],
    },
  };
}
