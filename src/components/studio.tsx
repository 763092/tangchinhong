import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ImagePlus, Link2, RotateCcw, Upload, X } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";
import { useMediaStore, useProjectClips } from "@/lib/media-store";
import { cn } from "@/lib/utils";

function FileButton({
  accept,
  label,
  onFile,
}: {
  accept: string;
  label: string;
  onFile: (file: File) => void;
}) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-stroke px-4 text-sm text-fg transition-colors duration-200 hover:border-fg/40"
    >
      <Upload className="size-3.5" />
      {label}
      <input
        id={id}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
          e.target.value = "";
        }}
      />
    </label>
  );
}

function UrlRow({ onApply }: { onApply: (url: string) => void }) {
  const locale = useLocale((s) => s.locale);
  const [value, setValue] = useState("");
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onApply(value);
        setValue("");
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={tx(locale, {
          en: "Paste YouTube or Google Drive link",
          zh: "貼上 YouTube 或 Google Drive 連結",
        })}
        aria-label={tx(locale, {
          en: "Paste YouTube or Google Drive link",
          zh: "貼上 YouTube 或 Google Drive 連結",
        })}
        className="min-h-11 min-w-0 flex-1 rounded-lg border border-stroke bg-bg px-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-fg/40"
      />
      <button
        type="submit"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke px-4 text-sm"
      >
        <Link2 className="size-3.5" />
        {tx(locale, { en: "Apply", zh: "套用" })}
      </button>
    </form>
  );
}

function SlotCard({
  title,
  preview,
  children,
}: {
  title: string;
  preview: ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-xl border border-stroke bg-elevated/40 p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-16 w-28 overflow-hidden rounded-md bg-bg">{preview}</div>
        <h3 className="font-display text-xl italic">{title}</h3>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </article>
  );
}

