import Image from "next/image";
import type { Content } from "@/lib/content";
import { ArrowDown, FileDown, MapPin } from "./icons";
import { Trajectory } from "./trajectory";

export function Hero({ c }: { c: Content }) {
  const h = c.hero;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-7 lg:pt-6">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-2" style={{ ["--i" as string]: 0 }}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            {h.status}
          </p>

          <h1
            id="hero-title"
            className="rise mt-6 font-display text-[clamp(3.4rem,10vw,7.25rem)] leading-[0.92] tracking-[-0.02em] text-ink"
            style={{ ["--i" as string]: 1 }}
          >
            Yasin <em className="text-accent">Gülsoy</em>
          </h1>

          <p className="rise mt-5 text-lg font-medium text-ink sm:text-xl" style={{ ["--i" as string]: 2 }}>
            {h.role}
          </p>

          <p className="rise mt-4 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-2" style={{ ["--i" as string]: 3 }}>
            {h.lead}
          </p>

          <p className="rise mt-5 flex items-center gap-1.5 text-sm text-muted" style={{ ["--i" as string]: 4 }}>
            <MapPin width={16} height={16} />
            {h.location}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 5 }}>
            <a
              href={`#${c.ids.contact}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-accent-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              {h.cta}
              <ArrowDown width={17} height={17} />
            </a>
            <a
              href={h.cvFile}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-[15px] font-medium text-ink transition hover:-translate-y-0.5 hover:border-accent"
            >
              <FileDown width={17} height={17} />
              {h.cv}
            </a>
          </div>
        </div>

        <div className="rise lg:col-span-5" style={{ ["--i" as string]: 3 }}>
          <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_1px_0_0_var(--line),0_24px_60px_-30px_rgb(13_25_38/0.25)] sm:p-7">
            <div className="flex items-center gap-4">
              <Image
                src="/yasin-gulsoy.jpg"
                alt={h.photoAlt}
                width={72}
                height={72}
                preload
                className="size-[72px] rounded-2xl object-cover ring-1 ring-line"
              />
              <div>
                <p className="font-display text-2xl leading-tight text-ink">{c.trajectory.title}</p>
                <p className="mt-1 text-sm text-muted">{c.trajectory.caption}</p>
              </div>
            </div>
            <div className="mt-6">
              <Trajectory t={c.trajectory} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end bg-surface px-5 py-6 sm:px-7">
              <dt className="mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="text-3xl font-semibold leading-none tracking-tight text-ink tabular-nums sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
