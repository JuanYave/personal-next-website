"use client";

/**
 * Home page component for Juan José Herrera Sierra's personal website
 * Displays hero section, experience, skills, education, and contact information
 */
import type { ReactElement } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home(): ReactElement {
  return (
    <div className="relative isolate flex min-h-screen justify-center px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="w-full max-w-6xl space-y-24">
        <HeroSection />

        <main className="space-y-24">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
