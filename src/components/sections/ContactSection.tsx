/**
 * Contact section component with call-to-action
 */
import type { ReactElement } from "react";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import type { ContactInfo } from "@/types/profile";

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

export default function ContactSection({ contactInfo }: ContactSectionProps): ReactElement {
  return (
    <section id="contacto" className="card-surface glass-border rounded-3xl p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-muted">Construyamos juntos</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            ¿Listo para hablar de tu próximo reto?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-secondary">
            Estoy disponible para liderar iniciativas tecnológicas, acelerar entregas backend o apoyar a equipos
            en la adopción de prácticas DevOps e infraestructura escalable. Escríbeme y diseñemos el plan ideal.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-secondary">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-6 py-3 font-semibold text-[color:var(--accent-foreground)] transition hover:bg-[color:var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Mail className="h-4 w-4" />
            Enviar correo
          </Link>
          <Link
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-subtle px-6 py-3 font-semibold text-primary transition hover:border-[color:var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Linkedin className="h-4 w-4" />
            Conectemos en LinkedIn
          </Link>
          <Link
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-3 rounded-full border border-subtle px-6 py-3 font-semibold text-primary transition hover:border-[color:var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Phone className="h-4 w-4" />
            Llamar por teléfono
          </Link>
        </div>
      </div>
    </section>
  );
}
