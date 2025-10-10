"use client";

/**
 * Sidebar component with profile information and contact details
 */
import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useLanguage } from "@/components/language/language-provider";
import { translations } from "@/data/translations";
import LanguageToggle from "@/components/language/language-toggle";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function Sidebar(): ReactElement {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <aside className="sidebar lg:overflow-y-auto">
      {/* Profile Header */}
      <div className="bg-[var(--sidebar-header-bg)] px-6 py-8 text-center lg:px-8">
        <div className="mb-4 inline-block h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="/images/profile.jpeg"
            alt="Juan José Herrera Sierra"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-[var(--sidebar-header-text)]">Juan José Herrera Sierra</h1>
        <p className="text-sm font-medium text-[var(--sidebar-header-text)] opacity-90">{t.hero.subtitle}</p>
      </div>

      {/* Navigation */}
      <nav className="mb-8 space-y-1 px-6 pt-6 lg:px-8">
        {t.navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-border hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="mb-8 space-y-3 border-t border-border px-6 pt-6 lg:px-8">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          {t.hero.location}
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <span className="text-secondary">{t.contactInfo.location}</span>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <Link
              href={`mailto:${t.contactInfo.email}`}
              className="text-secondary transition-colors hover:text-accent"
            >
              {t.contactInfo.email}
            </Link>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <Link
              href={`tel:${t.contactInfo.phone}`}
              className="text-secondary transition-colors hover:text-accent"
            >
              {t.contactInfo.phone}
            </Link>
          </div>
          
          <div className="flex items-start gap-3">
            <Linkedin className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <Link
              href={t.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-accent"
            >
              LinkedIn
            </Link>
          </div>
          <div className="flex items-start gap-3">
            <Github className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <Link
              href={t.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-accent"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="flex gap-3 border-t border-border px-6 pt-6 lg:flex-col lg:px-8">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </aside>
  );
}
