"use client";

/**
 * Language toggle component for switching between Spanish and English
 */
import { Languages } from "lucide-react";
import { useLanguage } from "./language-provider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-subtle px-4 text-sm font-medium text-secondary transition hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      <Languages className="h-4 w-4" />
      <span className="font-semibold uppercase">
        {language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
