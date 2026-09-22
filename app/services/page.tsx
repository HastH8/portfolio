import Navbar from "@/components/navbar";
import JsonLd from "@/components/seo/json-ld";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Hire Hast Herish for web applications, mobile apps, desktop apps, FiveM scripts, RedM scripts, and modern website development.",
  path: "/services",
  keywords: [
    "hire FiveM developer",
    "RedM script developer",
    "mobile app developer Toronto",
    "web application freelancer",
  ],
});

const services = [
  {
    title: "Web Applications",
    detail:
      "Full-stack web apps with auth, dashboards, APIs, and clean deployments — built for real users and real traffic.",
    deliverables: ["Next.js / React", "API design", "Auth & databases", "Deploy & monitoring"],
  },
  {
    title: "Mobile Applications",
    detail:
      "Cross-platform mobile products with Expo Go and Flutter UI, focused on polished UX and reliable release cycles.",
    deliverables: ["Expo / Flutter", "UI systems", "App store readiness", "API integration"],
  },
  {
    title: "Desktop Applications",
    detail:
      "Desktop tools and companion apps for creators, studios, and internal ops — practical features without bloat.",
    deliverables: ["Desktop UX", "Local tooling", "Integrations", "Packaging"],
  },
  {
    title: "Website Development",
    detail:
      "Marketing sites, portfolios, and storefronts that load fast, rank cleanly, and convert visitors into clients.",
    deliverables: ["Responsive design", "SEO basics", "Performance", "CMS-ready structure"],
  },
  {
    title: "FiveM Script Development",
    detail:
      "Custom FiveM resources, NUI interfaces, optimizations, and refactors that keep servers stable under load.",
    deliverables: ["Lua / JS NUI", "Performance tuning", "Config systems", "Bug fixes"],
  },
  {
    title: "RedM Script Development",
    detail:
      "RedM roleplay systems, economies, jobs, and QOL features built with the same production standards as FiveM.",
    deliverables: ["Custom resources", "Economy systems", "Server logic", "Support docs"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${SITE_NAME} Services`,
          url: `${SITE_URL}/services`,
          itemListElement: services.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.detail,
            provider: {
              "@type": "Person",
              name: SITE_NAME,
              url: SITE_URL,
            },
            areaServed: "Worldwide",
          })),
        }}
      />
      <Navbar />
      <main className="container mx-auto min-h-screen px-12 py-8">
        <section className="relative w-full overflow-hidden">
          <div className="relative flex items-center justify-between mb-5">
            <h1 className="text-lg uppercase text-neutral-50">
              <span className="tracking-[0.02px] text-blue-500">{"//"}</span> Services
            </h1>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              Offerings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-neutral-400/20 border-dashed p-5 hover:border-neutral-300/70 hover:bg-neutral-400/5 transition-all duration-200"
              >
                <p className="text-base text-neutral-100">{service.title}</p>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">{service.detail}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="border border-neutral-400/20 border-dashed px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-neutral-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
