"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { ProjectShot } from "@/components/ProjectShot";
import {
  categories,
  categoryOrder,
  countByCategory,
  getProjectNumber,
  padNumber,
  projects,
  type ProjectCategory,
} from "@/data/projects";

function isCategory(value: string | null): value is ProjectCategory {
  return value !== null && (categoryOrder as string[]).includes(value);
}

// Reads the filter from the URL so category links from other pages land pre-filtered.
export function WorkArchive() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get("category");
  const active: ProjectCategory | "all" = isCategory(param) ? param : "all";

  const setActive = (next: ProjectCategory | "all") => {
    const url = next === "all" ? pathname : `${pathname}?category=${next}`;
    router.replace(url, { scroll: false });
  };

  return <WorkArchiveView active={active} onSelect={setActive} />;
}

// Also rendered as the Suspense fallback, so the prerendered HTML already lists every project.
export function WorkArchiveView({
  active,
  onSelect,
}: {
  active: ProjectCategory | "all";
  onSelect?: (next: ProjectCategory | "all") => void;
}) {
  const { t, locale } = useLanguage();
  const setActive = (next: ProjectCategory | "all") => onSelect?.(next);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
  const tabs: (ProjectCategory | "all")[] = [
    "all",
    ...categoryOrder.filter((c) => countByCategory(c) > 0),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <FadeIn className="grid gap-6 border-b-2 border-ink pt-14 pb-8 sm:pt-20 lg:grid-cols-12 lg:items-end">
        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-none lg:col-span-7">
          {t.work.title}
        </h1>
        <p className="max-w-md leading-relaxed text-ink-muted lg:col-span-5">{t.work.intro}</p>
      </FadeIn>

      <div
        role="group"
        aria-label={t.work.filterLabel}
        className="flex flex-wrap gap-x-6 border-b border-rule"
      >
        {tabs.map((tab) => {
          const selected = active === tab;
          const count = tab === "all" ? projects.length : countByCategory(tab);
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={selected}
              className={`relative inline-flex h-12 shrink-0 items-center gap-2 text-sm whitespace-nowrap transition-colors ${
                selected ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab === "all" ? t.work.all : categories[tab][locale]}
              <span className="font-mono text-xs text-ink-muted">{padNumber(count)}</span>
              {selected && (
                <motion.span
                  layoutId="filter-underline"
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-xs text-ink-muted" aria-live="polite">
        {t.work.showing} {padNumber(filtered.length)} {t.work.of} {padNumber(projects.length)}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 border border-rule bg-paper-raised px-6 py-16 text-center">
          <p className="font-display text-2xl">{t.work.emptyTitle}</p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="mt-6 inline-flex h-11 items-center border border-ink px-5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            {t.work.emptyAction}
          </button>
        </div>
      ) : (
        // A uniform grid on purpose: in the full archive every project carries equal weight.
        <motion.ul layout className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <ProjectShot
                    project={project}
                    // The first row sits above the fold, so it loads eagerly for a faster first paint.
                    preload={index < 3}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="mt-4 flex items-baseline gap-3 border-b border-rule pb-4">
                    <span className="font-mono text-xs text-ink-muted">
                      {padNumber(getProjectNumber(project.slug))}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-2xl transition-colors group-hover:text-accent">
                        {project.name}
                      </h2>
                      <p className="mt-1 text-sm text-ink-muted">{categories[project.category][locale]}</p>
                      <p className="mt-1 truncate font-mono text-xs text-ink-muted">
                        {project.domain}
                        {project.status === "offline" && ` · ${t.project.offline}`}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}
