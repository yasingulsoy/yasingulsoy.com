import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "404 · Yasin Gülsoy",
  description: content.tr.notFound.text,
};

// İki kök layout olduğu (/ ve /en) için eşleşmeyen adresler buraya düşer.
export default function GlobalNotFound() {
  const tr = content.tr.notFound;
  const en = content.en.notFound;
  return (
    <html lang="tr" className={`${fontVariables} antialiased`}>
      <body className="grid min-h-dvh place-items-center bg-bg px-4 text-ink">
        <main className="relative w-full max-w-xl text-center">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-4 font-display text-6xl leading-none sm:text-7xl">{tr.title}</h1>
          <p className="mt-5 text-lg text-ink-2">{tr.text}</p>
          <p lang="en" className="mt-2 text-sm text-muted">
            {en.title}. {en.text}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink">
              {tr.back}
            </Link>
            <Link href="/en" hrefLang="en" lang="en" className="inline-flex h-12 items-center rounded-full border border-line px-6 font-medium text-ink">
              {en.back}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
