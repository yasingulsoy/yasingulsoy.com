import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { Hero } from "./hero";
import { About, Contact, Education, Experience, Focus, Projects, SiteFooter, Skills } from "./sections";
import { SiteHeader } from "./site-header";

export function Home({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {c.skip}
      </a>
      <SiteHeader c={c} locale={locale} />
      <main id="main">
        <Hero c={c} />
        <About c={c} />
        <Focus c={c} />
        <Experience c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Education c={c} />
        <Contact c={c} />
      </main>
      <SiteFooter c={c} />
    </>
  );
}
