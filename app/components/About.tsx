"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const headlineLines = t(content.about.headline).split("\n");

  return (
    <section
      id="about"
      ref={ref}
      className="py-8 md:py-16 bg-[var(--surface)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]"
            >
              {t(content.about.eyebrow)}
            </motion.p>

            <div className="mb-6">
              {headlineLines.map((line, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)]"
                >
                  {i === 1 ? (
                    <span className="text-[var(--primary)]">{line}</span>
                  ) : (
                    line
                  )}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-[var(--muted)] leading-relaxed text-base mb-8"
            >
              {t(content.about.philosophy)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-sm text-[var(--muted)] flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--primary)] inline-block" aria-hidden />
                {t(content.about.founded)}
              </p>
              <p className="text-sm text-[var(--muted)] flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--primary)] inline-block" aria-hidden />
                {t(content.about.rebranded)}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
