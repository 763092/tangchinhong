import { create } from "zustand";
import { PROJECTS } from "@/data/content";
import {
  type Clip,
  type ClipKind,
  classifyUrl,
  driveImage,
  youtubePoster,
} from "@/lib/media";

const DB_NAME = "tch-portfolio-media-v2";
const STORE = "files";
const META_KEY = "tch-media-meta-v3";
const MAX_VIDEO = 72 * 1024 * 1024;
const MAX_IMAGE = 10 * 1024 * 1024;

type Meta = {
  hero?: { kind: ClipKind; href?: string; youtubeId?: string; driveId?: string };
  portraitHref?: string;
  clips: Record<
    string,
    { kind: ClipKind; href?: string; youtubeId?: string; driveId?: string }
  >;
};

function defaultClips(): Record<string, Clip> {
  return Object.fromEntries(
    PROJECTS.map((p) => [
      p.id,
      {
        poster: youtubePoster(p.youtubeId),
        video: `https://www.youtube.com/watch?v=${p.youtubeId}`,
        kind: "youtube" as const,
        youtubeId: p.youtubeId,
      },
    ]),
  );
}

function defaultHero(): Clip {
  return {
    poster: "/media/posters/hero.jpg",
    video: "/media/hero.mp4",
    kind: "file",
  };
}

function readMeta(): Meta {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (!raw) return { clips: {} };
    const parsed = JSON.parse(raw) as Meta;
    return { clips: parsed.clips ?? {}, hero: parsed.hero, portraitHref: parsed.portraitHref };
  } catch {
    return { clips: {} };
  }
}

function writeMeta(meta: Meta) {
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(key: string): Promise<Blob | undefined> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(key);
    req.onsuccess = () => resolve(req.result as Blob | undefined);
    req.onerror = () => reject(req.error);
  });
}

