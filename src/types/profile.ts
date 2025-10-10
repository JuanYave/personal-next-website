/**
 * Type definitions for profile and resume data structures
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  website?: string;
};

export type Schooling = {
  title: string;
  institution: string;
  span: string;
};

export type Certification = {
  name: string;
  issuer?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type NavLink = {
  href: string;
  label: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  github: string;
};
