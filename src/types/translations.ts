/**
 * Type definitions for bilingual content translations
 */
import type {
  Experience,
  Schooling,
  Certification,
  SkillCategory,
  NavLink,
  ContactInfo,
} from "./profile";

export type Translations = {
  hero: {
    greeting: string;
    subtitle: string;
    tagline: string;
    description: string;
    viewExperience: string;
    letsConnect: string;
    location: string;
    professionalLinkedIn: string;
  };
  about: {
    title: string;
    content: string[];
  };
  sections: {
    experience: string;
    experienceSubtitle: string;
    skills: string;
    skillsSubtitle: string;
    education: string;
    educationSubtitle: string;
    certifications: string;
    languages: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    sendEmail: string;
    connectLinkedIn: string;
    callPhone: string;
  };
  navLinks: NavLink[];
  experiences: Experience[];
  skillsData: SkillCategory[];
  certifications: Certification[];
  educationData: Schooling[];
  languagesData: string[];
  contactInfo: ContactInfo;
};

export type LocalizedContent = {
  es: Translations;
  en: Translations;
};