async function idbPut(key: string, blob: Blob) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(blob, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function idbDel(key: string) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function clipFromMeta(
  base: Clip,
  meta: { kind: ClipKind; href?: string; youtubeId?: string; driveId?: string } | undefined,
): Clip {
  if (!meta) return { ...base };
  if (meta.kind === "youtube" && meta.youtubeId) {
    return {
      poster: youtubePoster(meta.youtubeId),
      video: meta.href ?? `https://www.youtube.com/watch?v=${meta.youtubeId}`,
      kind: "youtube",
      youtubeId: meta.youtubeId,
    };
  }
  if (meta.kind === "drive" && meta.driveId) {
    return {
      poster: driveImage(meta.driveId),
      video: meta.href ?? `https://drive.google.com/file/d/${meta.driveId}/view`,
      kind: "drive",
      driveId: meta.driveId,
    };
  }
  if (meta.href) {
    return { poster: base.poster, video: meta.href, kind: "file" };
  }
  return { ...base };
}

type MediaState = {
  ready: boolean;
  notice: string | null;
  hero: Clip;
  portrait: string;
  clips: Record<string, Clip>;
  hydrate: () => Promise<void>;
  setNotice: (notice: string | null) => void;
  upload: (slot: string, file: File) => Promise<void>;
  pasteUrl: (slot: "hero" | string, url: string) => void;
  reset: (slot: string) => Promise<void>;
};

export const useMediaStore = create<MediaState>((set, get) => ({
  ready: false,
  notice: null,
  hero: defaultHero(),
  portrait: "/media/portrait.jpg",
  clips: defaultClips(),
  setNotice: (notice) => set({ notice }),

  hydrate: async () => {
    if (typeof window === "undefined") return;
    const meta = readMeta();
    const clips = defaultClips();
    for (const project of PROJECTS) {
      const base = clips[project.id]!;
      let clip = clipFromMeta(base, meta.clips[project.id]);
      const posterBlob = await idbGet(`poster:${project.id}`).catch(() => undefined);
      const videoBlob = await idbGet(`video:${project.id}`).catch(() => undefined);
      if (posterBlob) clip = { ...clip, poster: URL.createObjectURL(posterBlob) };
      if (videoBlob) {
        clip = { ...clip, video: URL.createObjectURL(videoBlob), kind: "file", youtubeId: undefined, driveId: undefined };
      }
      clips[project.id] = clip;
    }
    let hero = clipFromMeta(defaultHero(), meta.hero);
    const heroPoster = await idbGet("hero-poster").catch(() => undefined);
    const heroVideo = await idbGet("hero-video").catch(() => undefined);
    if (heroPoster) hero = { ...hero, poster: URL.createObjectURL(heroPoster) };
    if (heroVideo) {
      hero = { ...hero, video: URL.createObjectURL(heroVideo), kind: "file", youtubeId: undefined, driveId: undefined };
    }
    let portrait = meta.portraitHref ?? "/media/portrait.jpg";
    const portraitBlob = await idbGet("portrait").catch(() => undefined);
    if (portraitBlob) portrait = URL.createObjectURL(portraitBlob);
    set({ ready: true, clips, hero, portrait });
  },

  upload: async (slot, file) => {
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    if (!isImage && !isVideo) {
      set({ notice: "請選相片或影片檔。" });
      return;
    }
    if (isImage && file.size > MAX_IMAGE) {
      set({ notice: "相片請小於 10MB。" });
      return;
    }
    if (isVideo && file.size > MAX_VIDEO) {
      set({ notice: "影片請小於 72MB，或改貼 YouTube / Drive 連結。" });
      return;
    }
    const url = URL.createObjectURL(file);
    await idbPut(slot, file);
    const meta = readMeta();
    if (slot === "portrait") {
      delete meta.portraitHref;
      writeMeta(meta);
      set({ portrait: url, notice: "已換頭像。" });
      return;
    }
    if (slot === "hero-poster") {
      set({ hero: { ...get().hero, poster: url }, notice: "已換封面。" });
      return;
    }
    if (slot === "hero-video") {
      delete meta.hero;
      writeMeta(meta);
      set({
        hero: { ...get().hero, video: url, kind: "file", youtubeId: undefined, driveId: undefined },
        notice: "已換主視覺影片。",
      });
      return;
    }
    const posterMatch = slot.match(/^poster:(.+)$/);
    const videoMatch = slot.match(/^video:(.+)$/);
    const id = posterMatch?.[1] ?? videoMatch?.[1];
    if (!id) return;
    const prev = get().clips[id] ?? defaultClips()[id]!;
    if (posterMatch) {
      set({
        clips: { ...get().clips, [id]: { ...prev, poster: url } },
        notice: "已換封面。",
      });
      return;
    }
    if (videoMatch) {
      if (meta.clips[id]) delete meta.clips[id];
      writeMeta(meta);
      set({
        clips: {
          ...get().clips,
          [id]: { ...prev, video: url, kind: "file", youtubeId: undefined, driveId: undefined },
        },
        notice: "已換影片。",
      });
    }
  },

  pasteUrl: (slot, url) => {
    const parsed = classifyUrl(url);
    if (!parsed) {
      set({ notice: "請貼 YouTube、Google Drive，或直接檔案網址。" });
      return;
    }
    const meta = readMeta();
    if (slot === "hero") {
      meta.hero = parsed;
      void idbDel("hero-video");
      writeMeta(meta);
      set({ hero: clipFromMeta(defaultHero(), parsed), notice: "已套用連結。" });
      return;
    }
    if (slot === "portrait") {
      if (parsed.kind === "youtube") {
        set({ notice: "頭像請用相片或 Google Drive 圖片連結。" });
        return;
      }
      const href = parsed.kind === "drive" && parsed.driveId ? driveImage(parsed.driveId) : parsed.href;
      meta.portraitHref = href;
      void idbDel("portrait");
      writeMeta(meta);
      set({ portrait: href, notice: "已換頭像。" });
      return;
    }
    const base = defaultClips()[slot];
    if (!base) return;
    meta.clips[slot] = parsed;
    void idbDel(`video:${slot}`);
    writeMeta(meta);
    const next = clipFromMeta(base, parsed);
    const prev = get().clips[slot] ?? base;
    set({
      clips: { ...get().clips, [slot]: { ...next, poster: prev.poster.startsWith("blob:") ? prev.poster : next.poster } },
      notice: "已套用連結。",
    });
  },

  reset: async (slot) => {
    const meta = readMeta();
    if (slot === "hero") {
      delete meta.hero;
      await idbDel("hero-video");
      await idbDel("hero-poster");
      writeMeta(meta);
      set({ hero: defaultHero(), notice: "已還原主視覺。" });
      return;
    }
    if (slot === "portrait") {
      delete meta.portraitHref;
      await idbDel("portrait");
      writeMeta(meta);
      set({ portrait: "/media/portrait.jpg", notice: "已還原頭像。" });
      return;
    }
    delete meta.clips[slot];
    await idbDel(`video:${slot}`);
    await idbDel(`poster:${slot}`);
    writeMeta(meta);
    const base = defaultClips()[slot];
    if (!base) return;
    set({ clips: { ...get().clips, [slot]: base }, notice: "已還原。" });
  },
}));

export function useProjectClips() {
  const clips = useMediaStore((s) => s.clips);
  return PROJECTS.map((project) => {
    const clip = clips[project.id];
    return clip ? { ...project, ...clip } : project;
  });
}
