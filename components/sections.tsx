import type { Content } from "@/lib/content";
import { site } from "@/lib/site";
import { AreaIcon, ArrowUpRight, FileDown, GitHub, LinkedIn, Lock, Mail } from "./icons";

function Heading({ kicker, title, id }: { kicker: string; title: string; id: string }) {
  return (
    <div className="reveal">
      <p className="flex items-center gap-3 font-mono text-xs tracking-wide text-accent">
        <span aria-hidden className="h-px w-8 bg-accent" />
        {kicker}
      </p>
      <h2 id={id} className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

const Tag = ({ children }: { children: string }) => (
  <li className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-ink-2">{children}</li>
);

function Wrap({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function About({ c }: { c: Content }) {
  const id = c.ids.about;
  return (
    <Wrap id={id}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Heading id={`${id}-title`} kicker={c.about.kicker} title={c.about.title} />
        </div>
        <div className="reveal space-y-5 text-[17px] leading-relaxed text-ink-2 lg:col-span-6 lg:pt-10">
          {c.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-pretty">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

export function Focus({ c }: { c: Content }) {
  const id = c.ids.focus;
  return (
    <Wrap id={id} className="!pt-0">
      <Heading id={`${id}-title`} kicker={c.focus.kicker} title={c.focus.title} />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.focus.items.map((f) => (
          <li
            key={f.title}
            className="reveal group flex flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
              <AreaIcon name={f.icon} width={21} height={21} />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{f.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-2">{f.text}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {f.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

function CompanyList({ companies }: { companies: Content["experience"]["companies"] }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {companies.map((co) => (
        <li key={co.name + co.note} className="reveal grid gap-6 py-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold tracking-tight text-ink">{co.name}</h3>
            <p className="mt-1 text-sm text-muted">{co.note}</p>
          </div>
          <ol className="relative space-y-7 md:col-span-8">
            {co.roles.length > 1 && (
              <span aria-hidden className="absolute bottom-3 left-[5px] top-3 w-px bg-line" />
            )}
            {co.roles.map((r) => (
              <li key={r.title} className="relative pl-7">
                <span
                  aria-hidden
                  className={`absolute left-0 top-[7px] size-[11px] rounded-full border-2 ${
                    r.current ? "border-live bg-live shadow-[0_0_0_4px_color-mix(in_oklab,var(--live)_20%,transparent)]" : "border-accent bg-surface"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-medium text-ink">{r.title}</p>
                  <p className="font-mono text-xs text-muted tabular-nums">{r.date}</p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export function Experience({ c }: { c: Content }) {
  const id = c.ids.experience;
  const e = c.experience;
  return (
    <Wrap id={id} className="!pt-0">
      <Heading id={`${id}-title`} kicker={e.kicker} title={e.title} />
      <div className="mt-12">
        <CompanyList companies={e.companies} />
      </div>
      <h3 className="reveal mt-16 font-display text-3xl text-ink">{e.leadershipTitle}</h3>
      <div className="mt-6">
        <CompanyList companies={e.leadership} />
      </div>
    </Wrap>
  );
}

export function Projects({ c }: { c: Content }) {
  const id = c.ids.projects;
  const p = c.projects;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading id={`${id}-title`} kicker={p.kicker} title={p.title} />
          <p className="reveal text-sm text-muted">{p.intro}</p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {p.items.map((item, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")} · {item.kind}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {item.href ? (
                      <>
                        {item.linkLabel}
                        <ArrowUpRight width={16} height={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-muted">
                        <Lock width={14} height={14} />
                        {item.linkLabel}
                      </span>
                    )}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[2.1rem] leading-none text-ink">{item.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-2">{item.text}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            );
            const cls =
              "group flex h-full flex-col rounded-3xl border border-line bg-bg p-7 transition duration-300";
            return (
              <li key={item.name} className="reveal">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className={`${cls} hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_50px_-30px_rgb(13_25_38/0.35)]`}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Skills({ c }: { c: Content }) {
  const id = c.ids.skills;
  return (
    <Wrap id={id}>
      <Heading id={`${id}-title`} kicker={c.skills.kicker} title={c.skills.title} />
      <dl className="mt-12 divide-y divide-line border-y border-line">
        {c.skills.groups.map((g) => (
          <div key={g.title} className="reveal grid gap-4 py-6 md:grid-cols-12">
            <dt className="font-medium text-ink md:col-span-3">{g.title}</dt>
            <dd className="md:col-span-9">
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Wrap>
  );
}

export function Education({ c }: { c: Content }) {
  const id = c.ids.education;
  const e = c.education;
  return (
    <Wrap id={id} className="!pt-0">
      <Heading id={`${id}-title`} kicker={e.kicker} title={e.title} />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <ul className="reveal space-y-5 lg:col-span-1">
          {e.schools.map((s) => (
            <li key={s.degree} className="rounded-3xl border border-line bg-surface p-6">
              <p className="flex items-center gap-2 font-mono text-xs text-muted tabular-nums">
                {s.current && <span aria-hidden className="size-2 rounded-full bg-live" />}
                {s.date}
              </p>
              <h3 className="mt-3 font-semibold tracking-tight text-ink">{s.degree}</h3>
              <p className="mt-1 text-sm text-ink-2">{s.school}</p>
              <p className="mt-3 inline-block rounded-full bg-surface-2 px-2.5 py-1 text-xs text-accent">{s.note}</p>
            </li>
          ))}
        </ul>

        <div className="reveal rounded-3xl border border-line bg-surface p-6 lg:col-span-2 sm:p-8">
          <h3 className="font-display text-2xl text-ink">{e.certsTitle}</h3>
          <ul className="mt-5 divide-y divide-line">
            {e.certs.map((cert) => (
              <li key={cert.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-[15px] text-ink">{cert.name}</span>
                <span className="shrink-0 text-sm text-muted">{cert.org}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-display text-2xl text-ink">{e.langsTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {e.langs.map((l) => (
              <li key={l.name} className="rounded-2xl border border-line px-4 py-3">
                <span className="text-[15px] font-medium text-ink">{l.name}</span>
                <span className="ml-2 font-mono text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  );
}

export function Contact({ c }: { c: Content }) {
  const id = c.ids.contact;
  const k = c.contact;
  const btn =
    "inline-flex h-12 items-center gap-2.5 rounded-full px-5 text-[15px] font-medium transition hover:-translate-y-0.5";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="reveal relative overflow-hidden rounded-[32px] bg-[#0f2236] px-6 py-14 text-white sm:px-12 sm:py-20">
        <div aria-hidden className="blueprint absolute inset-0 opacity-60 [--grid:rgb(141_185_230/0.12)]" />
        <div className="relative">
          <p className="flex items-center gap-3 font-mono text-xs tracking-wide text-[#8db9e6]">
            <span aria-hidden className="h-px w-8 bg-[#8db9e6]" />
            {k.kicker}
          </p>
          <h2 id={`${id}-title`} className="mt-4 max-w-2xl text-balance font-display text-4xl leading-[1.05] sm:text-6xl">
            {k.title}
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">{k.text}</p>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 break-all font-display text-2xl text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white sm:text-4xl"
          >
            <Mail width={28} height={28} className="shrink-0" />
            {site.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={`${btn} bg-white text-[#0f2236]`}>
              <LinkedIn width={18} height={18} />
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className={`${btn} border border-white/25 text-white hover:border-white/60`}>
              <GitHub width={18} height={18} />
              GitHub
            </a>
            <a href="/cv/Yasin_Gulsoy_CV_TR.pdf" download className={`${btn} border border-white/25 text-white hover:border-white/60`}>
              <FileDown width={18} height={18} />
              {k.cvTr}
            </a>
            <a href="/cv/Yasin_Gulsoy_CV_EN.pdf" download className={`${btn} border border-white/25 text-white hover:border-white/60`}>
              <FileDown width={18} height={18} />
              {k.cvEn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ c }: { c: Content }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© Yasin Gülsoy · yasingulsoy.com</p>
        <p className="flex items-center gap-2">
          {c.footer.built}
          <a href={site.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-ink-2 underline decoration-line underline-offset-4 hover:text-accent">
            {c.footer.source}
            <ArrowUpRight width={14} height={14} />
          </a>
        </p>
      </div>
    </footer>
  );
}
