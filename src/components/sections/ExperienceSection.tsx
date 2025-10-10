"use client";

/**
 * Experience section component displaying work history
 */
import type { ReactElement } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";

export default function ExperienceSection(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experiencia">
      <h2 className="section-heading">{t.sections.experience}</h2>
      
      <div className="space-y-8">
        {t.experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}-${experience.period}`}
            className="relative border-l-2 border-border pl-6"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent bg-sidebar-bg"></div>
            
            <div className="mb-3">
              <h3 className="text-lg font-bold text-primary">{experience.role}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                {experience.website ? (
                  <Link
                    href={`https://${experience.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    {experience.company}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ) : (
                  <span className="font-medium text-accent">{experience.company}</span>
                )}
                <span className="text-muted">•</span>
                <span className="text-muted">{experience.period}</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-secondary">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2">
                  <span className="bullet-dot" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
