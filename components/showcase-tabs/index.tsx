"use client";

import Image from "next/image";
import { useState } from "react";
import { SHOWCASE_PROJECTS } from "@/lib/projects";

type ReferenceItem = {
  id: string;
  brand: string;
  project: string;
  note: string;
  bannerStyle: string;
  bannerImage?: string;
  logoImage?: string;
  href: string;
  year: string;
};

type PublicProjectItem = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  htmlUrl: string;
  updatedAt: string;
};

type ShowcaseTabsProps = {
  publicProjects: PublicProjectItem[];
};

const referenceItems: ReferenceItem[] = [
  {
    id: "0resmon",
    brand: "0Resmon Studio",
    project: "Fivem Tebex Store",
    note: "Custom Tebex store design and integration for a popular FiveM studio.",
    bannerStyle: "linear-gradient(135deg, #be123c 0%, #111827 70%)",
    bannerImage: "/references/0resmon_banner.webp",
    logoImage: "/references/0resmon_logo.webp",
    href: "https://0resmon.tebex.io/",
    year: "2024-2026",
  },
  {
    id: "fast",
    brand: "FastScripts",
    project: "FiveM Script Products",
    note: "Full-stack development across jobs, UI systems, and admin tools.",
    bannerStyle: "linear-gradient(135deg, #ea580c 0%, #111827 70%)",
    bannerImage: "/references/fastscript_banner.webp",
    logoImage: "/references/fastscript_logo.webp",
    href: "https://fastscripts.tebex.io/",
    year: "2026-Present",
  },
  {
    id: "coderanch",
    brand: "CodeRanch",
    project: "RedM Script Marketplace",
    note: "Founder — shipping RedM inventory, jobs, chat, fishing, and forensics products.",
    bannerStyle: "linear-gradient(135deg, #b45309 0%, #111827 70%)",
    href: "https://coderanch.store",
    year: "2025-Present",
  },
  {
    id: "uiforge",
    brand: "UiForge",
    project: "NUI / UI Kits",
    note: "Owner — polished roleplay UI packs and interfaces for servers.",
    bannerStyle: "linear-gradient(135deg, #7c3aed 0%, #111827 70%)",
    href: "https://uiforge.tebex.io",
    year: "2023-Present",
  },
  {
    id: "night",
    brand: "NightV",
    project: "Fivem Roleplay Server",
    note: "Custom script development and server optimization for a growing RP community.",
    bannerStyle: "linear-gradient(135deg, #6d28d9 0%, #111827 70%)",
    bannerImage: "/references/night_banner.webp",
    logoImage: "/references/night_logo.webp",
    href: "https://discord.gg/nightvrp",
    year: "2025",
  },
];

export default function ShowcaseTabs({ publicProjects }: ShowcaseTabsProps) {
  const [activeTab, setActiveTab] = useState<"projects" | "references" | "github">("projects");
  const [showAllProducts, setShowAllProducts] = useState(false);

  const INITIAL_PRODUCTS = 6;
  const visibleProducts = showAllProducts
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.slice(0, INITIAL_PRODUCTS);
  const hiddenCount = Math.max(0, SHOWCASE_PROJECTS.length - INITIAL_PRODUCTS);

  const tabs = [
    { id: "projects" as const, label: "Products" },
    { id: "references" as const, label: "References" },
    { id: "github" as const, label: "GitHub" },
  ];

  return (
    <section className="relative w-full mt-10 overflow-hidden">
      <div className="relative flex items-center justify-between mb-4 gap-3 flex-wrap">
        <h2 className="text-lg uppercase text-neutral-50">
          <span className="tracking-[0.02px] text-blue-500">{"//"}</span> Showcase
        </h2>

        <div className="flex items-center gap-2 border border-neutral-400/20 border-dashed p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "projects" && (
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {visibleProducts.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-neutral-400/20 border-dashed overflow-hidden hover:border-neutral-300/60 transition-all duration-300"
              >
                <div className="h-24 w-full relative" style={{ backgroundImage: item.bannerStyle }}>
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 to-transparent" />
                  <div className="absolute left-3 bottom-2 text-[10px] font-mono uppercase tracking-widest text-white/85">
                    {item.status}
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-sm font-medium text-neutral-100 truncate">{item.title}</p>
                  <p className="text-xs text-neutral-500 font-mono mt-1 truncate">{item.stack}</p>
                  <p className="text-xs text-neutral-400 mt-3 line-clamp-2">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          {hiddenCount > 0 && !showAllProducts && (
            <div className="relative mt-4">
              <div className="pointer-events-none absolute -top-16 inset-x-0 h-16 bg-linear-to-t from-neutral-950 to-transparent" />
              <button
                type="button"
                onClick={() => setShowAllProducts(true)}
                className="group/more w-full border border-neutral-400/25 border-dashed px-4 py-3 flex items-center justify-between gap-3 text-left hover:border-neutral-300/60 hover:bg-neutral-400/5 transition-all duration-200 cursor-pointer"
              >
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-200">
                    Show {hiddenCount} more products
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-1">
                    {SHOWCASE_PROJECTS.length} total · FastScripts · CodeRanch · Apps
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-400 group-hover/more:text-blue-300">
                  Expand
                  <i className="fa-light fa-chevron-down text-[10px]" />
                </span>
              </button>
            </div>
          )}

          {showAllProducts && hiddenCount > 0 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowAllProducts(false)}
                className="group/more w-full border border-neutral-400/25 border-dashed px-4 py-3 flex items-center justify-between gap-3 text-left hover:border-neutral-300/60 hover:bg-neutral-400/5 transition-all duration-200 cursor-pointer"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-200">
                  Show less
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover/more:text-neutral-200">
                  Collapse
                  <i className="fa-light fa-chevron-up text-[10px]" />
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === "references" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {referenceItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-400/20 border-dashed overflow-hidden hover:border-neutral-300/60 transition-all duration-300"
            >
              <div className="h-24 w-full relative" style={{ backgroundImage: item.bannerStyle }}>
                {item.bannerImage ? (
                  <Image
                    src={item.bannerImage}
                    alt={`${item.brand} banner`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 to-transparent" />
                <div className="absolute left-3 bottom-2 text-[10px] font-mono uppercase tracking-widest text-white/85">
                  {item.year}
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-center gap-2">
                  {item.logoImage ? (
                    <Image
                      src={item.logoImage}
                      alt={`${item.brand} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-sm object-cover border border-neutral-600/40"
                    />
                  ) : null}
                  <p className="text-sm font-medium text-neutral-100 truncate">{item.brand}</p>
                </div>
                <p className="text-xs text-neutral-500 font-mono mt-1 truncate">{item.project}</p>
                <p className="text-xs text-neutral-400 mt-3 line-clamp-2">{item.note}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {activeTab === "github" && (
        <>
          {publicProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {publicProjects.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/project border border-neutral-400/20 border-dashed p-3 hover:border-neutral-300/60 hover:bg-neutral-400/5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-neutral-100 tracking-tight truncate">
                      {repo.name}
                    </p>
                    <i className="fa-light fa-arrow-up-right text-[10px] text-neutral-500 group-hover/project:text-neutral-200 group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  <p className="text-xs text-neutral-500 font-mono mt-2 line-clamp-2 min-h-8">
                    {repo.description ?? "No description provided."}
                  </p>

                  <div className="flex items-center gap-4 mt-3 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    <span>{repo.language}</span>
                    <span>Stars {repo.stars}</span>
                    <span>Forks {repo.forks}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-500 font-mono">
              GitHub repos could not be loaded right now.
            </p>
          )}
        </>
      )}
    </section>
  );
}
