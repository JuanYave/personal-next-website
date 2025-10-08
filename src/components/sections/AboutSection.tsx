/**
 * About section component with personal description
 */
import type { ReactElement } from "react";

export default function AboutSection(): ReactElement {
  return (
    <section id="sobre-mi" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-[color:var(--accent)]" />
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Sobre mí</h2>
      </div>
      <div className="grid gap-6 text-base leading-7 text-secondary lg:grid-cols-2">
        <p>
          Con más de una década construyendo productos digitales, he liderado la evolución tecnológica de
          organizaciones financieras en crecimiento. Me apasiona acompañar a los equipos en la adopción de
          prácticas DevOps, observabilidad y automatización que potencien la entrega continua de valor.
        </p>
        <p>
          Mi enfoque combina visión estratégica con ejecución disciplinada: establezco estándares técnicos,
          mentorizo ingenieros y alineo decisiones de arquitectura con objetivos de negocio. Siempre busco
          generar impacto medible y crear experiencias excepcionales para usuarios y equipos.
        </p>
      </div>
    </section>
  );
}
