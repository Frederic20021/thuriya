"use client";

import Image from "next/image";
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
    <section id="team" ref={ref} className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center py-4 bg-[var(--navy)]">
          {/* Section label */}
          <p className="text-center text-lg font-bold tracking-[0.2em] uppercase text-[var(--primary)] ">
            {t(content.nav.consultants)}
          </p>

          <div className="flex flex-col items-center md:flex-row gap-4 px-8 md:px-16">
            {/* Photo placeholder */}
            <div className="mx-auto rounded-3xl overflow-hidden items-end justify-center">
              <Image
                src="/ceo.jpg"
                alt="Consultant photo"
                width={200}
                height={50}
                className="object-contain rounded-t-full"
              ></Image>
              {/* Name badge at bottom */}
              <div className="relative w-full bg-white/10 backdrop-blur-sm px-5 py-4 border-t text-center border-white/20">
                <p className="font-bold text-white text-sm">
                  {content.consultant.name}
                </p>
                <p className="text-sm font-bold text-[var(--primary)]">
                  {t(content.consultant.title)}
                </p>
              </div>
            </div>
            {/* Right — content */}
            <div className="mx-auto px-6 lg:px-0 max-w-[650px]  py-8 md:py-16">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]"
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
                    className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white"
                  >
                    {line}
                  </motion.h2>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-white/70 leading-relaxed text-base mb-8"
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
                    className="flex items-center gap-3 text-sm text-white/90"
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
      </div>
    </section>
  );
}
