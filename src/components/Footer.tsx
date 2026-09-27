"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { contactChannels, isChannelReady } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const social = contactChannels.filter(
    (c) => (c.key === "github" || c.key === "linkedin") && isChannelReady(c)
  );

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-2xl">Yudhistira Nata</p>
          <p className="mt-2 text-sm text-ink-muted">
            &copy; {year}. {t.footer.line}
          </p>
          {social.length > 0 && (
            <ul className="mt-2 flex gap-x-5 text-sm">
              {social.map((channel) => (
                <li key={channel.key}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-1 text-ink-muted transition-colors hover:text-ink"
                  >
                    {t.contact[channel.key]}
                    <span aria-hidden>↗</span>
                    <span className="sr-only">{t.home.newTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#main"
            className="inline-flex h-11 items-center text-ink-muted transition-colors hover:text-ink"
          >
            {t.footer.top}
          </a>
        </nav>
      </div>
    </footer>
  );
}
