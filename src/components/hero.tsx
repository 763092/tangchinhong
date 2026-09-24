import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PROFILE } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";
import { useMediaStore } from "@/lib/media-store";
import { MediaFrame } from "@/components/media-frame";

export function Hero({ armed }: { armed: boolean }) {
  const locale = useLocale((s) => s.locale);
  const hero = useMediaStore((s) => s.hero);
  const root = useRef<HTMLElement>(null);
  const cluster = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const box = cluster.current;
      const kicker = kickerRef.current;
      const name = nameRef.current;
      if (!box || !kicker || !name) return;
      box.style.transform = "";
      name.style.fontSize = "1px";
      const target = kicker.scrollWidth;
      name.style.fontSize = "80px";
      const nameW = name.scrollWidth;
      if (target > 0 && nameW > 0) {
        name.style.fontSize = `${(80 * target) / nameW}px`;
      }
      const parent = box.parentElement;
      if (!parent) return;
      const avail = parent.clientWidth;
      const need = box.scrollWidth;
      if (need > avail && need > 0) {
        box.style.transform = `scale(${avail / need})`;
      }
    };
    fit();
    void document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [locale]);

  useEffect(() => {
    if (!armed || !root.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(".hero-reveal", { opacity: 1, y: 0 });
        return;
      }
      gsap.set(".hero-reveal", { opacity: 0, y: 32 });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-kicker", { opacity: 1, y: 0, duration: 0.8 }, 0.05);
      tl.to(".hero-name", { opacity: 1, y: 0, duration: 1.05 }, 0.12);
      tl.to(".hero-role", { opacity: 1, y: 0, duration: 0.8 }, 0.28);
      tl.to(".hero-scroll", { opacity: 1, y: 0, duration: 0.75 }, 0.4);
    }, root);
    return () => ctx.revert();
  }, [armed]);

  return (
    <section ref={root} id="top" className="relative isolate h-dvh min-h-[36rem] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MediaFrame
          clip={hero}
          mode="cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 md:px-8 md:pb-12">
        <div ref={cluster} className="w-max origin-bottom-left">
          <p ref={kickerRef} className="hero-reveal hero-kicker kicker mb-5 w-fit whitespace-nowrap">
            {tx(locale, PROFILE.kicker)}
          </p>
          <h1
            ref={nameRef}
            className="hero-reveal hero-name title-heiti w-fit whitespace-nowrap text-fg"
          >
            Tang Chin Hong
          </h1>
        </div>
        <p className="hero-reveal hero-role mt-6 max-w-md text-base font-light leading-snug text-fg/90 md:mt-8 md:text-xl">
          {tx(locale, PROFILE.role)}
        </p>
        <div className="hero-reveal hero-scroll mt-6 flex items-center gap-4">
          <div className="relative h-10 w-px bg-stroke">
            <span className="scroll-dot absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-line" />
          </div>
          <span className="kicker">{tx(locale, { en: "Scroll", zh: "下滑" })}</span>
        </div>
      </div>
    </section>
  );
}
