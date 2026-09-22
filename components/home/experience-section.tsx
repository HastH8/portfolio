type ExperienceItem = {
  year: string;
  title: string;
  detail: string;
  href?: string;
};

const experienceItems: ExperienceItem[] = [
  {
    year: "2026 — Present",
    title: "Full Stack Developer @ FastScripts",
    detail: "Building and shipping high-performance FiveM/RedM scripts, storefronts, and product updates.",
    href: "https://fastscripts.tebex.io",
  },
  {
    year: "Feb 2026 — May 2026",
    title: "Full Stack Developer @ 0Resmon",
    detail: "Full-stack delivery across web surfaces and script ecosystems for a major resource studio.",
    href: "https://0resmon.com",
  },
  {
    year: "2025 — Present",
    title: "Full Stack Developer / Owner / CEO @ CodeRanch",
    detail: "Founded and operate CodeRanch — marketplace, product systems, and long-term script platform work.",
    href: "https://coderanch.store",
  },
  {
    year: "2023 — Present",
    title: "Full Stack Developer / Owner @ UiForge",
    detail: "Design and ship UI kits, NUI packs, and polished roleplay interfaces for server communities.",
    href: "https://uiforge.tebex.io",
  },
  {
    year: "2023 — 2026",
    title: "Freelance Software Engineer",
    detail: "Independent client work across web apps, mobile prototypes, desktop tools, and game-server scripting.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full mt-6 overflow-hidden">
      <div className="relative flex items-center justify-between mb-4">
        <h2 className="text-lg uppercase text-neutral-50">
          <span className="tracking-[0.02px] text-blue-500">{"//"}</span> Experience
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Timeline</span>
      </div>

      <div className="border border-neutral-400/20 border-dashed p-4 md:p-5">
        <div className="flex flex-col gap-4">
          {experienceItems.map((item, index) => (
            <div key={`${item.year}-${item.title}`} className="relative pl-6">
              {index !== experienceItems.length - 1 && (
                <span className="absolute left-1.75 top-4 -bottom-5 w-px bg-neutral-400/20" />
              )}
              <span className="absolute left-0 top-1.5 size-3 rounded-full border border-blue-400/70 bg-blue-500/20" />

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{item.year}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">Log</span>
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-100 mt-1 inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors"
                >
                  {item.title}
                  <i className="fa-light fa-arrow-up-right text-[10px] opacity-60" />
                </a>
              ) : (
                <p className="text-sm text-neutral-100 mt-1">{item.title}</p>
              )}
              <p className="text-xs text-neutral-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
