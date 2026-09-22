import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | ${SITE_URL.replace("https://", "")}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en-CA",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: absoluteUrl("/og-image.png"),
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
