"use client";

/**
 * Skills section component displaying technical competencies as cards
 */
import type { ReactElement } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";

export default function SkillsSection(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="habilidades">
      <h2 className="section-heading">{t.sections.skills}</h2>
      
      <div className="space-y-6">
        {t.skillsData.map(({ category, items }) => (
          <div key={category}>
            <h3 className="mb-4 text-base font-bold text-primary">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-sidebar-bg px-4 py-2 text-sm font-medium text-secondary shadow-sm transition-shadow hover:shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
