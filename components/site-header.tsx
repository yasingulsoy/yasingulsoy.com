import Link from "next/link";
import type { Content } from "@/lib/content";
import { localePath, type Locale } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ c, locale }: { c: Content; locale: Locale }) {
  const other: Locale = locale === "tr" ? "en" : "tr";
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href={localePath[locale]} className="group flex items-center gap-2.5 rounded-md">
          <span className="grid size-8 place-items-center rounded-lg bg-accent font-display text-[17px] text-accent-ink">
            YG
          </span>
          <span className="text-[15px] font-medium tracking-tight text-ink">Yasin Gülsoy</span>
        </Link>

        <nav aria-label={c.menu.main} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {c.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-full px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <Link
            href={localePath[other]}
            hrefLang={other}
            aria-label={c.langSwitch.aria}
            className="inline-flex h-9 items-center rounded-full border border-line px-3 font-mono text-xs text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            {c.langSwitch.label}
          </Link>
          <ThemeToggle toDark={c.theme.toDark} toLight={c.theme.toLight} />

          <MobileMenu items={c.nav} label={c.menu.mobile} open={c.menu.open} />
        </div>
      </div>
    </header>
  );
}
