import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/seo/json-ld";
import {
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_EMAIL,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
  getPersonJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const font = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Full Stack Developer in Toronto`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "technology",
  classification: "Portfolio / Software Engineering",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-CA": absoluteUrl("/"),
      en: absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Full Stack Developer in Toronto`,
    description: SITE_DESCRIPTION,
    siteName: `${SITE_NAME} | ${SITE_DOMAIN}`,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Full Stack Developer in Toronto`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon" }],
    apple: [{ url: "/apple-icon" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "contact:email": SITE_EMAIL,
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6532;-79.3832",
    ICBM: "43.6532, -79.3832",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v7.2.0/css/all.css" />
        <link rel="me" href={SOCIAL_LINKS.github} />
        <link rel="me" href={SOCIAL_LINKS.discord} />
        <link rel="author" href={SITE_URL} />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${font.className} antialiased bg-neutral-950`}>
        <JsonLd data={getPersonJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
