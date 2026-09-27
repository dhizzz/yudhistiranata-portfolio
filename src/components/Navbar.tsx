"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  const linkClass = (href: string) =>
    `relative inline-flex h-11 items-center text-sm transition-colors ${
      isActive(href) ? "text-ink" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-8"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-display inline-flex h-14 items-center text-lg font-medium sm:text-xl"
        >
          Yudhistira Nata
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={linkClass(link.href)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span aria-hidden className="absolute inset-x-0 bottom-2 h-0.5 bg-accent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center sm:border-l sm:border-rule sm:pl-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <ul className="flex items-center justify-around border-t border-rule sm:hidden">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${linkClass(link.href)} px-3`}
            >
              {link.label}
              {isActive(link.href) && (
                <span aria-hidden className="absolute inset-x-3 bottom-1.5 h-0.5 bg-accent" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
