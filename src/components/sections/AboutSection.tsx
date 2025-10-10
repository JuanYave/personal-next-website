"use client";

/**
 * About section component with personal description
 */
import type { ReactElement } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";

export default function AboutSection(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sobre-mi" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-[color:var(--accent)]" />
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{t.about.title}</h2>
      </div>
      <div className="grid gap-6 text-base leading-7 text-secondary lg:grid-cols-2">
        {t.about.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
