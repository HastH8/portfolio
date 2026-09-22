import type { NowPlayingTrack } from "@/components/home/now-playing-section";

type LastFmImage = {
  size: string;
  "#text": string;
};

type LastFmTrack = {
  name: string;
  url: string;
  artist: { "#text"?: string; name?: string } | string;
  album?: { "#text"?: string };
  image?: LastFmImage[];
  date?: { uts?: string; "#text"?: string };
  "@attr"?: { nowplaying?: string };
};

type LastFmRecentTracksResponse = {
  recenttracks?: {
    track?: LastFmTrack | LastFmTrack[];
  };
  message?: string;
  error?: number;
};

const RECENT_FALLBACK_SECONDS = 15 * 60;

function pickImage(images?: LastFmImage[]) {
  if (!images?.length) return null;
  const preferred =
    images.find((img) => img.size === "extralarge") ??
    images.find((img) => img.size === "large") ??
    images.find((img) => img.size === "medium") ??
    images[images.length - 1];
  return preferred?.["#text"] || null;
}

function artistName(artist: LastFmTrack["artist"]) {
  if (typeof artist === "string") return artist;
  return artist?.["#text"] || artist?.name || "Unknown artist";
}

function isActivelyPlaying(track: LastFmTrack) {
  if (track["@attr"]?.nowplaying === "true") {
    return true;
  }

  // Some scrobblers only submit scrobbles (not nowplaying). Show if scrobbled very recently.
  const uts = Number(track.date?.uts);
  if (!Number.isFinite(uts) || uts <= 0) {
    return false;
  }

  const ageSeconds = Math.floor(Date.now() / 1000) - uts;
  return ageSeconds >= 0 && ageSeconds <= RECENT_FALLBACK_SECONDS;
}

/**
 * Apple Music → Last.fm scrobbler → this API.
 * Requires LASTFM_API_KEY + LASTFM_USERNAME in .env.local
 */
export async function getLastFmNowPlaying(): Promise<NowPlayingTrack | null> {
  const apiKey = process.env.LASTFM_API_KEY?.trim();
  const username = process.env.LASTFM_USERNAME?.trim();

  if (!apiKey || !username) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[lastfm] Missing LASTFM_API_KEY or LASTFM_USERNAME in .env.local — Apple Music now-playing disabled.",
      );
    }
    return null;
  }

  try {
    const url = new URL("https://ws.audioscrobbler.com/2.0/");
    url.searchParams.set("method", "user.getrecenttracks");
    url.searchParams.set("user", username);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("format", "json");
    url.searchParams.set("limit", "1");

    const res = await fetch(url.toString(), {
      next: { revalidate: 15 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error("[lastfm] upstream status", res.status);
      return null;
    }

    const data = (await res.json()) as LastFmRecentTracksResponse;

    if (data.error) {
      console.error("[lastfm] api error", data.error, data.message);
      return null;
    }

    const raw = data.recenttracks?.track;
    const track = Array.isArray(raw) ? raw[0] : raw;

    if (!track?.name) {
      return null;
    }

    if (!isActivelyPlaying(track)) {
      return null;
    }

    return {
      song: track.name,
      artist: artistName(track.artist),
      albumArtUrl: pickImage(track.image),
      source: "apple-music",
      href: track.url || `https://www.last.fm/user/${username}`,
    };
  } catch (error) {
    console.error("[lastfm] fetch failed", error);
    return null;
  }
}
