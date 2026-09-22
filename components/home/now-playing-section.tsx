export type NowPlayingTrack = {
  song: string;
  artist: string;
  albumArtUrl?: string | null;
  source: "spotify" | "apple-music" | "discord";
  href?: string | null;
};

type NowPlayingSectionProps = {
  track: NowPlayingTrack | null;
};

export default function NowPlayingSection({ track }: NowPlayingSectionProps) {
  if (!track) {
    return null;
  }

  const sourceLabel =
    track.source === "spotify"
      ? "Spotify"
      : track.source === "apple-music"
        ? "Apple Music"
        : "Listening";

  const sourceIcon =
    track.source === "spotify"
      ? "fa-brands fa-spotify"
      : track.source === "apple-music"
        ? "fa-brands fa-apple"
        : "fa-solid fa-music";

  const accent =
    track.source === "spotify"
      ? {
          border: "border-green-400/30",
          corner: "border-green-400/70",
          label: "text-green-400/60",
          title: "text-green-300",
          artist: "text-green-400/60",
          button:
            "border-green-400/40 text-green-400 hover:bg-green-400/10 hover:border-green-400/80 hover:text-green-300",
        }
      : {
          border: "border-pink-400/30",
          corner: "border-pink-400/70",
          label: "text-pink-400/60",
          title: "text-pink-200",
          artist: "text-pink-400/60",
          button:
            "border-pink-400/40 text-pink-300 hover:bg-pink-400/10 hover:border-pink-400/80 hover:text-pink-200",
        };

  return (
    <section className={`relative w-full border ${accent.border} border-dashed p-4 overflow-hidden group`}>
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative shrink-0">
            <span className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l ${accent.corner}`} />
            <span className={`absolute -top-1 -right-1 w-2 h-2 border-t border-r ${accent.corner}`} />
            <span className={`absolute -bottom-1 -left-1 w-2 h-2 border-b border-l ${accent.corner}`} />
            <span className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r ${accent.corner}`} />
            {track.albumArtUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={track.albumArtUrl}
                alt={`${track.song} album art`}
                width={88}
                height={88}
                className="w-22 h-22 object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-22 h-22 flex items-center justify-center bg-neutral-900 border border-neutral-700/50">
                <i className={`${sourceIcon} text-xl ${accent.label}`} />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`text-[10px] uppercase tracking-[0.2em] font-mono ${accent.label}`}>
                Now Playing · {sourceLabel}
              </span>
            </div>

            <p className={`text-base font-medium truncate leading-tight ${accent.title}`}>{track.song}</p>
            <p className={`text-sm truncate font-mono ${accent.artist}`}>{track.artist}</p>
          </div>
        </div>

        {track.href ? (
          <a
            href={track.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative shrink-0 group/btn border border-dashed px-4 py-2.5 flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 ${accent.button}`}
          >
            <i className={`${sourceIcon} text-sm`} />
            <span>Open</span>
            <i className="fa-light fa-arrow-up-right text-[10px] opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </a>
        ) : null}
      </div>
    </section>
  );
}
