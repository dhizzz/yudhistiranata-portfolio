"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import type { Project } from "@/data/projects";

export function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6">
      <Link
        href={`/work/${project.slug}`}
        className="inline-flex h-11 items-center text-sm font-medium underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
      >
        {t.home.readCase}
      </Link>
      {project.status === "live" && (
        <a
          href={`https://${project.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          {t.home.visitSite}
          {/* ↗ is reserved for links that leave this site. */}
          <span aria-hidden>↗</span>
          <span className="sr-only">{t.home.newTab}</span>
        </a>
      )}
    </div>
  );
}
