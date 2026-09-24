import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { SHOWREEL, type Project } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";
import { youtubeEmbed, type Clip } from "@/lib/media";
import { useProjectClips } from "@/lib/media-store";
import { MediaFrame } from "@/components/media-frame";
import { cn } from "@/lib/utils";

type WorkItem = Project & Partial<Clip>;

function useInViewPlay(enabled: boolean) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);
  return ref;
}

function asClip(project: WorkItem): Clip {
  return {
    poster: project.poster,
    video: project.video,
    kind: project.kind ?? "file",
    youtubeId: project.youtubeId,
    driveId: project.driveId,
  };
}

function WorkCard({
  project,
  index,
  onOpen,
}: {
  project: WorkItem;
  index: number;
  onOpen: (p: WorkItem) => void;
}) {
  const locale = useLocale((s) => s.locale);
  const clip = asClip(project);
  const isFile = clip.kind === "file";
  const videoRef = useInViewPlay(isFile);
  const [hover, setHover] = useState(false);

  return (
    <article
      className="group relative w-[86vw] shrink-0 snap-center sm:w-[70vw] lg:w-[58vw]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        data-cursor="hover"
        onClick={() => onOpen(project)}
        className="relative block aspect-video w-full overflow-hidden rounded-xl bg-elevated text-left"
        aria-label={tx(locale, project.title)}
      >
        {isFile ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            muted
            loop
            playsInline
            preload="metadata"
            poster={clip.poster}
            src={clip.video}
          />
        ) : (
          <MediaFrame clip={clip} mode="poster" className="transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 md:left-6 md:top-6">
          <span className="kicker text-fg/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="kicker text-muted">{tx(locale, project.category)}</span>
        </div>
        <div
          className={cn(
            "absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-fg/25 bg-bg/30 text-fg backdrop-blur-sm transition-transform duration-200 md:right-6 md:top-6",
            hover ? "scale-100" : "scale-90",
          )}
        >
          <Play className="size-4 fill-fg" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
          <h3 className="title-heiti text-2xl text-fg md:text-4xl">
            {tx(locale, project.title)}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {tx(locale, project.client)} · {project.year}
          </p>
        </div>
      </button>
    </article>
  );
}

export function Showreel() {
  const locale = useLocale((s) => s.locale);
  const [playing, setPlaying] = useState(false);

  return (
    <section id="reel" className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
      <div className="mb-8 md:mb-10">
        <p className="kicker mb-4">01 — Showreel</p>
        <h2 className="title-heiti text-display">
          {tx(locale, { en: "Watch the reel", zh: "睇 Showreel" })}
        </h2>
      </div>
      <div className="overflow-hidden rounded-xl bg-elevated">
        <div className="relative aspect-video bg-bg">
          {playing ? (
            <iframe
              title="Showreel"
              src={youtubeEmbed(SHOWREEL.youtubeId, { autoplay: true })}
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative h-full w-full"
              aria-label={tx(locale, { en: "Play showreel", zh: "播放 Showreel" })}
            >
              <img
                src={`https://i.ytimg.com/vi/${SHOWREEL.youtubeId}/maxresdefault.jpg`}
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-bg/40" />
              <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fg/30 bg-bg/55 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 md:size-20">
                <Play className="ml-0.5 size-6 fill-fg text-fg md:size-7" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function VideoModal({
  project,
  onClose,
}: {
  project: WorkItem | null;
  onClose: () => void;
}) {
  const locale = useLocale((s) => s.locale);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const clip = project ? asClip(project) : null;

  return (
    <AnimatePresence>
      {project && clip && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-md md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-elevated"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur-sm"
              aria-label={tx(locale, { en: "Close", zh: "關閉" })}
            >
              <X className="size-4" />
            </button>
            <div className="aspect-video bg-bg">
              <MediaFrame
                clip={clip}
                mode="play"
                autoPlay
                muted={false}
                controls={clip.kind === "file"}
              />
            </div>
            <div className="flex flex-col gap-3 px-5 py-5 md:flex-row md:items-end md:justify-between md:px-7 md:py-6">
              <div>
                <p className="kicker mb-2">{tx(locale, project.category)}</p>
                <h3 className="title-heiti text-3xl md:text-4xl">
                  {tx(locale, project.title)}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {tx(locale, project.client)} · {project.year}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {project.roles.map((role) => (
                  <li
                    key={role.en}
                    className="rounded-full border border-stroke px-3 py-1.5 text-xs tracking-wide text-muted"
                  >
                    {tx(locale, role)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Work() {
  const locale = useLocale((s) => s.locale);
  const projects = useProjectClips();
  const [active, setActive] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto mb-10 max-w-7xl px-5 md:mb-14 md:px-8">
        <p className="kicker mb-4">02 — {tx(locale, { en: "Selected Work", zh: "精選作品" })}</p>
        <h2 className="title-heiti text-display">
          {tx(locale, { en: "Frames that hold", zh: "留得住的畫面" })}
        </h2>
      </div>

      <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6vw] pb-8 md:gap-5">
        {projects.map((project, i) => (
          <WorkCard key={`${project.id}-${project.video}`} project={project} index={i} onOpen={setActive} />
        ))}
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
