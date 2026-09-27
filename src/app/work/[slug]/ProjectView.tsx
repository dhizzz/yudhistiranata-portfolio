"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { ProjectShot } from "@/components/ProjectShot";
import { CaseStudyBody } from "@/components/CaseStudyBody";
import { caseStudies } from "@/data/case-studies";
import { categories, getProjectNumber, padNumber, projects } from "@/data/projects";

export function ProjectView({ slug }: { slug: string }) {
  const { t, locale } = useLanguage();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const study = caseStudies[slug];

  const meta = [
    { term: t.project.category, value: categories[project.category][locale] },
    { term: t.project.domain, value: project.domain, mono: true },
    {
      term: t.project.status,
      value: project.status === "live" ? t.project.live : t.project.offline,
    },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <nav className="border-b border-rule py-3" aria-label="Breadcrumb">
        <Link
          href="/work"
          className="inline-flex h-11 items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span>
          {t.project.back}
        </Link>
      </nav>

      <header className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
        <FadeIn className="lg:col-span-8">
          <p className="font-mono text-xs text-ink-muted">
            {t.project.number} {padNumber(getProjectNumber(project.slug))} / {padNumber(projects.length)}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] text-balance">
            {project.name}
          </h1>
          {project.highlight && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {project.highlight[locale]}
            </p>
          )}
        </FadeIn>

        <FadeIn delay={0.1} className="self-end lg:col-span-4">
          <dl className="border-t border-ink text-sm">
            {meta.map((item) => (
              <div key={item.term} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-3">
                <dt className="font-mono text-xs leading-5 text-ink-muted">{item.term}</dt>
                <dd className={`min-w-0 wrap-break-word ${item.mono ? "font-mono text-xs leading-5" : ""}`}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          {project.status === "live" ? (
            <a
              href={`https://${project.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              {t.project.visitSite}
              <span aria-hidden>↗</span>
              <span className="sr-only">{t.home.newTab}</span>
            </a>
          ) : (
            <p className="mt-6 border border-rule bg-paper-raised p-4 text-sm leading-relaxed text-ink-muted">
              {t.project.offlineNote}
            </p>
          )}
        </FadeIn>
      </header>

      {/* Offline projects already explain themselves in the note above; no empty frame. */}
      {project.status === "live" && (
        <ProjectShot project={project} preload sizes="(min-width: 1152px) 1088px, 100vw" />
      )}

      {study ? (
        <CaseStudyBody study={study} />
      ) : (
        <section className="grid gap-4 border-b border-rule py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:col-span-4">{t.project.caseTitle}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted lg:col-span-7 lg:col-start-6">
            {t.project.caseNote}
          </p>
        </section>
      )}

      <nav aria-label="Project" className="grid grid-cols-2 border-b border-rule">
        <Link
          href={`/work/${previous.slug}`}
          className="group flex flex-col gap-1 border-r border-rule py-6 pr-4"
        >
          <span className="font-mono text-xs text-ink-muted">
            <span aria-hidden>← </span>
            {t.project.previous}
          </span>
          <span className="font-display text-xl transition-colors group-hover:text-accent sm:text-2xl">
            {previous.name}
          </span>
        </Link>
        <Link href={`/work/${next.slug}`} className="group flex flex-col items-end gap-1 py-6 pl-4 text-right">
          <span className="font-mono text-xs text-ink-muted">
            {t.project.next}
            <span aria-hidden> →</span>
          </span>
          <span className="font-display text-xl transition-colors group-hover:text-accent sm:text-2xl">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  );
}
