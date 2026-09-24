import { PROFILE, CAPABILITIES, JOBS, EDUCATION, STATS } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";
import { useMediaStore } from "@/lib/media-store";

export function About() {
  const locale = useLocale((s) => s.locale);
  const portrait = useMediaStore((s) => s.portrait);

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <p className="kicker mb-4">03 — {tx(locale, { en: "About", zh: "簡介" })}</p>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl bg-elevated">
            <img
              src={portrait}
              alt="Tang Chin Hong"
              className="aspect-square w-full object-cover object-top"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            {tx(locale, EDUCATION.title)} · {tx(locale, EDUCATION.school)}
          </p>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-display">
            {tx(locale, PROFILE.headline)}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {tx(locale, PROFILE.bio)}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.value} className="border-t border-stroke pt-4">
                <dt className="font-display text-3xl text-fg">{stat.value}</dt>
                <dd className="mt-1 text-xs tracking-wide text-muted">
                  {tx(locale, stat.label)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((cap) => (
          <article key={cap.key} className="bg-bg p-6 md:p-8">
            <p className="kicker mb-8">{cap.key}</p>
            <h3 className="font-display text-2xl">{tx(locale, cap.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{tx(locale, cap.body)}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 md:mt-28">
        <p className="kicker mb-4">04 — {tx(locale, { en: "Experience", zh: "經歷" })}</p>
        <h2 className="mb-12 font-display text-display">
          {tx(locale, { en: "Eighteen years on set and in the suite.", zh: "十八年，現場與剪接室。" })}
        </h2>
        <ol className="relative border-l border-stroke">
          {JOBS.map((job) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-line" />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg text-fg">{job.company}</h3>
                <p className="kicker">{tx(locale, job.period)}</p>
              </div>
              <p className="mt-1 font-display text-xl text-muted">
                {tx(locale, job.role)}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b.en} className="max-w-3xl text-sm leading-relaxed text-muted">
                    {tx(locale, b)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
