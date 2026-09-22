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
  "@attr"?: { nowplaying?: string };
};

type LastFmRecentTracksResponse = {
  recenttracks?: {
    track?: LastFmTrack | LastFmTrack[];
  };
};

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

/**
 * Apple Music → Last.fm scrobbler → this API.
 * No Discord RPC required.
 */
export async function getLastFmNowPlaying(): Promise<NowPlayingTrack | null> {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
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
      next: { revalidate: 30 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error("[lastfm] upstream status", res.status);
      return null;
    }

    const data = (await res.json()) as LastFmRecentTracksResponse;
    const raw = data.recenttracks?.track;
    const track = Array.isArray(raw) ? raw[0] : raw;

    if (!track?.name) {
      return null;
    }

    const isNowPlaying = track["@attr"]?.nowplaying === "true";
    if (!isNowPlaying) {
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
