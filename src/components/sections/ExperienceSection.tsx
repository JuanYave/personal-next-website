/**
 * Experience section component displaying work history
 */
import type { ReactElement } from "react";
import { Briefcase } from "lucide-react";
import type { Experience } from "@/types/profile";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps): ReactElement {
  return (
    <section id="experiencia" className="space-y-10">
      <header className="flex items-center gap-3">
        <Briefcase className="h-8 w-8 text-accent" />
        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Experiencia</h2>
          <p className="text-sm text-muted">Liderazgo y entrega end-to-end en plataformas de misión crítica</p>
        </div>
      </header>

      <div className="grid gap-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}-${experience.period}`}
            className="card-surface glass-border rounded-3xl p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted">{experience.company}</p>
                <h3 className="text-xl font-semibold text-primary">{experience.role}</h3>
              </div>
              <div className="text-right text-sm text-muted">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-secondary">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
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
