"use client";

import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { padNumber } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies";

function Chapter({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <h3 className="flex items-baseline gap-3 border-t border-ink pt-4">
        <span className="font-mono text-xs text-ink-muted">{padNumber(number)}</span>
        <span className="font-display text-2xl">{title}</span>
      </h3>
      <div className="mt-5">{children}</div>
    </FadeIn>
  );
}

// Reads like a short article: the context opens in large serif as the story's lead,
// the rest runs in body copy, and the feature list is a numbered ledger.
export function CaseStudyBody({ study }: { study: CaseStudy }) {
  const { t, locale } = useLanguage();

  return (
    <section className="grid gap-12 border-b border-rule py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <FadeIn className="self-start lg:sticky lg:top-24 lg:col-span-4">
        <h2 className="font-display text-4xl sm:text-5xl">{t.project.caseTitle}</h2>
        <h3 className="mt-8 font-mono text-xs text-ink-muted">{t.project.stackLabel}</h3>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {study.stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </FadeIn>

      <div className="space-y-14 lg:col-span-7 lg:col-start-6">
        <Chapter number={1} title={t.project.chapterContext}>
          <p className="font-display text-2xl leading-snug text-pretty sm:text-[1.7rem]">
            {study.context[locale]}
          </p>
        </Chapter>

        <Chapter number={2} title={t.project.chapterApproach}>
          <p className="text-lg leading-relaxed text-ink-muted">{study.approach[locale]}</p>
        </Chapter>

        <Chapter number={3} title={t.project.chapterBuilt}>
          <ol>
            {study.features[locale].map((feature, i) => (
              <li
                key={feature}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-rule py-3 leading-relaxed"
              >
                <span className="font-mono text-xs leading-7 text-ink-muted">{padNumber(i + 1)}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </Chapter>

        <Chapter number={4} title={t.project.chapterOutcome}>
          <p className="text-lg leading-relaxed">{study.outcome[locale]}</p>
        </Chapter>
      </div>
    </section>
  );
}
