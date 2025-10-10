"use client";

/**
 * Education and certifications section component
 */
import type { ReactElement } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";

export default function EducationSection(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="formacion">
      <h2 className="section-heading">{t.sections.education}</h2>
      
      <div className="space-y-8">
        {/* Education */}
        <div>
          {t.educationData.map((item) => (
            <div key={item.title} className="mb-4 border-b border-border pb-4 last:border-0">
              <h3 className="font-bold text-primary">{item.title}</h3>
              <div className="mt-1 text-sm text-secondary">{item.institution}</div>
              <div className="mt-1 text-xs text-muted">{item.span}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-4 text-base font-bold text-primary">{t.sections.certifications}</h3>
          <ul className="space-y-2">
            {t.certifications.map((certification) => (
              <li key={certification.name} className="flex gap-2 text-sm text-secondary">
                <span className="bullet-dot" />
                <span>{certification.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="mb-4 text-base font-bold text-primary">{t.sections.languages}</h3>
          <ul className="space-y-2">
            {t.languagesData.map((lang) => (
              <li key={lang} className="flex gap-2 text-sm text-secondary">
                <span className="bullet-dot" />
                <span>{lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
