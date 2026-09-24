import type { Clip } from "@/lib/media";
import { drivePreview, youtubeEmbed } from "@/lib/media";
import { cn } from "@/lib/utils";

export function MediaFrame({
  clip,
  className,
  mode = "play",
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
}: {
  clip: Clip;
  className?: string;
  mode?: "play" | "cover" | "poster";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}) {
  if (mode === "poster" || (clip.kind !== "file" && mode === "cover")) {
    return (
      <img
        src={clip.poster}
        alt=""
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  if (clip.kind === "youtube" && clip.youtubeId) {
    return (
      <div className={cn("h-full w-full overflow-hidden", mode === "cover" && "absolute inset-0")}>
        <iframe
          title="YouTube"
          src={youtubeEmbed(clip.youtubeId, { bg: mode === "cover", autoplay: autoPlay || mode === "cover" })}
          className={cn(
            "h-full w-full border-0",
            mode === "cover" && "pointer-events-none scale-150",
            className,
          )}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={mode !== "cover"}
        />
      </div>
    );
  }

  if (clip.kind === "drive" && clip.driveId) {
    return (
      <iframe
        title="Google Drive"
        src={drivePreview(clip.driveId)}
        className={cn(
          "h-full w-full border-0",
          mode === "cover" && "pointer-events-none",
          className,
        )}
        allow="autoplay"
      />
    );
  }

  return (
    <video
      className={cn("h-full w-full object-cover", className)}
      src={clip.video}
      poster={clip.poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      preload={mode === "cover" ? "auto" : "metadata"}
    />
  );
}
