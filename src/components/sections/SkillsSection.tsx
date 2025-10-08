/**
 * Skills section component displaying technical competencies
 */
import type { ReactElement } from "react";
import { Award } from "lucide-react";
import type { SkillCategory } from "@/types/profile";

type SkillsSectionProps = {
  skills: SkillCategory[];
};

export default function SkillsSection({ skills }: SkillsSectionProps): ReactElement {
  return (
    <section id="habilidades" className="space-y-10">
      <header className="flex items-center gap-3">
        <Award className="h-8 w-8 text-accent" />
        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Habilidades clave</h2>
          <p className="text-sm text-muted">Stacks y prácticas que domino para crear soluciones robustas</p>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ category, items }) => (
          <div key={category} className="card-surface glass-border flex flex-col gap-3 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-primary">{category}</h3>
            <ul className="space-y-2 text-sm text-secondary">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="bullet-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