export function Studio({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const locale = useLocale((s) => s.locale);
  const hero = useMediaStore((s) => s.hero);
  const portrait = useMediaStore((s) => s.portrait);
  const notice = useMediaStore((s) => s.notice);
  const upload = useMediaStore((s) => s.upload);
  const pasteUrl = useMediaStore((s) => s.pasteUrl);
  const reset = useMediaStore((s) => s.reset);
  const setNotice = useMediaStore((s) => s.setNotice);
  const clips = useProjectClips();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), 3200);
    return () => window.clearTimeout(t);
  }, [notice, setNotice]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[88] flex justify-end bg-bg/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            ref={panel}
            data-lenis-prevent
            className="flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-stroke bg-bg"
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 16, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stroke bg-bg/90 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="kicker mb-1">{tx(locale, { en: "Studio", zh: "換片" })}</p>
                <h2 className="font-display text-2xl italic">
                  {tx(locale, { en: "Replace photos & films", zh: "自己換相、換片" })}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex size-11 items-center justify-center rounded-full border border-stroke"
                aria-label={tx(locale, { en: "Close", zh: "關閉" })}
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-8 px-5 py-6">
              <section className="rounded-xl border border-stroke p-4 text-sm leading-relaxed text-muted">
                <p className="kicker mb-3 text-fg">{tx(locale, { en: "How to swap", zh: "點換" })}</p>
                <ol className="list-decimal space-y-2 pl-4">
                  <li>
                    {tx(locale, {
                      en: "Upload or paste a link here to preview on this device only.",
                      zh: "喺呢度上傳或貼連結，只係呢部裝置預覽，其他人睇唔到。",
                    })}
                  </li>
                  <li>
                    {tx(locale, {
                      en: "Drive: Share → Anyone with the link. Send that URL in chat to lock it into the published site.",
                      zh: "Drive：共用 → 知道連結的任何人。把連結傳到對話，先會寫入發佈網站。",
                    })}
                  </li>
                  <li>
                    {tx(locale, {
                      en: "After a Drive file is locked in, replace it via File → Manage versions (keep the same file). The site updates — no republish.",
                      zh: "寫入之後，喺 Drive 用「檔案 → 管理版本」覆蓋同一份檔，網站會跟住轉，唔使再發佈。",
                    })}
                  </li>
                </ol>
                <p className="kicker mt-5 mb-3 text-fg">
                  {tx(locale, { en: "Google Sites", zh: "Google 協作平台" })}
                </p>
                <p>
                  {tx(locale, {
                    en: "Sites cannot host this motion site as a file. Publish this page, then in Sites: Insert → Embed → paste the site URL.",
                    zh: "協作平台唔可以上傳呢個動態網站檔案。請先發佈呢頁，然後喺協作平台：插入 → 嵌入 → 貼上網址。",
                  })}
                </p>
              </section>

              {notice && (
                <p className="rounded-lg border border-line/40 bg-elevated px-4 py-3 text-sm text-fg">
                  {notice}
                </p>
              )}

              <SlotCard
                title={tx(locale, { en: "Hero", zh: "主視覺" })}
                preview={<img src={hero.poster} alt="" className="h-full w-full object-cover" />}
              >
                <div className="flex flex-wrap gap-2">
                  <FileButton accept="video/*" label={tx(locale, { en: "Video", zh: "影片" })} onFile={(f) => void upload("hero-video", f)} />
                  <FileButton accept="image/*" label={tx(locale, { en: "Poster", zh: "封面" })} onFile={(f) => void upload("hero-poster", f)} />
                  <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke px-4 text-sm" onClick={() => void reset("hero")}>
                    <RotateCcw className="size-3.5" />
                    {tx(locale, { en: "Reset", zh: "還原" })}
                  </button>
                </div>
                <UrlRow onApply={(url) => pasteUrl("hero", url)} />
              </SlotCard>

              <SlotCard
                title={tx(locale, { en: "Portrait", zh: "頭像" })}
                preview={<img src={portrait} alt="" className="h-full w-full object-cover" />}
              >
                <div className="flex flex-wrap gap-2">
                  <FileButton accept="image/*" label={tx(locale, { en: "Photo", zh: "相片" })} onFile={(f) => void upload("portrait", f)} />
                  <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke px-4 text-sm" onClick={() => void reset("portrait")}>
                    <RotateCcw className="size-3.5" />
                    {tx(locale, { en: "Reset", zh: "還原" })}
                  </button>
                </div>
                <UrlRow onApply={(url) => pasteUrl("portrait", url)} />
              </SlotCard>

              <div>
                <p className="kicker mb-4">{tx(locale, { en: "Selected work", zh: "作品" })}</p>
                <div className="space-y-4">
                  {PROJECTS.map((project) => {
                    const clip = clips.find((c) => c.id === project.id) ?? project;
                    return (
                      <SlotCard key={project.id} title={tx(locale, project.title)} preview={<img src={clip.poster} alt="" className="h-full w-full object-cover" />}>
                        <div className="flex flex-wrap gap-2">
                          <FileButton accept="video/*" label={tx(locale, { en: "Video", zh: "影片" })} onFile={(f) => void upload(`video:${project.id}`, f)} />
                          <FileButton accept="image/*" label={tx(locale, { en: "Poster", zh: "封面" })} onFile={(f) => void upload(`poster:${project.id}`, f)} />
                          <button type="button" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stroke px-4 text-sm" onClick={() => void reset(project.id)}>
                            <RotateCcw className="size-3.5" />
                            {tx(locale, { en: "Reset", zh: "還原" })}
                          </button>
                        </div>
                        <UrlRow onApply={(url) => pasteUrl(project.id, url)} />
                      </SlotCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function StudioButton({ onClick }: { onClick: () => void }) {
  const locale = useLocale((s) => s.locale);
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-stroke text-fg transition-colors duration-200 hover:border-fg/40",
      )}
      aria-label={tx(locale, { en: "Replace media", zh: "換片換相" })}
      title={tx(locale, { en: "Replace media", zh: "換片換相" })}
    >
      <ImagePlus className="size-4" />
    </button>
  );
}
