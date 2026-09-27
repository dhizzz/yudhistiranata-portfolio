"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { FadeIn } from "@/components/FadeIn";
import { certifications, type Certification } from "@/data/certifications";

function formatMonth(value: string, locale: "en" | "id") {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

export function Certifications() {
  const { t, locale } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [viewing, setViewing] = useState<Certification | null>(null);

  const open = (cert: Certification) => setViewing(cert);

  // Open only after the image has rendered, so focus lands on the Close button inside.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (viewing && dialog && !dialog.open) dialog.showModal();
  }, [viewing]);
  const close = () => dialogRef.current?.close();

  return (
    <section className="border-t-2 border-ink pt-6 pb-14 lg:pb-20">
      <FadeIn>
        <h2 className="font-display text-4xl sm:text-5xl">{t.about.certTitle}</h2>
      </FadeIn>

      <ul className="mt-10 border-t border-ink">
        {certifications.map((cert) => {
          const facts = [
            { term: t.about.certIssued, value: formatMonth(cert.issued, locale) },
            ...(cert.expires ? [{ term: t.about.certExpires, value: formatMonth(cert.expires, locale) }] : []),
            ...(cert.credentialId
              ? [{ term: t.about.certCredentialId, value: cert.credentialId, mono: true }]
              : []),
          ];
          return (
            <li key={cert.title} className="border-b border-rule">
              <FadeIn className="grid gap-6 py-7 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <p className="font-mono text-xs text-ink-muted">{cert.issuer}</p>
                  <h3 className="font-display mt-2 text-2xl sm:text-3xl">{cert.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">{cert.summary[locale]}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-6">
                    {cert.image && (
                      <button
                        type="button"
                        onClick={() => open(cert)}
                        className="inline-flex h-11 items-center text-sm font-medium underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
                      >
                        {t.about.certView}
                      </button>
                    )}
                    <a
                      href={cert.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                    >
                      {cert.link.kind === "verify" ? t.about.certVerify : t.about.certCourse}
                      <span aria-hidden>↗</span>
                      <span className="sr-only">{t.home.newTab}</span>
                    </a>
                  </div>
                </div>
                <dl className="self-start border-t border-ink text-sm lg:col-span-4 lg:col-start-9">
                  {facts.map((fact) => (
                    <div key={fact.term} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3">
                      <dt className="font-mono text-xs leading-5 text-ink-muted">{fact.term}</dt>
                      <dd className={fact.mono ? "font-mono text-xs leading-5 break-all" : ""}>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            </li>
          );
        })}
      </ul>

      {/* Native <dialog>: Escape closes it and focus returns to the button that opened it. */}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onClose={() => setViewing(null)}
        aria-label={viewing ? `${t.about.certImageAlt} ${viewing.title}` : undefined}
        className="m-auto w-[calc(100%-2rem)] max-w-[34rem] bg-paper p-0 text-ink backdrop:bg-black/70"
      >
        {viewing?.image && (
          <figure>
            <div className="flex items-center justify-between gap-4 border-b border-rule px-4 py-2">
              <figcaption className="min-w-0 truncate font-mono text-xs text-ink-muted">
                {viewing.issuer} · {viewing.title}
              </figcaption>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 shrink-0 items-center px-2 text-sm font-medium"
              >
                {t.about.certClose}
              </button>
            </div>
            <div className="bg-white p-3">
              <Image
                src={viewing.image.src}
                alt={`${t.about.certImageAlt} ${viewing.title}, ${viewing.issuer}`}
                width={viewing.image.width}
                height={viewing.image.height}
                className="mx-auto h-auto w-full max-w-[484px]"
              />
            </div>
          </figure>
        )}
      </dialog>
    </section>
  );
}
