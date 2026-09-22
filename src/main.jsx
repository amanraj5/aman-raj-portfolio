import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

// Add future roles, projects, skills, education and credentials in these collections.
const profile = {
  name: "Aman Raj",
  role: "Java Backend Engineer",
  location: "Kolkata, West Bengal",
  email: "amanrajsingh806@gmail.com",
  phone: "+91 6204117727",
  linkedin: "https://linkedin.com/in/aman-raj-singh-28feb",
  github: "https://github.com/amanraj5",
  leetcode: "https://leetcode.com/u/amanraj5/"
};

const education = [{
  institution: "Techno India University",
  degree: "B.Tech in Computer Science",
  period: "September 2020 — July 2024",
  result: "CGPA 8.51 / 10.0"
}];

const experience = [{
  company: "Tata Consultancy Services (TCS)",
  role: "Java Developer",
  location: "Kolkata",
  period: "August 2024 — Present",
  domain: "Enterprise insurance · TCS BaNCS",
  bullets: [
    "Designed and implemented 15+ production-ready REST APIs with input validation, global exception handling and Swagger documentation, streamlining client integration through standardized request and response contracts.",
    "Engineered a multi-stage claim data transformation engine using reflection-based annotation processing, dynamic parameter normalization and type-safe conversions, with composite key indexing across 50+ nested attributes. Reduced implementation time by 75% through AI-assisted development.",
    "Architected a bidirectional API orchestration layer integrating 3 downstream services with null-safe validation, unknown-parameter tracking and entity cross-referencing across 8 domain objects. Compressed delivery from 3 weeks to 3 days through AI-assisted development.",
    "Architected a unified Cancel Premium API that consolidated 3 services into a single endpoint, cutting client-side API calls by 66% and improving response latency.",
    "Migrated 50+ Oracle PL/SQL stored procedures into Spring Boot services using Hibernate/JPA and JDBC, moving business logic out of the database and improving workflow maintainability."
  ]
}];

const projects = [
  {
    number: "01",
    title: "NearBuy",
    subtitle: "Local commerce, built for nearby discovery",
    type: "Full-stack platform",
    description: "A multi-vendor e-commerce platform for product discovery, cart management and end-to-end order placement, with dedicated experiences for admins, store owners and customers.",
    outcomes: [
      "Built Spring Boot APIs and a React.js interface for users, stores, products and orders.",
      "Implemented Spring Security and JWT authentication with RBAC for 3 user roles.",
      "Documented APIs with Swagger/OpenAPI and standardized error handling using @ControllerAdvice."
    ],
    tech: ["Spring Boot", "React.js", "MongoDB", "Spring Security", "JWT", "Swagger"],
    link: "https://github.com/amanraj5/local-shop-ordering-backend-springboot"
  },
  {
    number: "02",
    title: "Secure Multi-Tenant SaaS Platform",
    subtitle: "A billing backend designed around isolation",
    type: "Microservices architecture",
    description: "A secure SaaS backend decomposed into independent authentication, user-management and billing services, each with its own MongoDB collection and REST interface.",
    outcomes: [
      "Implemented centralized routing, JWT validation and rate limiting with Spring Cloud Gateway.",
      "Designed database-per-tenant isolation with tenant context resolved from JWT claims.",
      "Eliminated duplicated authentication logic while standardizing service-to-service request forwarding."
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "API Gateway", "JWT", "Microservices"],
    link: "https://github.com/amanraj5/saas-billing-platform"
  },
  {
    number: "03",
    title: "Spring AI",
    subtitle: "Exploring practical AI integrations with Spring",
    type: "Backend learning project",
    description: "A focused repository for exploring Spring AI patterns and applying AI capabilities within a Java and Spring Boot backend ecosystem.",
    outcomes: [
      "Keeps Spring AI experiments and implementation work in one focused codebase.",
      "Connects current backend engineering practice with emerging AI application patterns.",
      "Provides a foundation for adding future AI-powered backend features."
    ],
    tech: ["Java", "Spring Boot", "Spring AI"],
    link: "https://github.com/amanraj5/Spring-AI"
  }
];

