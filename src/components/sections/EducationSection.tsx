/**
 * Education and certifications section component
 */
import type { ReactElement } from "react";
import { GraduationCap } from "lucide-react";
import type { Schooling, Certification } from "@/types/profile";

type EducationSectionProps = {
  education: Schooling[];
  certifications: Certification[];
  languages: string[];
};

export default function EducationSection({
  education,
  certifications,
  languages,
}: EducationSectionProps): ReactElement {
  return (
    <section id="formacion" className="space-y-10">
      <header className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-accent" />
        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Formación & Certificaciones</h2>
          <p className="text-sm text-muted">Aprendizaje continuo para liderar con visión técnica</p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="card-surface glass-border rounded-3xl p-8">
          <h3 className="text-lg font-semibold text-primary">Educación</h3>
          <div className="mt-5 space-y-4 text-sm text-secondary">
            {education.map((item) => (
              <div key={item.title}>
                <p className="font-medium text-primary">{item.title}</p>
                <p className="text-secondary">{item.institution}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{item.span}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card-surface glass-border rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-primary">Certificaciones</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary">
              {certifications.map((certification) => (
                <li key={certification.name} className="flex items-start gap-3">
                  <span className="bullet-dot" />
                  <div>
                    <p className="font-medium text-primary">{certification.name}</p>
                    {certification.issuer ? (
                      <p className="text-xs uppercase tracking-[0.3em] text-muted">{certification.issuer}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface glass-border rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-primary">Idiomas</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {languages.map((language) => (
                <li key={language} className="flex items-start gap-2">
                  <span className="bullet-dot" />
                  <span>{language}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
