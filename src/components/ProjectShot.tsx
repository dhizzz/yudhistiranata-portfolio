"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import type { Project } from "@/data/projects";

interface ProjectShotProps {
  project: Project;
  sizes: string;
  preload?: boolean;
  className?: string;
}

/*
 * The screenshot is the portfolio's evidence, so it gets the one signature motion:
 * a top-down "print" wipe the first time it scrolls into view. Hover only zooms slightly.
 */
export function ProjectShot({ project, sizes, preload, className = "" }: ProjectShotProps) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  // Observe the unclipped frame: a fully clipped element never registers as intersecting.
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { once: true, margin: "0px 0px -40px 0px" });

  const unavailable = project.status === "offline" || state === "error";

  return (
    <div
      ref={frameRef}
      className={`relative aspect-16/10 overflow-hidden border border-rule bg-shot ${className}`}
    >
      <motion.div
        initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
        animate={inView ? { clipPath: "inset(0 0 0% 0)" } : undefined}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute inset-0"
      >
        {unavailable ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="font-display text-2xl text-ink sm:text-3xl">{project.name}</span>
            <span className="font-mono text-xs text-ink-muted">
              {project.status === "offline" ? `${project.domain} · ${t.project.offline}` : t.project.previewUnavailable}
            </span>
          </div>
        ) : (
          <>
            {state === "loading" && (
              <span aria-hidden className="absolute inset-0 animate-pulse bg-shot" />
            )}
            <Image
              src={`/work/${project.slug}.jpg`}
              alt={`${t.project.screenshotAlt} ${project.name}`}
              fill
              sizes={sizes}
              preload={preload}
              onLoad={() => setState("ready")}
              onError={() => setState("error")}
              className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.025]"
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
