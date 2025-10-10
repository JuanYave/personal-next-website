/**
 * Bilingual content for Juan José Herrera Sierra's personal website
 * Contains Spanish and English translations for all site content
 */
import type { LocalizedContent } from "@/types/translations";

export const translations: LocalizedContent = {
  es: {
    hero: {
      greeting: "Hola, soy",
      subtitle: "Tech Lead · Senior Backend Engineer",
      tagline:
        "Ingeniero en Tecnologías Computacionales enfocado en construir plataformas escalables, liderar equipos de alto desempeño y entregar productos resilientes sobre AWS, Python y Java.",
      description:
        "Combino liderazgo técnico, cultura DevOps e infraestructura como código para acelerar la entrega de valor, optimizar costos e impulsar el crecimiento de equipos. He guiado transformaciones de monolitos a microservicios, elevando observabilidad y confiabilidad en entornos de misión crítica.",
      viewExperience: "Ver experiencia",
      letsConnect: "Conectemos",
      location: "Ubicación",
      professionalLinkedIn: "LinkedIn profesional",
    },
    about: {
      title: "Sobre mí",
      content: [
        "Soy un líder técnico y arquitecto de software con más de 10 años de experiencia diseñando, construyendo y escalando sistemas backend en entornos de alta exigencia.",
        "Mi enfoque se centra en la entrega de valor sostenible mediante prácticas DevOps, infraestructura como código y observabilidad profunda.",
        "He liderado transformaciones técnicas desde monolitos hacia arquitecturas de microservicios, implementando soluciones en AWS con Python, Django, FastAPI y Java.",
      ],
    },
    sections: {
      experience: "Experiencia",
      experienceSubtitle: "Liderazgo y entrega end-to-end en plataformas de misión crítica",
      skills: "Habilidades clave",
      skillsSubtitle: "Stacks y prácticas que domino para crear soluciones robustas",
      education: "Formación & Certificaciones",
      educationSubtitle: "Aprendizaje continuo para liderar con visión técnica",
      certifications: "Certificaciones",
      languages: "Idiomas",
    },
    contact: {
      title: "¿Listo para hablar de tu próximo reto?",
      subtitle: "Construyamos juntos",
      description:
        "Estoy disponible para liderar iniciativas tecnológicas, acelerar entregas backend o apoyar a equipos en la adopción de prácticas DevOps e infraestructura escalable. Escríbeme y diseñemos el plan ideal.",
      sendEmail: "Enviar correo",
      connectLinkedIn: "Conectemos en LinkedIn",
      callPhone: "Llamar por teléfono",
    },
    navLinks: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#formacion", label: "Formación" },
      { href: "#contacto", label: "Contacto" },
    ],
    experiences: [
      {
        company: "Yave",
        role: "Tech Lead",
        period: "mayo 2022 - Presente",
        location: "Ciudad de México",
        achievements: [
          "Gestioné el equipo técnico y consolidé prácticas de desarrollo para elevar calidad y productividad.",
          "Definí roadmap técnico alineado a objetivos de producto y lideré la transición hacia microservicios.",
          "Implementé Terraform, Docker y observabilidad (Sentry, Honeycomb) como prácticas estándar de plataforma.",
          "Optimicé consultas y cachés reduciendo latencia y costos operativos de cargas recurrentes.",
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
    ],
    skillsData: [
      {
        category: "Cloud & DevOps",
        items: [
          "AWS (EC2, S3, Lambda, VPC)",
          "Docker",
          "Terraform",
          "CI/CD en GitHub",
        ],
      },
      {
        category: "Backend & Lenguajes",
        items: [
          "Python (Django, FastAPI)",
          "Java (Spring, Hibernate)",
          "REST APIs",
        ],
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
    ],
    certifications: [
      { name: "AWS Certified Cloud Practitioner" },
      { name: "Gamification" },
      { name: "TOEFL" },
    ],
    educationData: [
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
    ],
    languagesData: [
      "Español (Nativo)",
      "Inglés (Profesional - FCE / TOEFL)",
      "Francés (Básico)",
    ],
    contactInfo: {
      email: "juanjhs@gmail.com",
      phone: "+5215540662920",
      linkedin: "https://www.linkedin.com/in/juan-jose-herrera-sierra",
      location: "Benito Juárez, Ciudad de México, México",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Tech Lead · Senior Backend Engineer",
      tagline:
        "Computer Technologies Engineer focused on building scalable platforms, leading high-performance teams, and delivering resilient products on AWS, Python, and Java.",
      description:
        "I combine technical leadership, DevOps culture, and infrastructure as code to accelerate value delivery, optimize costs, and drive team growth. I've guided transformations from monoliths to microservices, elevating observability and reliability in mission-critical environments.",
      viewExperience: "View experience",
      letsConnect: "Let's connect",
      location: "Location",
      professionalLinkedIn: "Professional LinkedIn",
    },
    about: {
      title: "About me",
      content: [
        "I'm a technical leader and software architect with over 10 years of experience designing, building, and scaling backend systems in high-demand environments.",
        "My focus is on delivering sustainable value through DevOps practices, infrastructure as code, and deep observability.",
        "I've led technical transformations from monoliths to microservices architectures, implementing solutions on AWS with Python, Django, FastAPI, and Java.",
      ],
    },
    sections: {
      experience: "Experience",
      experienceSubtitle: "End-to-end leadership and delivery on mission-critical platforms",
      skills: "Key Skills",
      skillsSubtitle: "Stacks and practices I master to create robust solutions",
      education: "Education & Certifications",
      educationSubtitle: "Continuous learning to lead with technical vision",
      certifications: "Certifications",
      languages: "Languages",
    },
    contact: {
      title: "Ready to discuss your next challenge?",
      subtitle: "Let's build together",
      description:
        "I'm available to lead technical initiatives, accelerate backend deliveries, or support teams in adopting DevOps practices and scalable infrastructure. Write me and let's design the ideal plan.",
      sendEmail: "Send email",
      connectLinkedIn: "Connect on LinkedIn",
      callPhone: "Call by phone",
    },
    navLinks: [
      { href: "#sobre-mi", label: "About" },
      { href: "#experiencia", label: "Experience" },
      { href: "#habilidades", label: "Skills" },
      { href: "#formacion", label: "Education" },
      { href: "#contacto", label: "Contact" },
    ],
    experiences: [
      {
        company: "Yave",
        role: "Tech Lead",
        period: "May 2022 - Present",
        location: "Mexico City",
        achievements: [
          "Managed the technical team and consolidated development practices to elevate quality and productivity.",
          "Defined technical roadmap aligned with product objectives and led transition to microservices.",
          "Implemented Terraform, Docker, and observability (Sentry, Honeycomb) as standard platform practices.",
          "Optimized queries and caches reducing latency and operational costs of recurring workloads.",
        ],
      },
      {
        company: "Yave",
        role: "Software Engineer - Backend",
        period: "December 2021 - May 2022",
        location: "Mexico City",
        achievements: [
          "Delivered critical backend iterations ensuring internal customer satisfaction and roadmap deadlines.",
          "Coordinated scope with Product Owner and continuous validation with key users.",
        ],
      },
      {
        company: "Yave",
        role: "Senior Backend Engineer",
        period: "September 2017 - December 2021",
        location: "Mexico City",
        achievements: [
          "Designed and developed the main backend platform in Python.",
          "Integrated and managed Salesforce CRM, synchronizing data between SQL and Salesforce.",
        ],
      },
      {
        company: "Coordinating Office for Insured Risks (OCRA)",
        role: "Systems Analyst / Fullstack",
        period: "June 2015 - September 2017",
        location: "Mexico City",
        achievements: [
          "Built 'CERCO Mobile' with Ionic for 1000 internal users.",
          "Implemented BI with Qlik Sense Cloud and developed REST APIs in Java.",
        ],
      },
      {
        company: "TEED Educational Technology",
        role: "Software Developer",
        period: "June 2013 - June 2015",
        location: "Mexico City",
        achievements: [
          "Developed a complete Learning Management System, leading design and QA.",
          "Led Web API and mobile projects, coordinating multidisciplinary technical teams.",
        ],
      },
    ],
    skillsData: [
      {
        category: "Cloud & DevOps",
        items: [
          "AWS (EC2, S3, Lambda, VPC)",
          "Docker",
          "Terraform",
          "CI/CD on GitHub",
        ],
      },
      {
        category: "Backend & Languages",
        items: [
          "Python (Django, FastAPI)",
          "Java (Spring, Hibernate)",
          "REST APIs",
        ],
      },
      {
        category: "Observability & Testing",
        items: ["Sentry", "Honeycomb", "Automated testing"],
      },
      {
        category: "Data & Automation",
        items: ["ETL", "Data modeling", "Zapier", "n8n"],
      },
      {
        category: "Generative AI",
        items: ["ChatGPT", "Claude", "Gemini", "Cursor"],
      },
    ],
    certifications: [
      { name: "AWS Certified Cloud Practitioner" },
      { name: "Gamification" },
      { name: "TOEFL" },
    ],
    educationData: [
      {
        title: "Master's in Information Technology Management",
        institution: "Tecnológico de Monterrey, Mexico City Campus",
        span: "2016 - 2018",
      },
      {
        title: "Specialization in Project Management (IT)",
        institution: "Tecnológico de Monterrey",
        span: "2017 - 2018",
      },
      {
        title: "Specialization in Software Engineering",
        institution: "Tecnológico de Monterrey",
        span: "2016 - 2017",
      },
      {
        title: "Computer Technologies Engineer",
        institution: "Tecnológico de Monterrey",
        span: "2009 - 2013",
      },
    ],
    languagesData: [
      "Spanish (Native)",
      "English (Professional - FCE / TOEFL)",
      "French (Basic)",
    ],
    contactInfo: {
      email: "juanjhs@gmail.com",
      phone: "+5215540662920",
      linkedin: "https://www.linkedin.com/in/juan-jose-herrera-sierra",
      location: "Benito Juárez, Mexico City, Mexico",
    },
  },
};
