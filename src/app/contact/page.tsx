"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { contactChannels, isChannelReady } from "@/data/site";

export default function ContactPage() {
  const { t } = useLanguage();
  const anyReady = contactChannels.some(isChannelReady);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <FadeIn className="grid gap-6 border-b-2 border-ink pt-14 pb-12 sm:pt-20 sm:pb-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs text-ink-muted">{t.contact.eyebrow}</p>
          <h1 className="font-display mt-4 text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] text-balance">
            {t.contact.title}
          </h1>
        </div>
        <p className="max-w-sm leading-relaxed text-ink-muted lg:col-span-4">{t.contact.subtitle}</p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <ul>
          {contactChannels.map((channel) => {
            const ready = isChannelReady(channel);
            const external = channel.key !== "email";
            const label = (
              <span className="font-mono text-xs text-ink-muted sm:w-40 sm:shrink-0">
                {t.contact[channel.key]}
              </span>
            );

            return (
              <li key={channel.key} className="border-b border-rule">
                {ready ? (
                  <a
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    {label}
                    <span className="font-display min-w-0 wrap-break-word text-2xl transition-colors group-hover:text-accent sm:text-4xl">
                      {channel.value}
                    </span>
                    {external && (
                      <>
                        <span aria-hidden className="hidden text-ink-muted sm:ml-auto sm:inline">
                          ↗
                        </span>
                        <span className="sr-only">{t.home.newTab}</span>
                      </>
                    )}
                  </a>
                ) : (
                  <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-6">
                    {label}
                    <span className="font-display text-2xl text-ink-muted italic sm:text-4xl">
                      {t.contact.pending}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </FadeIn>

      {!anyReady && (
        <FadeIn delay={0.12} className="mt-12 flex flex-col gap-6 border border-rule bg-paper-raised p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl leading-relaxed text-ink-muted">{t.contact.pendingNote}</p>
          <Link
            href="/work"
            className="inline-flex h-12 shrink-0 items-center justify-center bg-ink px-6 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            {t.contact.pendingCta}
          </Link>
        </FadeIn>
      )}
    </div>
  );
}
