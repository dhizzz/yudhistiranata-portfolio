"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

interface PortraitProps {
  sizes: string;
  preload?: boolean;
  className?: string;
}

/*
 * The studio photo has a white backdrop. Multiplying it onto the portrait ground
 * turns that white into the page's paper colour (or a cream print card in dark mode),
 * so the portrait reads as printed on the page rather than pasted in a box.
 * It enters with the same top-down print wipe as the project screenshots.
 */
export function Portrait({ sizes, preload, className = "" }: PortraitProps) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <figure className={className}>
      <motion.div
        initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative isolate aspect-4/5 overflow-hidden bg-portrait"
      >
        <Image
          src="/portrait.jpg"
          alt={t.meta.portraitAlt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top mix-blend-multiply"
        />
      </motion.div>
      <figcaption className="flex items-baseline justify-between gap-4 border-t border-ink pt-2 font-mono text-xs text-ink-muted">
        <span className="text-ink">Yudhistira Nata</span>
        <span>{t.meta.portraitRole}</span>
      </figcaption>
    </figure>
  );
}