const skills = [
  { label: "Languages", items: ["Java", "C", "C++", "JavaScript"] },
  { label: "Backend", items: ["Spring Boot", "Spring MVC", "Spring Security", "RESTful APIs", "Microservices", "Spring AI"] },
  { label: "Data", items: ["Hibernate", "JPA", "MySQL", "Oracle / PL/SQL", "MongoDB", "PostgreSQL", "JDBC"] },
  { label: "Platform", items: ["Spring Cloud Gateway", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
  { label: "Tools", items: ["Git", "GitHub", "GitHub Copilot", "Postman", "Swagger", "IntelliJ IDEA", "WildFly", "Maven / Gradle"] },
  { label: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] }
];

const certifications = [{
  title: "AWS Cloud Foundations",
  provider: "Planned next step",
  status: "Roadmap",
  icon: "bi-cloud-arrow-up",
  description: "A planned AWS learning track to extend my backend engineering practice into cloud-native delivery, deployment and infrastructure."
}];
const navigation = ["about", "experience", "projects", "skills", "education", "certifications", "contact"];

function SectionHeader({ index, eyebrow, title, intro }) {
  return <div className="section-header"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="scanlines" aria-hidden="true" />
    <nav className="site-nav" aria-label="Primary navigation"><div className="nav-inner">
      <a className="brand" href="#top" onClick={closeMenu}>Aman Raj</a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} /></button>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>{navigation.map((item, index) => <a href={`#${item}`} key={item} onClick={closeMenu}><span>0{index + 1}</span> {item}</a>)}</div>
      <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <i className="bi bi-arrow-up-right" /></a>
    </div></nav>

    <main id="top">
      <section className="hero-section"><div className="hero-grid" /><div className="container hero-layout">
        <div className="hero-copy-block"><p className="terminal-line"><span className="prompt">aman@portfolio:~$</span> whoami</p><p className="eyebrow">JAVA BACKEND ENGINEER · 02+ YEARS</p><h1>Systems that<br /><em>hold up.</em></h1><p className="hero-description">I&apos;m <strong>{profile.name}</strong> — a backend engineer building reliable APIs, transformation engines and service integrations for complex insurance workflows.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <i className="bi bi-arrow-down-right" /></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <i className="bi bi-arrow-up-right" /></a></div><div className="availability"><span className="status-dot" /> Open to backend engineering opportunities <span className="availability-line" /></div></div>
        <div className="hero-visuals"><div className="hero-console" aria-label="Aman Raj profile summary"><div className="console-bar"><span><i /><i /><i /></span><span>aman.config.json</span><span>● online</span></div><div className="console-body"><p><span className="syntax-purple">const</span> aman <span className="syntax-muted">=</span> &#123;</p><p className="indent"><span className="syntax-key">role:</span> <span className="syntax-green">&quot;{profile.role}&quot;</span>,</p><p className="indent"><span className="syntax-key">base:</span> <span className="syntax-green">&quot;{profile.location}&quot;</span>,</p><p className="indent"><span className="syntax-key">focus:</span> <span className="syntax-green">&quot;Scalable APIs&quot;</span>,</p><p className="indent"><span className="syntax-key">stack:</span> [</p><p className="indent double"><span className="syntax-green">&quot;Java&quot;</span>, <span className="syntax-green">&quot;Spring Boot&quot;</span>,</p><p className="indent double"><span className="syntax-green">&quot;Microservices&quot;</span>, <span className="syntax-green">&quot;MongoDB&quot;</span></p><p className="indent">],</p><p className="indent"><span className="syntax-key">status:</span> <span className="syntax-orange">&quot;shipping&quot;</span></p><p>&#125;;<span className="cursor" /></p></div><div className="console-footer"><span>BUILD: 2026.09</span><span>JAVA / API / DATA</span></div></div></div>
      </div></section>

      <section id="about" className="content-section about-section"><div className="container"><SectionHeader index="01" eyebrow="PROFILE" title="The person behind the APIs." intro="A practical engineer with a bias for clarity, resilient systems and measurable outcomes." /><div className="about-grid"><div className="about-statement"><span className="quote-mark">“</span><p>I turn business rules and moving parts into maintainable backend services that teams can actually build on.</p></div><div className="about-detail"><p>My work sits at the intersection of API design, domain logic and production problem-solving. At TCS, I work on enterprise insurance applications that support claims workflows from policy issuance through settlement.</p><p>I enjoy the details: the contract between services, the shape of a useful error response, the database query that needs to be understood before it can be moved, and the small tooling choices that make future changes less expensive.</p><div className="mini-facts"><span><b>01</b> Enterprise APIs</span><span><b>02</b> Insurance domain</span><span><b>03</b> AI-assisted delivery</span></div></div></div></div></section>

      <section id="experience" className="content-section dark-section"><div className="container"><SectionHeader index="02" eyebrow="FIELD LOG / EXPERIENCE" title="Shipping in the real world." intro="Production systems, hard constraints and the work between a requirement and a reliable release." /><div className="experience-list">{experience.map((job) => <article className="experience-entry" key={`${job.company}-${job.role}`}><div className="entry-meta"><span className="entry-number">01</span><span>{job.period}</span><span>{job.location}</span></div><div className="entry-main"><div className="entry-heading"><div><h3>{job.role}</h3><p className="company-name">{job.company}</p></div><span className="domain-label">{job.domain}</span></div><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></div></section>

      <section id="projects" className="content-section projects-section"><div className="container"><SectionHeader index="03" eyebrow="BUILD LOG / PROJECTS" title="Things I built to understand the system." intro="Projects that turn architecture diagrams into working software and sharpen the fundamentals behind the job." /><div className="project-list">{projects.map((project) => <article className="project-entry" key={project.title}><div className="project-topline"><span>{project.number} / {project.type}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><i className="bi bi-github" /> VIEW SOURCE <i className="bi bi-arrow-up-right" /></a></div><div className="project-content"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div><p className="project-description">{project.description}</p></div><div className="project-bottom"><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}</div></div></section>

      <section id="skills" className="content-section dark-section skills-section"><div className="container"><SectionHeader index="04" eyebrow="TOOLCHAIN / SKILLS" title="A toolbox with a point of view." intro="The technologies I use to model, build, secure, test and ship backend systems." /><div className="skills-grid">{skills.map((group, index) => <div className="skill-group" key={group.label}><span className="skill-index">0{index + 1}</span><h3>{group.label}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="education" className="content-section education-section"><div className="container split-section"><SectionHeader index="05" eyebrow="ORIGIN / EDUCATION" title="The foundation layer." intro="Where the curiosity became a discipline." /><div className="education-list">{education.map((item) => <article className="education-card" key={item.institution}><span className="education-year">2020—24</span><div><h3>{item.institution}</h3><p>{item.degree}</p><strong>{item.result}</strong></div><span className="education-period">{item.period}</span></article>)}</div></div></section>

      <section id="certifications" className="content-section dark-section certifications-section"><div className="container"><SectionHeader index="06" eyebrow="CREDENTIALS / CERTIFICATIONS" title="The next proof point." intro="A transparent record of completed credentials and the learning tracks currently in motion." /><div className="certification-grid">{certifications.map((certification) => <article className="certification-card" key={certification.title}><div className="certification-icon"><i className={`bi ${certification.icon}`} /></div><div className="certification-copy"><div className="certification-meta"><span>{certification.status}</span><span>{certification.provider}</span></div><h3>{certification.title}</h3><p>{certification.description}</p><div className="certification-status"><i className="bi bi-hourglass-split" /> Planned · will be updated after completion</div></div></article>)}</div><p className="credentials-note"><i className="bi bi-info-circle" /> No certifications completed yet. This section is intentionally ready for future AWS and professional credentials.</p></div></section>

      <section id="contact" className="contact-section"><div className="container contact-layout"><div><p className="eyebrow">07 / ESTABLISH CONNECTION</p><h2>Have a system<br /><em>worth building?</em></h2><p className="contact-copy">I&apos;m open to conversations about Java backend engineering, platform work and products that care about the details.</p></div><div className="contact-panel"><p className="terminal-line"><span className="prompt">aman@portfolio:~$</span> connect</p><a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <i className="bi bi-arrow-up-right" /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <i className="bi bi-arrow-up-right" /></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <i className="bi bi-arrow-up-right" /></a></div><p className="contact-location"><i className="bi bi-geo-alt" /> {profile.location} · {profile.phone}</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><span>Aman Raj / Backend Engineer</span><span>Designed &amp; engineered with intent</span><span>© 2026</span></div></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);