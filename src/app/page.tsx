"use client";

/**
 * Home page component for Juan Herrera's personal website
 * Two-column layout with sidebar and main content
 */
import type { ReactElement } from "react";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";

export default function Home(): ReactElement {
  return (
    <div className="lg:flex min-h-screen">
      {/* Sidebar - Fixed on larger screens, top on mobile */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="main-content flex-1">
        <div className="mx-auto max-w-4xl px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
          <div className="space-y-12">
            <AboutSection />
            <ExperienceSection />
            
            {/* Two-column layout for Skills and Education on desktop */}
            <div className="grid gap-12 lg:grid-cols-2">
              <SkillsSection />
              <EducationSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
