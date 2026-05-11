"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function ContactForm() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const headlineLines = t(content.contact.headline).split("\n");

  return (
    <section
      id="contact"
      ref={ref}
      className="py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — copy */}
          <div className="lg:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-5"
            >
              {t(content.contact.eyebrow)}
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
                  {line}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[var(--muted)] leading-relaxed text-base mb-10"
            >
              {t(content.contact.sub)}
            </motion.p>

            {/* Quick contact info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="space-y-4"
            >
              <InfoRow
                icon={
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 1.5A5.5 5.5 0 1 0 13.5 7 5.5 5.5 0 0 0 8 1.5zM1 7a7 7 0 1 1 14 0A7 7 0 0 1 1 7z" fill="currentColor"/>
                    <path d="M7.5 4v3.25l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                }
                label={content.footer.hours ? t(content.footer.hours) : ""}
              />
              <InfoRow
                icon={
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M4.5 1.5h2l1 3-1.5 1a7 7 0 0 0 3.5 3.5l1-1.5 3 1v2a1 1 0 0 1-1 1A10.5 10.5 0 0 1 3.5 2.5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                }
                label={content.footer.phone}
              />
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 text-2xl">
                  ✓
                </span>
                <h3 className="text-xl font-bold text-[var(--foreground)]">Message sent!</h3>
                <p className="text-[var(--muted)] text-sm max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs text-[var(--primary)] underline underline-offset-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-[800px] mx-auto space-y-5"
              noValidate
            >
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label={t(content.contact.fields.name)}
                  name="name"
                  type="text"
                  placeholder={t(content.contact.placeholders.name)}
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label={t(content.contact.fields.phone)}
                  name="phone"
                  type="tel"
                  placeholder={t(content.contact.placeholders.phone)}
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <Field
                label={t(content.contact.fields.email)}
                name="email"
                type="email"
                placeholder={t(content.contact.placeholders.email)}
                value={formState.email}
                onChange={handleChange}
                required
              />

              {/* Service select */}
              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                  {t(content.contact.fields.service)}
                </label>
                <select
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">—</option>
                  {content.contact.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt.en}>
                      {t(opt)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                  {t(content.contact.fields.message)}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t(content.contact.placeholders.message)}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                />
              </div>

              {status === "error" && errorMsg && (
                <p className="text-sm text-red-500 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className="w-full py-3.5 rounded-full bg-[var(--primary)] text-white font-semibold text-sm hover:bg-[var(--primary-hover)] transition-colors shadow-md shadow-black/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : t(content.contact.fields.submit)}
              </motion.button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
        {label}
        {required && <span className="text-[var(--primary)] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
      />
    </div>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-[var(--muted)]">
      <span className="flex-shrink-0 mt-0.5 text-[var(--primary)]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
