import type { ReactNode } from "react";
import { fontVariables } from "@/lib/fonts";
import { personJsonLd } from "@/lib/metadata";
import type { Locale } from "@/lib/site";

// Kayıtlı tema yoksa sistem tercihini kullanır. Kök layout'larda next/script ile sayfa çizilmeden önce çalışır.
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export function Document({ locale, head, children }: { locale: Locale; head: ReactNode; children: ReactNode }) {
  const jsonLd = JSON.stringify(personJsonLd(locale)).replace(/</g, "\\u003c");
  return (
    <html lang={locale} className={`${fontVariables} antialiased`} suppressHydrationWarning>
      <body className="min-h-dvh bg-bg text-ink">
        {head}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        {children}
      </body>
    </html>
  );
}
