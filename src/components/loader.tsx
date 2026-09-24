import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROFILE } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";

const DURATION = 2600;

export function Loader({ onDone }: { onDone: () => void }) {
  const locale = useLocale((s) => s.locale);
  const words = PROFILE.loaderWords[locale];
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      onDone();
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 650);
        }, 120);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 850);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-bg px-6 py-8 text-fg md:px-12 md:py-12"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-8%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between">
            <motion.p
              className="kicker"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              {tx(locale, { en: "Portfolio", zh: "作品集" })}
            </motion.p>
            <motion.p
              className="kicker"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              {tx(locale, PROFILE.location)} · 2026
            </motion.p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="title-heiti mb-6 text-center text-sm md:text-base">{PROFILE.monogram}</p>
            <div className="relative h-[4.5rem] overflow-hidden md:h-28">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${locale}-${words[wordIndex]}`}
                  className="title-heiti text-5xl text-fg/85 md:text-7xl"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {words[wordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between">
              <span className="kicker">{tx(locale, { en: "Loading", zh: "載入中" })}</span>
              <span className="title-heiti text-4xl tabular-nums md:text-5xl">
                {String(progress).padStart(2, "0")}
              </span>
            </div>
            <div className="h-px w-full bg-stroke">
              <div
                className="loader-bar h-px bg-line"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
