export type ShowcaseProject = {
  id: string;
  title: string;
  subtitle: string;
  stack: string;
  href: string;
  status: string;
  bannerStyle: string;
};

export type PinnedProjectItem = {
  id: string;
  name: string;
  description: string;
  language: string;
  htmlUrl: string;
  tag?: string;
};

/** Edit pinned cards here — order is display order. */
export const PINNED_PROJECTS: PinnedProjectItem[] = [
  {
    id: "sph4u0-final",
    name: "SPH4U0 Final Project",
    description:
      "York University physics final project — interactive web experience shipped on Vercel.",
    language: "TypeScript",
    tag: "School",
    htmlUrl: "https://sph4u0-final-project.vercel.app",
  },
  {
    id: "yall-goal",
    name: "Yall Goal",
    description:
      "Mobile app for renting football venues — browse pitches, book slots, and manage reservations.",
    language: "Expo / Flutter",
    tag: "Mobile App",
    htmlUrl: "https://github.com/HastH8",
  },
  {
    id: "coderanch",
    name: "CodeRanch",
    description: "RedM script marketplace — inventory, jobs, chat, fishing, forensics, and more.",
    language: "TypeScript / Lua",
    tag: "Store",
    htmlUrl: "https://coderanch.store",
  },
  {
    id: "fastscripts",
    name: "FastScripts",
    description: "Premium FiveM scripts for ESX, QBCore & QBox — jobs, UI, admin tools, and utilities.",
    language: "Lua / NUI",
    tag: "Store",
    htmlUrl: "https://fastscripts.tebex.io",
  },
  {
    id: "uiforge",
    name: "UiForge",
    description: "UI kits and NUI packs for roleplay servers on Tebex.",
    language: "Lua",
    tag: "Store",
    htmlUrl: "https://uiforge.tebex.io",
  },
  {
    id: "0resmon",
    name: "0Resmon",
    description: "Full-stack product work for a major FiveM resource studio.",
    language: "TypeScript",
    tag: "Studio",
    htmlUrl: "https://0resmon.com",
  },
];

const gradient = (from: string) => `linear-gradient(135deg, ${from} 0%, #111827 70%)`;

