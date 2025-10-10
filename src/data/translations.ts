/**
 * Bilingual content for Juan José Herrera Sierra's personal website
 * Contains Spanish and English translations for all site content
 */
import type { LocalizedContent } from "@/types/translations";

export const translations: LocalizedContent = {
  es: {
    hero: {
      subtitle: "Tech Lead · Senior Backend Engineer",
      location: "Ubicación",
    },
    about: {
      title: "Sobre mí",
      content: [
        "Ingeniero de Software (Software Engineer) con más de 10 años de experiencia en desarrollo backend, arquitectura de software y liderazgo técnico. Éxito comprobado diseñando REST APIs (Application Programming Interfaces) escalables, desarrollando lógica de negocio e impulsando mejoras de calidad usando Python (Django, FastAPI), Java y AWS (Amazon Web Services).",
        "Reconocido por fomentar equipos colaborativos de alto desempeño y entregar software de alta calidad. Especializado en arquitectura de microservicios, con conocimientos de Cloud Computing, DevOps, CI/CD (Continuous Integration/Continuous Deployment), y desarrollo backend full-stack. He liderado transformaciones de monolitos a microservicios, implementado Infrastructure as Code (IaC) con Terraform y Docker, y agregado observabilidad en entornos de misión crítica.",
      ],
    },
    sections: {
      experience: "Experiencia",
      skills: "Habilidades clave",
      education: "Formación & Certificaciones",
      certifications: "Certificaciones",
      languages: "Idiomas",
    },
    navLinks: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#formacion", label: "Formación" },
    ],
    experiences: [
      {
        company: "Yave",
        role: "Tech Lead",
        period: "mayo 2022 - Presente",
        location: "Ciudad de México",
        website: "yave.mx",
        achievements: [
          "Gestioné un equipo técnico de 8 personas en desarrollo backend y arquitectura de software.",
          "Lideré análisis de requerimientos y ejecución de roadmap en JIRA, siempre alineado con el equipo de Producto.",
          "Estandaricé prácticas de desarrollo e implementé metodologías ágiles (Scrum, Kanban), logrando una mejora del 50% en tasas de completitud de tareas.",
          "Lideré exitosamente la migración de arquitectura monolítica a microservicios, integrando Infrastructure as Code (IaC) (Terraform, Docker) y herramientas de observabilidad (Sentry, Honeycomb).",
          "Desarrollé soluciones backend por medio de REST APIs y lógica de negocio en Python (Django, FastAPI).",
          "Implementé estrategias de optimización, caching y performance tuning para maximizar el rendimiento.",
          "Recientemente entrené al equipo para aprovechar LLMs (Large Language Models) como ChatGPT y Claude para mejorar la productividad, calidad de código, cobertura de pruebas y procesos de code review.",
          "Liderazgo técnico enfocado en calidad, productividad y trabajo en equipo efectivo.",
        ],
      },
      {
        company: "Yave",
        role: "Senior Backend Engineer | Squad Leader",
        period: "septiembre 2017 - mayo 2022",
        location: "Ciudad de México",
        website: "yave.mx",
        achievements: [
          "Diseñé y desarrollé la plataforma principal de backend en Python (Django).",
          "Integré y administré CRM (Customer Relationship Management) Salesforce, sincronizando datos entre la base de datos SQL (PostgreSQL) y Salesforce mediante REST APIs.",
          "Entregué iteraciones de backend críticas asegurando satisfacción de clientes internos y cumplimiento de plazos de roadmap.",
          "Coordiné alcance con Product Owner y validación continua con usuarios clave.",
        ],
      },
      {
        company: "Oficina Coordinadora de Riesgos Asegurados (OCRA)",
        role: "Analista de Sistemas / Fullstack",
        period: "junio 2015 - septiembre 2017",
        location: "Ciudad de México",
        website: "ocra.com.mx",
        achievements: [
          "Desarrollé aplicaciones móviles multiplataforma usando Ionic Framework (Android/iOS), junto con una REST API optimizada en Java, aumentando la productividad general de cientos de usuarios.",
          "Implementé soluciones de Business Intelligence (BI) y reportes con Qlik Sense Cloud.",
          "Proporcioné mantenimiento y soporte continuo para sistemas Java y PHP existentes, logrando una mejora del 35% en tiempos de respuesta mediante optimización de código y queries.",
        ],
      },
      {
        company: "TEED Tecnología Educativa",
        role: "Software Developer",
        period: "junio 2013 - junio 2015",
        location: "Ciudad de México",
        website: "teed.com.mx",
        achievements: [
          "Desarrollé un LMS (Learning Management System) completo, liderando diseño de software, que fue utilizado por clientes como el Tecnológico de Monterrey, entre otros.",
          "Implementé un REST API para integrar el LMS (Learning Management System) con distintas aplicaciones web y móviles.",
          "Participé en el desarrollo de 'Teed Challenge' (Android/iOS), una aplicación multiplataforma para aprendizaje gamificado.",
          "Diseñé y desarrollé exitosamente distintas aplicaciones web y móviles, utilizando en cada una diversas tecnologías.",
        ],
      },
    ],
    skillsData: [
      {
        category: "Cloud & DevOps",
        items: [
          "Amazon Web Services (AppRunner, EC2, S3, Lambda, VPC)",
          "Docker",
          "Terraform (IaC)",
          "Kubernetes (K8s)",
          "GitHub Actions", "Gitflow"
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
        items: ["ETL (Extract, Transform, Load)", "Modelado de bases de datos", "Zapier", "n8n"],
      },
      {
        category: "IA Generativa",
        items: ["ChatGPT", "Claude", "Gemini", "Cursor", "Windsurf"],
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
      github: "https://github.com/JuanYave",
    },
  },
  en: {
    hero: {
      subtitle: "Tech Lead · Senior Backend Engineer",
      location: "Location",
    },
    about: {
      title: "About me",
      content: [
        "Software Engineer with over 10 years of extensive experience in backend development, software architecture, and technical leadership. Proven success designing scalable APIs (Application Programming Interfaces), REST APIs, and GraphQL, driving quality improvements using Python (Django, FastAPI), Java, and AWS (Amazon Web Services).",
        "Recognized for fostering collaborative, high-performance teams and delivering impactful, high-quality software. Specialized in microservices architecture, with knowledge in Cloud Computing, DevOps, CI/CD (Continuous Integration/Continuous Deployment), and full-stack backend development. I've led transformations from monoliths to microservices, implemented Infrastructure as Code (IaC) with Terraform and Docker, and elevated observability in mission-critical environments.",
      ],
    },
    sections: {
      experience: "Experience",
      skills: "Key Skills",
      education: "Education & Certifications",
      certifications: "Certifications",
      languages: "Languages",
    },
    navLinks: [
      { href: "#sobre-mi", label: "About" },
      { href: "#experiencia", label: "Experience" },
      { href: "#habilidades", label: "Skills" },
      { href: "#formacion", label: "Education" },
    ],
    experiences: [
      {
        company: "Yave",
        role: "Tech Lead",
        period: "May 2022 - Current",
        location: "Mexico City",
        website: "yave.mx",
        achievements: [
          "Managed a technical team of 8 people in backend development and software architecture.",
          "Led requirement analysis and roadmap execution in JIRA, always aligned with the Product team.",
          "Standardized development practices and implemented agile methodologies (Scrum, Kanban), leading to a 50% improvement in task completion rates.",
          "Successfully led migration from monolithic to microservices architecture, integrating Infrastructure as Code (IaC) (Terraform, Docker) and observability tools (Sentry, Honeycomb).",
          "Developed backend solutions through REST APIs and business logic in Python (Django, FastAPI).",
          "Implemented optimization, caching, and performance tuning strategies to maximize system performance.",
          "Recently trained the team to leverage LLMs (Large Language Models) such as ChatGPT and Claude to improve productivity, code quality, test coverage, and code review processes.",
          "Technical leadership focused on quality, productivity, and effective teamwork.",
        ],
      },
      {
        company: "Yave",
        role: "Senior Backend Engineer | Squad Leader",
        period: "September 2017 - May 2022",
        location: "Mexico City",
        website: "yave.mx",
        achievements: [
          "Designed and developed the main backend platform in Python (Django).",
          "Integrated and managed Salesforce CRM (Customer Relationship Management), synchronizing data between the SQL database (PostgreSQL) and Salesforce using REST APIs.",
          "Delivered critical backend iterations ensuring internal customer satisfaction and roadmap deadline compliance.",
          "Coordinated scope with Product Owner and continuous validation with key users.",
        ],
      },
      {
        company: "Oficina Coordinadora de Riesgos Asegurados (OCRA)",
        role: "Systems Analyst / Fullstack",
        period: "June 2015 - September 2017",
        location: "Mexico City",
        website: "ocra.com.mx",
        achievements: [
          "Developed cross-platform mobile applications using Ionic Framework (Android/iOS), along with an optimized REST API in Java, boosting overall productivity of hundreds of users.",
          "Implemented Business Intelligence (BI) and reporting solutions with Qlik Sense Cloud.",
          "Provided maintenance and continuous support for existing Java and PHP systems, achieving 35% improvement in response times through code optimization and query tuning.",
        ],
      },
      {
        company: "TEED Tecnología Educativa",
        role: "Software Developer",
        period: "June 2013 - June 2015",
        location: "Mexico City",
        website: "teed.com.mx",
        achievements: [
          "Developed a complete LMS (Learning Management System), leading software design, which was used by clients such as Tecnológico de Monterrey, among others.",
          "Implemented a REST API to integrate the LMS (Learning Management System) with various web and mobile applications.",
          "Participated in the development of 'Teed Challenge' (Android/iOS), a cross-platform application for gamified learning.",
          "Successfully designed and developed various web and mobile applications, using diverse technologies in each one.",
        ],
      },
    ],
    skillsData: [
      {
        category: "Cloud & DevOps",
        items: [
          "Amazon Web Services (AppRunner, EC2, S3, Lambda, VPC)",
          "Docker",
          "Terraform (IaC)",
          "Kubernetes (K8s)",
          "GitHub Actions", "Gitflow"
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
        items: ["ETL (Extract, Transform, Load)", "Database modeling", "Zapier", "n8n"],
      },
      {
        category: "Generative AI",
        items: ["ChatGPT", "Claude", "Gemini", "Cursor", "Windsurf"],
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
        title: "Postgraduate Specialization in Project Management (IT)",
        institution: "Tecnológico de Monterrey",
        span: "2017 - 2018",
      },
      {
        title: "Postgraduate Specialization in Software Engineering",
        institution: "Tecnológico de Monterrey",
        span: "2016 - 2017",
      },
      {
        title: "Bachelor of Engineering in Computer Technologies",
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
      github: "https://github.com/JuanYave",
    },
  },
};
