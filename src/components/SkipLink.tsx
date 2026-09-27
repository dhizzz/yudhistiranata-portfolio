"use client";

import { useLanguage } from "@/lib/i18n/context";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only z-[60] bg-ink px-4 py-3 text-sm font-medium text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {t.meta.skip}
    </a>
  );
}
