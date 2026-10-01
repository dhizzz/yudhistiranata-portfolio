"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { Portrait } from "@/components/Portrait";
import { Certifications } from "@/components/Certifications";
import {
  categories,
  categoryOrder,
  countByCategory,
  padNumber,
} from "@/data/projects";
import { stackGroups } from "@/data/site";

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const facts = [
    { term: t.about.factFocus, value: t.about.factFocusValue },
    { term: t.about.factStack, value: "Next.js, React, TypeScript" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <header className="grid gap-10 border-b-2 border-ink pt-14 pb-12 sm:pt-20 sm:pb-16 lg:grid-cols-12 lg:items-end lg:gap-8">
        <FadeIn className="lg:col-span-8">
          <p className="font-mono text-xs text-ink-muted">{t.about.eyebrow}</p>
          <h1 className="font-display mt-4 text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.06] text-balance">
            {t.about.title}
          </h1>
        </FadeIn>
        <Portrait
          preload
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 80vw"
          className="w-full max-w-xs lg:col-span-4 lg:max-w-none"
        />
      </header>

      {/* Story in a reading column; the facts sit beside it as reference, education last. */}
      <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <FadeIn className="space-y-6 lg:col-span-7">
          {t.about.story.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-accent"
                  : "text-lg leading-relaxed text-ink-muted"
              }
            >
              {paragraph}
            </p>
          ))}
          <Link
            href="/contact"
            className="!mt-10 inline-flex h-12 items-center bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            {t.about.cta}
          </Link>
        </FadeIn>

        <FadeIn delay={0.05} className="self-start lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-ink text-sm">
            {facts.map((fact) => (
              <div key={fact.term} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-3">
                <dt className="font-mono text-xs leading-5 text-ink-muted">{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>

      {/* Principles, each backed by a case study rather than asserted. */}
      <section className="border-t-2 border-ink pt-6 pb-14 lg:pb-20">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl">{t.about.principlesTitle}</h2>
        </FadeIn>
        <ol className="mt-10 grid gap-x-8 sm:grid-cols-2">
          {t.about.principles.map((principle, i) => (
            <li key={principle.slug} className="border-t border-rule py-6">
              <FadeIn delay={i * 0.04}>
                <span className="font-mono text-xs text-ink-muted">{padNumber(i + 1)}</span>
                <h3 className="font-display mt-2 text-2xl">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{principle.body}</p>
                <Link
                  href={`/work/${principle.slug}`}
                  className="mt-3 inline-flex h-11 items-center text-sm font-medium underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
                >
                  {t.about.seeExample}
                </Link>
              </FadeIn>
            </li>
          ))}
        </ol>
      </section>

      <Certifications />

      <div className="grid gap-12 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-8">
        <FadeIn className="lg:col-span-6">
          <h2 className="font-mono text-xs text-ink-muted">{t.about.stackTitle}</h2>
          <dl className="mt-4 border-t border-ink">
            {stackGroups.map((group) => (
              <div key={group.title.en} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-4">
                <dt className="font-display text-lg">{group.title[locale]}</dt>
                <dd className="leading-relaxed text-ink-muted">{group.tools.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.05} className="lg:col-span-5 lg:col-start-8">
          <h2 className="font-mono text-xs text-ink-muted">{t.about.workTitle}</h2>
          <ul className="mt-4 border-t border-ink">
            {categoryOrder
              .filter((c) => countByCategory(c) > 0)
              .map((category) => (
                <li key={category} className="border-b border-rule">
                  <Link
                    href={`/work?category=${category}`}
                    className="group flex min-h-12 items-baseline justify-between gap-4 py-3"
                  >
                    <span className="transition-colors group-hover:text-accent">
                      {categories[category][locale]}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {padNumber(countByCategory(category))} {t.about.projectsLabel}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
