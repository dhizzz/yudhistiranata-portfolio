"use client";

import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/lib/i18n/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {/* "user" turns transform animations off when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
