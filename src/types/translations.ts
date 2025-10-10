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
    subtitle: string;
    location: string;
  };
  about: {
    title: string;
    content: string[];
  };
  sections: {
    experience: string;
    skills: string;
    education: string;
    certifications: string;
    languages: string;
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
