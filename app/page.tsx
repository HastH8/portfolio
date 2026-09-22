import Navbar from "@/components/navbar";
import JsonLd from "@/components/seo/json-ld";
import ShowcaseTabs from "@/components/showcase-tabs";
import { KNOWN_TECHS, KNOWN_TOOLS, PINNED_PROJECTS } from "@/components/home/constants";
import PinnedProject from "@/components/home/pinned-project";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import IconListSection from "@/components/home/icon-list-section";
import ServicesSection from "@/components/home/services-section";
import NowPlayingSection, { type NowPlayingTrack } from "@/components/home/now-playing-section";
import SiteFooter from "@/components/home/site-footer";
import StatusStrip from "@/components/home/status-strip";
import type { GithubRepo, LanyardResponse } from "@/components/home/types";
import type { Metadata } from "next";
import { getLastFmNowPlaying } from "@/lib/lastfm";
import {
  DISCORD_HANDLE,
  DISCORD_USER_ID,
  GITHUB_USERNAME,
  LANYARD_API_URL,
  createPageMetadata,
  getPersonJsonLd,
} from "@/lib/seo";

const FALLBACK_LANYARD: LanyardResponse = {
  success: true,
  data: {
    discord_user: {
      id: DISCORD_USER_ID,
      avatar: null,
      username: DISCORD_HANDLE,
      discriminator: "0",
      public_flags: 0,
    },
    activities: [],
    listening_to_spotify: false,
    discord_status: "offline",
    spotify: null,
  },
};

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Hast Herish — York University software engineering student in Toronto building web apps, mobile apps, desktop apps, FiveM scripts, and RedM scripts.",
  path: "/",
});

async function getLanyard(): Promise<LanyardResponse> {
  try {
    const res = await fetch(LANYARD_API_URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "hastherish-portfolio",
      },
      // Fresh presence — avoid serving a stale failed cache forever
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      console.error("[lanyard] upstream status", res.status);
      return FALLBACK_LANYARD;
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      console.error("[lanyard] non-json content-type", contentType);
      return FALLBACK_LANYARD;
    }

    const data = (await res.json()) as LanyardResponse;
    if (!data?.success || !data?.data?.discord_user?.id) {
      console.error("[lanyard] invalid payload", data);
      return FALLBACK_LANYARD;
    }

    return data;
  } catch (error) {
    console.error("[lanyard] fetch failed", error);
    return FALLBACK_LANYARD;
  }
}

async function getGithubProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) {
      return [] as GithubRepo[];
    }

    const repos = (await res.json()) as GithubRepo[];

    return repos
      .filter((repo) => !repo.fork)
      .filter((repo) => Boolean(repo.language))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 6);
  } catch {
    return [] as GithubRepo[];
  }
}

function getSpotifyNowPlaying(data: LanyardResponse["data"]): NowPlayingTrack | null {
  if (data.listening_to_spotify && data.spotify) {
    return {
      song: data.spotify.song,
      artist: data.spotify.artist,
      albumArtUrl: data.spotify.album_art_url,
      source: "spotify",
      href: `https://open.spotify.com/track/${data.spotify.track_id}`,
    };
  }
  return null;
}

export default async function Home() {
  const [discordData, publicProjects, appleMusicTrack] = await Promise.all([
    getLanyard(),
    getGithubProjects(),
    getLastFmNowPlaying(),
  ]);

  // Prefer Apple Music (Last.fm) when actively playing; otherwise Spotify via Lanyard
  const nowPlaying = appleMusicTrack ?? getSpotifyNowPlaying(discordData.data);

  const userDescription =
    discordData.data?.activities?.find((activity) => activity.id === "custom")?.state ??
    discordData.data?.discord_user?.global_name ??
    `@${discordData.data.discord_user.username}`;

  const avatarHash = discordData.data.discord_user.avatar;
  const avatarUrl = avatarHash
    ? `https://cdn.discordapp.com/avatars/${discordData.data.discord_user.id}/${avatarHash}.${
        avatarHash.startsWith("a_") ? "gif" : "webp"
      }?size=512`
    : "https://cdn.discordapp.com/embed/avatars/0.png";
  const mappedPublicProjects = publicProjects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    language: project.language,
    stars: project.stargazers_count,
    forks: project.forks_count,
    htmlUrl: project.html_url,
    updatedAt: project.updated_at,
  }));

  return (
    <>
      <JsonLd data={getPersonJsonLd()} />
      <Navbar />
      <main className="container mx-auto flex flex-col min-h-screen px-12">
        <HeroSection
          avatarUrl={avatarUrl}
          discordStatus={discordData.data.discord_status}
          userDescription={userDescription}
        />

        <StatusStrip />

        <NowPlayingSection track={nowPlaying} />

        <PinnedProject projects={PINNED_PROJECTS} />

        <ShowcaseTabs publicProjects={mappedPublicProjects} />

        <IconListSection
          title="Languages"
          label="Known Stack"
          items={KNOWN_TECHS}
          gridClassName="grid grid-cols-2 md:grid-cols-4 gap-3"
          emptyText="Known languages could not be loaded right now."
        />

        <IconListSection
          title="Technologies"
          label="Tooling"
          items={KNOWN_TOOLS}
          gridClassName="grid grid-cols-2 md:grid-cols-3 gap-3"
          emptyText="Known technologies could not be loaded right now."
        />

        <ServicesSection />

        <ExperienceSection />

        <SiteFooter />
      </main>
    </>
  );
}
