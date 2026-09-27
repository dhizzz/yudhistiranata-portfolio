"use client";

import { useLanguage } from "@/lib/i18n/context";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "id" : "en")}
      aria-label={t.meta.language}
      className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 px-2 font-mono text-xs tracking-wide text-ink-muted transition-colors hover:text-ink"
    >
      <span className={locale === "en" ? "text-ink underline decoration-accent decoration-2 underline-offset-4" : ""}>
        EN
      </span>
      <span aria-hidden>/</span>
      <span className={locale === "id" ? "text-ink underline decoration-accent decoration-2 underline-offset-4" : ""}>
        ID
      </span>
    </button>
  );
}
