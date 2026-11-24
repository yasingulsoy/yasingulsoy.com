"use client";

import { useRef } from "react";
import { Menu } from "./icons";

type Props = { items: { href: string; label: string }[]; label: string; open: string };

// <details> JS olmadan da açılıp kapanır; bu bileşen yalnızca bağlantıya tıklanınca menüyü kapatır.
export function MobileMenu({ items, label, open }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details ref={ref} className="relative md:hidden">
      <summary className="inline-flex size-9 cursor-pointer list-none items-center justify-center rounded-full border border-line text-ink-2 [&::-webkit-details-marker]:hidden">
        <Menu width={17} height={17} />
        <span className="sr-only">{open}</span>
      </summary>
      <nav
        aria-label={label}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a") && ref.current) ref.current.open = false;
        }}
        className="absolute right-0 top-11 w-52 rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-black/5"
      >
        <ul>
          {items.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="block rounded-xl px-3 py-2.5 text-sm text-ink-2 hover:bg-surface-2 hover:text-ink">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
