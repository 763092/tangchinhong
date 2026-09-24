import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";

export function Contact() {
  const locale = useLocale((s) => s.locale);
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="kicker mb-4">03 — {tx(locale, { en: "Contact", zh: "聯絡" })}</p>
        <h2 className="title-heiti text-display">
          {tx(locale, { en: "Let’s cut the next one", zh: "下一條，一起剪" })}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <a
            href={PROFILE.emailHref}
            className="group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35"
          >
            <p className="kicker mb-4">{tx(locale, { en: "Email", zh: "電郵" })}</p>
            <p className="flex items-center justify-center gap-3 text-lg text-fg">
              {PROFILE.email}
              <ArrowUpRight className="size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
          <a
            href={PROFILE.phoneHref}
            className="group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35"
          >
            <p className="kicker mb-4">{tx(locale, { en: "Phone", zh: "電話" })}</p>
            <p className="flex items-center justify-center gap-3 text-lg text-fg">
              {PROFILE.phoneDisplay}
              <ArrowUpRight className="size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
          <a
            href={PROFILE.youtubePlaylist}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-stroke p-6 text-center transition-colors duration-200 hover:border-fg/35"
          >
            <p className="kicker mb-4">YouTube</p>
            <p className="flex items-center justify-center gap-3 text-lg text-fg">
              {tx(locale, { en: "Full portfolio", zh: "完整作品" })}
              <ArrowUpRight className="size-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl bg-elevated">
          <img
            src="/media/contact-pig.png"
            alt=""
            className="aspect-video w-full object-cover object-center"
          />
        </div>
      </div>

      <footer className="border-t border-stroke px-5 py-8 md:px-8">
        <p className="kicker text-center">Tang Chin Hong {year}</p>
      </footer>
    </section>
  );
}
