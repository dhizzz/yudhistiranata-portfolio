"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { ProjectShot } from "@/components/ProjectShot";
import { ProjectLinks } from "@/components/ProjectLinks";
import {
  categories,
  categoryOrder,
  getFeaturedProjects,
  padNumber,
  projects,
} from "@/data/projects";
import { stackGroups } from "@/data/site";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Home() {
  const { t, locale } = useLanguage();
  const [lead, ...rest] = getFeaturedProjects();
  const allTools = stackGroups.flatMap((g) => g.tools);

  return (
    <>
      {/* Hero: typography carries the page, the colophon on the right states only verifiable facts. */}
      <section className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex items-center justify-between border-b border-rule py-3 font-mono text-xs text-ink-muted">
          <span>{t.home.mastheadLeft}</span>
          <span>
            {t.home.mastheadRight} {new Date().getFullYear()}
          </span>
        </div>

        <div className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[clamp(2.9rem,7vw,5.75rem)] leading-[1.02] text-balance"
            >
              {t.home.heroBefore}{" "}
              {/* The invitation sits on its own line so the second sentence never splits. */}
              <em className="block text-accent">{t.home.heroAccent}</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              {t.home.heroIntro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#selected"
                className="inline-flex h-12 items-center bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                {t.home.heroPrimary}
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center border border-ink px-6 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                {t.home.heroSecondary}
              </Link>
            </motion.div>
          </div>

          <div className="self-end lg:col-span-4">
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="border-t border-ink text-sm"
            >
              {[
                { term: t.home.factFocus, value: t.home.factFocusValue },
                { term: t.home.factStack, value: "Next.js, React, TypeScript" },
              ].map((fact) => (
                <div
                  key={fact.term}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-rule py-3"
                >
                  <dt className="font-mono text-xs leading-5 text-ink-muted">
                    {fact.term}
                  </dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* Selected work: one full-width lead, then alternating asymmetric rows. */}
      <section
        id="selected"
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:pb-28"
      >
        <FadeIn className="grid gap-4 border-t-2 border-ink pt-6 lg:grid-cols-12">
          <h2 className="font-display text-4xl sm:text-5xl lg:col-span-5">
            {t.home.selectedTitle}
          </h2>
          <p className="max-w-xl leading-relaxed text-ink-muted lg:col-span-6 lg:col-start-7">
            {t.home.selectedNote}
          </p>
        </FadeIn>

        <article className="mt-12 sm:mt-16">
          <Link
            href={`/work/${lead.slug}`}
            className="group block"
            tabIndex={-1}
            aria-hidden
          >
            <ProjectShot
              project={lead}
              preload
              sizes="(min-width: 1152px) 1088px, 100vw"
            />
          </Link>
          <FadeIn className="mt-6 grid gap-4 lg:grid-cols-12">
            <div className="flex items-baseline gap-4 lg:col-span-5">
              <span className="font-mono text-sm text-ink-muted">01</span>
              <h3 className="font-display text-3xl sm:text-4xl">
                <Link
                  href={`/work/${lead.slug}`}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                >
                  {lead.name}
                </Link>
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-ink-muted">
                {categories[lead.category][locale]} ·{" "}
                <span className="whitespace-nowrap">{lead.domain}</span>
              </p>
              {lead.highlight && (
                <p className="mt-3 max-w-2xl text-lg leading-relaxed">
                  {lead.highlight[locale]}
                </p>
              )}
              <ProjectLinks project={lead} />
            </div>
          </FadeIn>
        </article>

        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {rest.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8"
              >
                <Link
                  href={`/work/${project.slug}`}
                  tabIndex={-1}
                  aria-hidden
                  className={`group block lg:col-span-7 lg:row-start-1 ${
                    flipped ? "lg:col-start-6" : "lg:col-start-1"
                  }`}
                >
                  <ProjectShot
                    project={project}
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </Link>
                <FadeIn
                  className={`lg:col-span-4 lg:row-start-1 ${flipped ? "lg:col-start-1" : "lg:col-start-9"}`}
                >
                  <span className="font-mono text-sm text-ink-muted">
                    {padNumber(i + 2)}
                  </span>
                  <h3 className="font-display mt-2 text-3xl">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="mt-2 font-mono text-xs text-ink-muted">
                    {categories[project.category][locale]} ·{" "}
                    <span className="whitespace-nowrap">{project.domain}</span>
                  </p>
                  {project.highlight && (
                    <p className="mt-4 leading-relaxed text-ink-muted">
                      {project.highlight[locale]}
                    </p>
                  )}
                  <ProjectLinks project={project} />
                </FadeIn>
              </article>
            );
          })}
        </div>

        <FadeIn className="mt-20 border-t border-rule pt-6 lg:mt-28">
          <Link
            href="/work"
            className="font-display group inline-flex min-h-11 items-baseline gap-3 text-2xl sm:text-3xl"
          >
            <span className="underline decoration-rule decoration-1 underline-offset-8 transition-colors group-hover:decoration-accent">
              {t.home.viewArchive}
            </span>
            <span className="font-mono text-sm text-ink-muted">
              {padNumber(projects.length)}
            </span>
          </Link>
        </FadeIn>
      </section>

      {/* What I build: a ledger of categories with the real project names in each. */}
      <section className="border-y border-rule bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <FadeIn className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <h2 className="font-display text-4xl sm:text-5xl">
              {t.home.buildTitle}
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-ink-muted">
              {t.home.buildNote}
            </p>
            <h3 className="mt-10 font-mono text-xs text-ink-muted">
              {t.home.stackTitle}
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed">
              {allTools.join(", ")}
            </p>
          </FadeIn>

          <ol className="border-t border-ink lg:col-span-8">
            {categoryOrder.map((category, i) => {
              const inCategory = projects.filter(
                (p) => p.category === category,
              );
              if (inCategory.length === 0) return null;
              return (
                <li key={category} className="border-b border-rule">
                  <Link
                    href={`/work?category=${category}`}
                    className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-6 sm:grid-cols-[3rem_1fr_auto]"
                  >
                    <span className="font-mono text-xs text-ink-muted">
                      {padNumber(i + 1)}
                    </span>
                    <span className="font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl">
                      {categories[category][locale]}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {padNumber(inCategory.length)}
                    </span>
                    <span className="col-start-2 col-end-4 leading-relaxed text-ink-muted">
                      {t.home.buildDescriptions[category]}
                    </span>
                    <span className="col-start-2 col-end-4 text-sm">
                      {inCategory.map((p) => p.name).join(", ")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Closing: the single inverted block on the page, so the invitation reads as the last word. */}
      <section className="on-ink bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 lg:py-28">
          <FadeIn>
            <h2 className="font-display max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] text-balance">
              {t.home.closingTitle}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">
              {t.home.closingBody}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-12 items-center bg-paper px-6 text-sm font-medium text-ink transition-opacity hover:opacity-85"
            >
              {t.home.closingCta}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
