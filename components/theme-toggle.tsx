"use client";

import { Moon, Sun } from "./icons";

// Tema, sayfa çizilmeden önce document.tsx'teki betikle data-theme olarak atanıyor.
// Simgeler CSS ile değiştiği için sunucu ve istemci aynı HTML'i üretiyor.
export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Gizli sekmede depolama kapalı olabilir; tema yine de bu sayfada değişir.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent hover:text-accent"
    >
      <span className="dark:hidden">
        <Moon width={17} height={17} />
        <span className="sr-only">{toDark}</span>
      </span>
      <span className="hidden dark:inline">
        <Sun width={17} height={17} />
        <span className="sr-only">{toLight}</span>
      </span>
    </button>
  );
}
