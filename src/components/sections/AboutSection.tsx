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
    <section id="sobre-mi">
      <h2 className="section-heading">{t.about.title}</h2>
      <div className="space-y-4 text-secondary">
        {t.about.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
