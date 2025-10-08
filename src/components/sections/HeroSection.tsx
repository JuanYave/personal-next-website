/**
 * Hero section component displaying main introduction and contact information
 */
import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowDownRight, Briefcase, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-toggle";
import type { ContactInfo, NavLink } from "@/types/profile";

type HeroSectionProps = {
  navLinks: NavLink[];
  contactInfo: ContactInfo;
};

export default function HeroSection({ navLinks, contactInfo }: HeroSectionProps): ReactElement {
  return (
    <header className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-muted">
          Tech Lead · Senior Backend Engineer
        </p>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <nav className="flex flex-wrap gap-3 text-sm text-secondary">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-subtle px-4 py-2 text-secondary transition hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        <div className="card-surface glass-border rounded-3xl p-10 shadow-lg shadow-accent">
          <p className="mb-4 text-sm font-medium text-accent">Hola, soy</p>
          <h1 className="mb-6 text-4xl font-semibold text-primary sm:text-5xl">Juan Herrera</h1>
          <p className="mb-6 text-lg text-secondary">
            Ingeniero en Tecnologías Computacionales enfocado en construir plataformas escalables,
            liderar equipos de alto desempeño y entregar productos resilientes sobre AWS, Python y Java.
          </p>
          <p className="text-sm leading-6 text-muted">
            Combino liderazgo técnico, cultura DevOps e infraestructura como código para acelerar la entrega
            de valor, optimizar costos e impulsar el crecimiento de equipos. He guiado transformaciones de
            monolitos a microservicios, elevando observabilidad y confiabilidad en entornos de misión crítica.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] transition hover:bg-[color:var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              <Briefcase className="h-4 w-4" />
              Ver experiencia
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-subtle px-6 py-3 text-sm font-semibold text-primary transition hover:border-[color:var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              <ArrowDownRight className="h-4 w-4" />
              Conectemos
            </a>
          </div>
        </div>

        <aside className="card-surface glass-border flex w-full flex-col gap-6 rounded-3xl p-10 text-sm text-secondary">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Ubicación</p>
            <p className="mt-2 flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4 text-accent" />
              {contactInfo.location}
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <Link
                href={`mailto:${contactInfo.email}`}
                className="transition hover:text-primary hover:underline"
              >
                {contactInfo.email}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <Link
                href={`tel:${contactInfo.phone}`}
                className="transition hover:text-primary hover:underline"
              >
                {contactInfo.phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-accent" />
              <Link
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary hover:underline"
              >
                LinkedIn profesional
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
