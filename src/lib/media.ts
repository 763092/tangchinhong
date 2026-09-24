export type ClipKind = "file" | "youtube" | "drive";

export type Clip = {
  poster: string;
  video: string;
  kind: ClipKind;
  youtubeId?: string;
  driveId?: string;
};

export function youtubeIdFromUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  if (/^[\w-]{11}$/.test(raw)) return raw;
  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const v = url.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
      const parts = url.pathname.split("/").filter(Boolean);
      const flag = parts[0];
      const next = parts[1];
      if ((flag === "embed" || flag === "shorts" || flag === "live") && next && /^[\w-]{11}$/.test(next)) {
        return next;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export function driveIdFromUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  const file = raw.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (file?.[1]) return file[1];
  try {
    const url = new URL(raw);
    const id = url.searchParams.get("id");
    if (id && id.length > 10) return id;
  } catch {
    return null;
  }
  return null;
}

export function classifyUrl(input: string): {
  kind: ClipKind;
  youtubeId?: string;
  driveId?: string;
  href: string;
} | null {
  const raw = input.trim();
  if (!raw) return null;
  const yt = youtubeIdFromUrl(raw);
  if (yt) return { kind: "youtube", youtubeId: yt, href: `https://www.youtube.com/watch?v=${yt}` };
  const gd = driveIdFromUrl(raw);
  if (gd) return { kind: "drive", driveId: gd, href: `https://drive.google.com/file/d/${gd}/view` };
  if (/^https?:\/\//i.test(raw)) return { kind: "file", href: raw };
  return null;
}

export function youtubePoster(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeEmbed(id: string, opts?: { bg?: boolean; autoplay?: boolean }) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (opts?.autoplay) params.set("autoplay", "1");
  if (opts?.bg) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("controls", "0");
    params.set("loop", "1");
    params.set("playlist", id);
  }
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function drivePreview(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function driveImage(id: string) {
  return `https://lh3.googleusercontent.com/d/${id}=w1920`;
}
