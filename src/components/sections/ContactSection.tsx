"use client";

/**
 * Contact section component with call-to-action
 */
import type { ReactElement } from "react";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";

export default function ContactSection(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contacto" className="card-surface glass-border rounded-3xl p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-muted">{t.contact.subtitle}</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-secondary">
            {t.contact.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-secondary">
          <Link
            href={`mailto:${t.contactInfo.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-6 py-3 font-semibold text-[color:var(--accent-foreground)] transition hover:bg-[color:var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Mail className="h-4 w-4" />
            {t.contact.sendEmail}
          </Link>
          <Link
            href={t.contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-subtle px-6 py-3 font-semibold text-primary transition hover:border-[color:var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Linkedin className="h-4 w-4" />
            {t.contact.connectLinkedIn}
          </Link>
          <Link
            href={`tel:${t.contactInfo.phone}`}
            className="inline-flex items-center gap-3 rounded-full border border-subtle px-6 py-3 font-semibold text-primary transition hover:border-[color:var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            <Phone className="h-4 w-4" />
            {t.contact.callPhone}
          </Link>
        </div>
      </div>
    </section>
  );
}
