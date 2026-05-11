"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function Consultant() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const headlineLines = t(content.consultant.headline).split("\n");

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            {/* Decorative circle */}
            <div
              aria-hidden
              className="absolute -top-8 -left-8 w-64 h-64 rounded-full opacity-20"
              style={{ background: "var(--primary)" }}
            />
            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex items-end justify-center">
              {/* Will be replaced with real photo */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 text-[var(--border)]">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" aria-hidden>
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="text-xs text-[var(--muted)]">Photo coming soon</p>
              </div>
              {/* Name badge at bottom */}
              <div className="relative w-full bg-[var(--surface-2)] backdrop-blur-sm px-5 py-4 border-t border-[var(--border)]">
                <p className="font-bold text-[var(--foreground)] text-sm">{content.consultant.name}</p>
                <p className="text-xs text-[var(--primary)]">{t(content.consultant.title)}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-5"
            >
              {t(content.consultant.eyebrow)}
            </motion.p>

            <div className="mb-6">
              {headlineLines.map((line, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)]"
                >
                  {line}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[var(--muted)] leading-relaxed text-base mb-8"
            >
              {t(content.consultant.bio)}
            </motion.p>

            {/* Credentials */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="space-y-3"
            >
              {content.consultant.credentials.map((cred, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-[var(--foreground)]"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
                    aria-hidden
                  />
                  {t(cred)}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
