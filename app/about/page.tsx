import Navbar from "@/components/navbar";
import JsonLd from "@/components/seo/json-ld";
import type { Metadata } from "next";
import {
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Hast Herish — 22-year-old software engineering student at York University in Toronto. Speaks Turkish, Arabic, English, and French. Builds apps and FiveM/RedM scripts.",
  path: "/about",
  keywords: [
    "about Hast Herish",
    "York University software engineering",
    "Toronto developer bio",
    "multilingual developer",
  ],
});

const focusAreas = [
  "Web, mobile, and desktop application development",
  "FiveM and RedM script architecture",
  "Storefronts, Tebex products, and creator tooling",
  "Clean UI systems with long-term maintainability",
];

const languagesSpoken = [
  { name: "English", level: "Fluent — daily academic & professional use" },
  { name: "Turkish", level: "Fluent — native conversational comfort" },
  { name: "Arabic", level: "Fluent — family and community communication" },
  { name: "French", level: "Conversational — growing toward professional use" },
];

const cc = (query: string) =>
  `https://www.canadacomputers.com/en/search?search_query=${encodeURIComponent(query)}`;

const equipmentItems = [
  {
    category: "CPU",
    name: "AMD Ryzen 7 7800X3D",
    note: "8-core / 16-thread gaming & compile powerhouse",
    href: cc("AMD Ryzen 7 7800X3D"),
  },
  {
    category: "GPU",
    name: "NVIDIA GeForce RTX 4070 Super",
    note: "12GB GDDR6X for UI work, streaming, and local builds",
    href: cc("RTX 4070 Super"),
  },
  {
    category: "Motherboard",
    name: "Gigabyte B650 AORUS Elite AX",
    note: "Wi-Fi 6E, PCIe 5.0, solid VRM for daily development",
    href: cc("B650 AORUS Elite AX"),
  },
  {
    category: "RAM",
    name: "G.Skill Flare X5 32GB DDR5-6000",
    note: "2x16GB CL30 kit for smooth multitasking",
    href: cc("DDR5 6000 32GB"),
  },
  {
    category: "Storage",
    name: "Samsung 990 PRO 2TB NVMe",
    note: "Primary OS + projects drive — fast compile & asset loads",
    href: cc("Samsung 990 PRO 2TB"),
  },
  {
    category: "PSU",
    name: "Corsair RM850x 850W 80+ Gold",
    note: "Fully modular, quiet, and headroom for upgrades",
    href: cc("Corsair RM850x"),
  },
  {
    category: "Case",
    name: "Lian Li Lancool 216",
    note: "High airflow mid-tower for Toronto summer heat",
    href: cc("Lian Li Lancool 216"),
  },
  {
    category: "Cooler",
    name: "Thermalright Peerless Assassin 120 SE",
    note: "Dual-tower air cooler — silent under long compile jobs",
    href: cc("Peerless Assassin 120 SE"),
  },
  {
    category: "Monitor",
    name: "LG UltraGear 27\" 1440p 165Hz",
    note: "Primary IPS display for design and coding",
    href: cc("LG UltraGear 27 1440p"),
  },
  {
    category: "Keyboard",
    name: "Keychron K8 Pro",
    note: "Wireless mechanical board for long coding sessions",
    href: cc("Keychron K8 Pro"),
  },
  {
    category: "Mouse",
    name: "Logitech G Pro X Superlight 2",
    note: "Lightweight wireless mouse for UI precision work",
    href: cc("G Pro X Superlight 2"),
  },
  {
    category: "Headset",
    name: "Sony WH-1000XM5",
    note: "Noise cancelling for library and dorm focus blocks",
    href: cc("Sony WH-1000XM5"),
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE_NAME}`,
          url: `${SITE_URL}/about`,
          mainEntity: {
            "@type": "Person",
            name: SITE_NAME,
            url: SITE_URL,
            email: SITE_EMAIL,
            jobTitle: "Software Engineering Student & Full Stack Developer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toronto",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "York University",
            },
            knowsLanguage: ["en", "tr", "ar", "fr"],
            sameAs: Object.values(SOCIAL_LINKS),
          },
        }}
      />
      <Navbar />
      <main className="container mx-auto min-h-screen px-12 py-8">
        <section className="relative w-full overflow-hidden">
          <div className="relative flex items-center justify-between mb-5">
            <h1 className="text-lg uppercase text-neutral-50">
              <span className="tracking-[0.02px] text-blue-500">{"//"}</span> About
            </h1>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              {SITE_LOCATION}
            </span>
          </div>

          <div className="border border-neutral-400/20 border-dashed p-5 md:p-6">
            <p className="text-sm text-neutral-300 leading-7 max-w-4xl">
              I&apos;m <span className="text-neutral-100">Hast Herish</span> — a 22-year-old software
              engineering student at York University in Toronto, Canada. I split my time between
              coursework, shipping products for clients, and running my own script brands. Most days
              you&apos;ll find me designing interfaces, writing TypeScript or Lua, or refining the
              systems behind web apps and FiveM/RedM resources.
            </p>
            <p className="text-sm text-neutral-300 leading-7 max-w-4xl mt-3">
              I care about work that feels intentional: clear architecture, readable code, and
              interfaces that stay fast under real use. Whether it&apos;s a mobile prototype in Expo,
              a Flutter UI flow, a desktop companion tool, or a production RedM economy script, I
              start from the problem, simplify the stack, then ship something maintainable.
            </p>
            <p className="text-sm text-neutral-300 leading-7 max-w-4xl mt-3">
              Outside of school I founded{" "}
              <a
                href={SOCIAL_LINKS.coderanch}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeRanch
              </a>{" "}
              and{" "}
              <a
                href={SOCIAL_LINKS.uiforge}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                UiForge
              </a>
              , collaborated with studios like{" "}
              <a
                href={SOCIAL_LINKS.zeroResmon}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                0Resmon
              </a>{" "}
              and{" "}
              <a
                href={SOCIAL_LINKS.fastscripts}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                FastScripts
              </a>
              , and keep freelancing across apps and game-server tooling. I speak Turkish, Arabic,
              English, and French — which helps a lot when collaborating with international teams and
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <section className="border border-neutral-400/20 border-dashed p-4 md:p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Focus Areas</p>
              <ul className="mt-3 space-y-2">
                {focusAreas.map((item) => (
                  <li key={item} className="text-sm text-neutral-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-neutral-400/20 border-dashed p-4 md:p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Languages</p>
              <ul className="mt-3 space-y-3">
                {languagesSpoken.map((lang) => (
                  <li key={lang.name}>
                    <p className="text-sm text-neutral-100">{lang.name}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-neutral-400/20 border-dashed p-4 md:p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">How I Work</p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-sm text-neutral-100">1. Discovery</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Clarify goals, constraints, and what success looks like before writing code.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-100">2. Build</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Ship modular features with practical UX and a stack that fits the product.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-100">3. Deliver</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Hand over stable output with docs and a structure that is easy to extend.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="border border-neutral-400/20 border-dashed p-4 md:p-5 mt-4">
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">Equipment</p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                Canada Computers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {equipmentItems.map((item) => (
                <article
                  key={item.category + item.name}
                  className="border border-neutral-400/20 border-dashed p-3 hover:border-neutral-300/60 hover:bg-neutral-400/5 transition-all duration-200"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                    {item.category}
                  </p>
                  <p className="text-sm text-neutral-100 mt-1">{item.name}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.note}</p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
                  >
                    Canada Computers
                    <i className="fa-light fa-arrow-up-right text-[10px]" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
