"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/lib/i18n/context";

const STORAGE_KEY = "portfolio-theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const { t } = useLanguage();
  const isDark = useSyncExternalStore(subscribe, getIsDark, () => false);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // storage blocked: the theme still applies for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.meta.menuTheme}
      aria-pressed={isDark}
      className="inline-flex h-11 min-w-11 items-center justify-center gap-2 px-2 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
    >
      {/* Half-filled disc: the conventional light/dark glyph, drawn inline to match the hairline style. */}
      <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" className="shrink-0">
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor" />
      </svg>
      <span className="hidden md:inline">{isDark ? t.meta.themeLight : t.meta.themeDark}</span>
    </button>
  );
}
