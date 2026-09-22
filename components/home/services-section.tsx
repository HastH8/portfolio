type ServiceItem = {
  title: string;
  detail: string;
  tag: string;
};

const services: ServiceItem[] = [
  {
    title: "Web Applications",
    detail: "Full-stack web apps with Next.js, APIs, auth, dashboards, and production-ready deployments.",
    tag: "Web",
  },
  {
    title: "Mobile Applications",
    detail: "Cross-platform mobile apps with Expo Go and Flutter UI — clean UX and reliable releases.",
    tag: "Mobile",
  },
  {
    title: "Desktop Applications",
    detail: "Desktop tooling and companion apps for creators, studios, and internal workflows.",
    tag: "Desktop",
  },
  {
    title: "FiveM Script Development",
    detail: "Custom FiveM resources, NUI, performance tuning, and maintainable Lua architecture.",
    tag: "FiveM",
  },
  {
    title: "RedM Script Development",
    detail: "RedM server scripts, economy systems, and roleplay features built for stability.",
    tag: "RedM",
  },
  {
    title: "Website Development",
    detail: "Marketing sites, portfolios, and storefronts that load fast and convert clearly.",
    tag: "Sites",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full mt-6 overflow-hidden">
      <div className="relative flex items-center justify-between mb-4">
        <h2 className="text-lg uppercase text-neutral-50">
          <span className="tracking-[0.02px] text-blue-500">{"//"}</span> Services
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">What I Do</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="border border-neutral-400/20 border-dashed p-4 hover:border-neutral-300/60 hover:bg-neutral-400/5 transition-all duration-200"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">{service.tag}</span>
            <p className="text-sm text-neutral-100 mt-2">{service.title}</p>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{service.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
