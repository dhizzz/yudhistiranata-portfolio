"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-8 sm:py-32">
      <p className="font-mono text-xs text-ink-muted">404</p>
      <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
        {t.project.notFoundTitle}
      </h1>
      <Link
        href="/work"
        className="mt-10 inline-flex h-12 items-center bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
      >
        {t.project.back}
      </Link>
    </div>
  );
}
