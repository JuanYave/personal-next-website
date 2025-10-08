/**
 * Profile data for Juan Herrera's personal website
 * This file contains all static content and resume information
 */

import type {
  Experience,
  Schooling,
  Certification,
  SkillCategory,
  NavLink,
  ContactInfo,
} from "@/types/profile";

export const contactInfo: ContactInfo = {
  email: "juanjhs@gmail.com",
  phone: "+5215540662920",
  linkedin: "https://www.linkedin.com/in/juan-jose-herrera-sierra",
  location: "Benito Juárez, Ciudad de México, México",
};

export const experiences: Experience[] = [
  {
    company: "Yave",
    role: "Tech Lead",
    period: "mayo 2022 - Presente",
    location: "Ciudad de México",
    achievements: [
      "Gestioné el equipo técnico y consolidé prácticas de desarrollo para elevar calidad y productividad.",
      "Definí roadmap técnico alineado a objetivos de producto y lideré la transición hacia microservicios.",
      "Implementé Terraform, Docker y observabilidad (Sentry, Honeycomb) como prácticas estándar de plataforma.",
      "Optimizé consultas y cachés reduciendo latencia y costos operativos de cargas recurrentes.",
    ],
  },
  {
    company: "Yave",
    role: "Software Engineer - Backend",
    period: "diciembre 2021 - mayo 2022",
    location: "Ciudad de México",
    achievements: [
      "Entregué iteraciones de backend críticas asegurando satisfacción de clientes internos y plazos de roadmap.",
      "Coordine alcance con Product Owner y validación continua con usuarios clave.",
    ],
  },
  {
    company: "Yave",
    role: "Senior Backend Engineer",
    period: "septiembre 2017 - diciembre 2021",
    location: "Ciudad de México",
    achievements: [
      "Diseñé y desarrollé la plataforma principal de backend en Python.",
      "Integré y administré CRM Salesforce, sincronizando datos entre SQL y Salesforce.",
    ],
  },
  {
    company: "Oficina Coordinadora de Riesgos Asegurados (OCRA)",
    role: "Analista de Sistemas / Fullstack",
    period: "junio 2015 - septiembre 2017",
    location: "Ciudad de México",
    achievements: [
      "Construí 'CERCO Móvil' con Ionic para 1000 usuarios internos.",
      "Implementé BI con Qlik Sense Cloud y desarrollé APIs REST en Java.",
    ],
  },
  {
    company: "TEED Tecnología Educativa",
    role: "Software Developer",
    period: "junio 2013 - junio 2015",
    location: "Ciudad de México",
    achievements: [
      "Desarrollé un Sistema de Gestión de Aprendizaje completo, liderando diseño y QA.",
      "Dirigí proyectos Web API y móviles, coordinando equipos técnicos multidisciplinarios.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, VPC)", "Docker", "Terraform", "CI/CD en GitHub"],
  },
  {
    category: "Backend & Lenguajes",
    items: ["Python (Django, FastAPI)", "Java (Spring, Hibernate)", "REST APIs"],
  },
  {
    category: "Observabilidad & Testing",
    items: ["Sentry", "Honeycomb", "Pruebas automatizadas"],
  },
  {
    category: "Datos & Automatización",
    items: ["ETL", "Modelado de datos", "Zapier", "n8n"],
  },
  {
    category: "IA Generativa",
    items: ["ChatGPT", "Claude", "Gemini", "Cursor"],
  },
];

export const certifications: Certification[] = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "Gamification" },
  { name: "TOEFL" },
];

export const education: Schooling[] = [
  {
    title: "Maestría en Administración de Tecnologías de la Información",
    institution: "Tecnológico de Monterrey, Campus Ciudad de México",
    span: "2016 - 2018",
  },
  {
    title: "Especialidad en Administración de Proyectos (TI)",
    institution: "Tecnológico de Monterrey",
    span: "2017 - 2018",
  },
  {
    title: "Especialidad en Ingeniería de Software",
    institution: "Tecnológico de Monterrey",
    span: "2016 - 2017",
  },
  {
    title: "Ingeniero en Tecnologías Computacionales",
    institution: "Tecnológico de Monterrey",
    span: "2009 - 2013",
  },
];

export const languages: string[] = [
  "Español (Nativo)",
  "Inglés (Profesional - FCE / TOEFL)",
  "Francés (Básico)",
];

export const navLinks: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];