/**
 * Showcase products (non-GitHub). Add or reorder items here anytime.
 * GitHub repos are loaded separately and shown under the GitHub tab.
 */
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "yall-goal",
    title: "Yall Goal",
    subtitle: "Mobile application for renting football venues — booking, schedules, and venue discovery.",
    stack: "Expo / Flutter / Mobile",
    href: "https://github.com/HastH8",
    status: "In Progress",
    bannerStyle: gradient("#16a34a"),
  },
  {
    id: "sph4u0-final",
    title: "SPH4U0 Final Project",
    subtitle: "Physics final project web build for York University coursework.",
    stack: "Next.js / TypeScript",
    href: "https://sph4u0-final-project.vercel.app",
    status: "Completed",
    bannerStyle: gradient("#2563eb"),
  },
  // FastScripts
  {
    id: "fs-7597409",
    title: "Multiplayer Forklift Job",
    subtitle: "Crew-based warehouse logistics job with leveling, parties, and optimized forklift mechanics.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7597409",
    status: "FastScripts",
    bannerStyle: gradient("#ea580c"),
  },
  {
    id: "fs-7535174",
    title: "Multiplayer Electric Job",
    subtitle: "Utility crew job restoring power grids with dynamic routing and recycling systems.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7535174",
    status: "FastScripts",
    bannerStyle: gradient("#eab308"),
  },
  {
    id: "fs-7517194",
    title: "Multiplayer Garbage Job",
    subtitle: "Sanitation job with party crews, dynamic routes, recycling, and career tracking.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7517194",
    status: "FastScripts",
    bannerStyle: gradient("#65a30d"),
  },
  {
    id: "fs-7243173",
    title: "Animation Menu +7000 Emotes",
    subtitle: "Advanced customizable emote menu with themes, favorites, and quick-access shortcuts.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7243173",
    status: "FastScripts",
    bannerStyle: gradient("#db2777"),
  },
  {
    id: "fs-7403969",
    title: "Newspaper Job",
    subtitle: "Newspaper delivery job with routes, party bonuses, and career stats.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7403969",
    status: "FastScripts",
    bannerStyle: gradient("#0ea5e9"),
  },
  {
    id: "fs-7338257",
    title: "Advanced Radio V3",
    subtitle: "Modern radio system for roleplay servers with framework support.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7338257",
    status: "FastScripts",
    bannerStyle: gradient("#7c3aed"),
  },
  {
    id: "fs-7350568",
    title: "Contract System",
    subtitle: "Vehicle sale contracts with signatures, tax, market history, and secure RP flow.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7350568",
    status: "FastScripts",
    bannerStyle: gradient("#0891b2"),
  },
  {
    id: "fs-7366374",
    title: "Billing System",
    subtitle: "Personal and society invoices with search, tax, and approval-based payments.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7366374",
    status: "FastScripts",
    bannerStyle: gradient("#059669"),
  },
  {
    id: "fs-7331930",
    title: "Helicam",
    subtitle: "Helicopter camera with lock-on, spotlight, thermal/night vision, and markers.",
    stack: "FiveM / Standalone",
    href: "https://fastscripts.tebex.io/package/7331930",
    status: "FastScripts",
    bannerStyle: gradient("#4f46e5"),
  },
  {
    id: "fs-7295997",
    title: "Outfitbag",
    subtitle: "Premium outfit save/wear system with themes, sizes, and one-click apply.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/7295997",
    status: "FastScripts",
    bannerStyle: gradient("#c026d3"),
  },
  {
    id: "fs-6840317",
    title: "Admin Menu",
    subtitle: "Full admin toolkit — permissions, weapons, tools, chat, and support requests.",
    stack: "FiveM / ESX / QBCore / QBox",
    href: "https://fastscripts.tebex.io/package/6840317",
    status: "FastScripts",
    bannerStyle: gradient("#dc2626"),
  },
  // CodeRanch
  {
    id: "cr-7685664",
    title: "VORP Inventory Enhanced",
    subtitle: "RedM VORP inventory with crafting, stashes, hotbar, shops, backpacks, and weapon repair.",
    stack: "RedM / VORP",
    href: "https://www.coderanch.store/store/7685664",
    status: "CodeRanch",
    bannerStyle: gradient("#b45309"),
  },
  {
    id: "cr-7322258",
    title: "cMarket",
    subtitle: "RedM NPC market system with multi-location vendors, buy/sell, and Discord logging.",
    stack: "RedM / Multi-framework",
    href: "https://www.coderanch.store/store/7322258",
    status: "CodeRanch",
    bannerStyle: gradient("#ca8a04"),
  },
  {
    id: "cr-7341886",
    title: "cBoxDelivery",
    subtitle: "Delivery job with wagon tiers, co-op teams, leveling, leaderboards, and route missions.",
    stack: "RedM / cBase",
    href: "https://www.coderanch.store/store/7341886",
    status: "CodeRanch",
    bannerStyle: gradient("#a16207"),
  },
  {
    id: "cr-7395724",
    title: "cChat",
    subtitle: "Modern RedM chat with themes, channels, mentions, emoji, and moderation tools.",
    stack: "RedM / cBase",
    href: "https://www.coderanch.store/store/7395724",
    status: "CodeRanch",
    bannerStyle: gradient("#9333ea"),
  },
  {
    id: "cr-7385493",
    title: "cEvidence",
    subtitle: "Forensics system with casings, bloodstains, weather decay, and lab analysis UI.",
    stack: "RedM / cBase",
    href: "https://www.coderanch.store/store/7385493",
    status: "CodeRanch",
    bannerStyle: gradient("#be123c"),
  },
  {
    id: "cr-7340170",
    title: "cFishing",
    subtitle: "Fishing progression with rarity tiers, rods, co-op, weekly missions, and leaderboards.",
    stack: "RedM / cBase",
    href: "https://www.coderanch.store/store/7340170",
    status: "CodeRanch",
    bannerStyle: gradient("#0284c7"),
  },
  {
    id: "cr-7383163",
    title: "cPauseMenu",
    subtitle: "Custom pause menu with daily rewards, playtime, keybinds, and cinematic camera.",
    stack: "RedM / cBase",
    href: "https://www.coderanch.store/store/7383163",
    status: "CodeRanch",
    bannerStyle: gradient("#334155"),
  },
  {
    id: "0resmon_website",
    title: "0Resmon Studio Website",
    subtitle: "Official website for 0Resmon Studio showcasing FiveM Tebex store design and services.",
    stack: "Twig / JavaScript / Tailwind / GSAP",
    href: "https://0resmon.tebex.io/",
    status: "Completed",
    bannerStyle: gradient("#be123c"),
  },
];
