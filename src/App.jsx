import "./App.css";

const projects = [
  {
    title: "Finance RAG Advisor",
    category: "RAG / GenAI Application",
    description:
      "Full-stack RAG application that ingests finance PDFs, chunks document text, stores embeddings in ChromaDB, retrieves relevant context, and generates source-grounded answers using Gemini.",
    tech: ["FastAPI", "React", "ChromaDB", "Gemini", "RAG", "Embeddings"],
    link: "https://github.com/aadi090204/Finance-rag-advisor",
    highlight: "RAG + Vector Database",
  },
  {
    title: "AI DevOps Incident Assistant",
    category: "AI + DevOps / SRE",
    description:
      "AI-powered incident analysis tool that combines rule-based log detection with Gemini to analyze Docker, Nginx, CI/CD, Linux, and deployment issues with safe debugging commands.",
    tech: ["FastAPI", "React", "Gemini", "Python", "Vite", "Log Analysis"],
    link: "https://github.com/aadi090204/AI-DevOps-Incident-Assistant",
    highlight: "AI Cloud / DevOps bridge",
  },
  {
    title: "DeepShield",
    category: "AI/ML Research",
    description:
      "Deep learning-based deepfake video detection system using NesT-Small, temporal transformers, MediaPipe, rPPG signal features, and gated visual-physiological fusion.",
    tech: ["PyTorch", "Django", "MediaPipe", "OpenCV", "rPPG", "NesT"],
    link: "https://github.com/aadi090204/Hybird-Multimodal-Deepfake-Video-Detector",
    highlight: "Final-year AI/ML project",
  },
  {
    title: "AI Resume Match Analyzer",
    category: "AI Career Assistant",
    description:
      "Full-stack AI assistant that parses resume PDFs and compares them with job descriptions to generate match scores, ATS keywords, missing skills, and improved resume bullets.",
    tech: ["FastAPI", "React", "Gemini", "pypdf", "Prompt Engineering"],
    link: "https://github.com/aadi090204/AI-Resume-Match-Analyzer",
    highlight: "Prompt engineering project",
  },
  {
    title: "Rudhirasena",
    category: "Full-Stack Web App",
    description:
      "Django and MySQL blood donation platform with smart donor-recipient matching, Gemini chatbot, eligibility checking, admin verification, and PDF certificate generation.",
    tech: ["Django", "MySQL", "Gemini", "Tailwind CSS", "ReportLab"],
    link: "https://github.com/aadi090204/Rudhirasena-Blood-Donation-Management-System",
    highlight: "Django + AI chatbot",
  },
  {
    title: "Hospital Management System",
    category: "Desktop Application",
    description:
      "Python Tkinter and MySQL desktop application for managing patients, doctors, appointments, departments, and authentication workflows.",
    tech: ["Python", "Tkinter", "MySQL", "CRUD", "GUI"],
    link: "https://github.com/aadi090204/Hospital_Managment_System",
    highlight: "Academic Python project",
  },
];

const skillGroups = [
  {
    title: "AI / ML",
    skills: ["Python", "PyTorch", "OpenCV", "MediaPipe", "Gemini API", "Prompt Engineering"],
  },
  {
    title: "GenAI / RAG",
    skills: ["RAG", "ChromaDB", "sentence-transformers", "PDF Parsing", "Semantic Search"],
  },
  {
    title: "Backend / Software",
    skills: ["FastAPI", "Django", "React", "Java", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps / Cloud",
    skills: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "AWS Fundamentals", "GCP Fundamentals"],
  },
  {
    title: "Monitoring / Operations",
    skills: ["Prometheus", "Grafana", "cAdvisor", "Blackbox Exporter", "Production Debugging"],
  },
];

const certifications = [
  "AWS Academy Cloud Foundations",
  "DevOps Fundamentals — IBM eTrain",
  "Cloud Computing Concepts Using AWS — FISAT CSE",
];

const targetRoles = [
  "AI Engineer ",
  "AI Backend Engineer ",
  "AI Cloud Engineer ",
  "MLOps Engineer ",
  "DevOps Engineer ",
  "Cloud Engineer ",
  "Software Engineer",
];

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          Adithya Anil
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">AI Engineer · AI Cloud / MLOps · DevOps Engineer</p>
          <h1>
            Building AI applications, RAG systems, and DevOps-ready backend
            workflows for cloud and production environments.
          </h1>
          <p className="hero-text">
            I am Adithya Anil, a Computer Science graduate focused on AI
            Engineering, AI Cloud, MLOps, and DevOps. I build full-stack AI
            applications using FastAPI, React, Gemini, RAG, ChromaDB, and
            Python, while also bringing hands-on experience in Linux servers,
            Docker deployments, Nginx reverse proxy configuration, CI/CD
            workflows, and production troubleshooting.
          </p>

          <div className="role-badges">
            {["AI Engineer", "AI Cloud", "MLOps", "DevOps", "Software Engineering"].map(
              (role) => (
                <span key={role}>{role}</span>
              )
            )}
          </div>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://github.com/aadi090204"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a className="secondary-button" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p>Current Focus</p>
          <h2>AI Engineer with AI Cloud and DevOps/MLOps Strength</h2>
          <ul>
            <li>RAG and GenAI application development</li>
            <li>FastAPI + React AI product workflows</li>
            <li>Cloud-ready backend and deployment practices</li>
            <li>Docker, Linux, Nginx, and CI/CD troubleshooting</li>
            <li>Monitoring and incident response with Prometheus/Grafana</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Profile Summary</h2>
        </div>

        <div className="about-grid">
          <div className="card">
            <p>
              I am a B.Tech Computer Science graduate from FISAT focused on AI
              Engineering, AI Cloud, MLOps, and DevOps-oriented software
              engineering. I build AI applications that combine backend APIs,
              document processing, prompt engineering, RAG, vector databases,
              and production-ready workflows.
            </p>
            <p>
              Alongside AI projects, I have hands-on DevOps internship
              experience working with Linux servers, Docker and Docker Compose
              deployments, Nginx reverse proxy configuration, GitHub Actions
              CI/CD, production issue debugging, MongoDB connectivity checks,
              and monitoring using Prometheus and Grafana.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>6+</h3>
              <p>Portfolio Projects</p>
            </div>
            <div className="stat-card">
              <h3>AI Cloud</h3>
              <p>Primary Direction</p>
            </div>
            <div className="stat-card">
              <h3>2026</h3>
              <p>B.Tech CSE</p>
            </div>
            <div className="stat-card">
              <h3>RAG · MLOps · DevOps</h3>
              <p>Core Focus Areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Target Roles</p>
          <h2>Roles I’m Building Toward</h2>
        </div>

        <div className="skills-list">
          {targetRoles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>DevOps Internship</h2>
        </div>

        <div className="card timeline-card">
          <div>
            <h3>DevOps Intern — Webgeon Results Pvt Ltd</h3>
            <p className="muted">January 2026 – Present</p>
          </div>
          <ul>
            <li>
              Managed Docker and Docker Compose deployments on production Linux
              servers.
            </li>
            <li>
              Investigated Nginx reverse proxy issues, HTTP 404/502/504 errors,
              routing mismatches, and container failures using logs and
              server-side debugging.
            </li>
            <li>
              Worked with GitHub Actions CI/CD workflows to track deployments,
              image versions, and failed releases.
            </li>
            <li>
              Configured Grafana and Prometheus alerting for CPU, disk, memory,
              uptime, and container monitoring.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Work</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.category}</span>
                <p>{project.highlight}</p>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer">
                View Repository →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical Stack</h2>
        </div>

        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <div className="card skill-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research</p>
          <h2>Publication</h2>
        </div>

        <div className="card">
          <h3>A Survey on Deepfake Video Detection Using Hybrid Multimodal Features</h3>
          <p className="muted">IJCA · February 2026 · Vol 187, No 82</p>
          <p>
            Research work focused on deepfake video detection using hybrid
            multimodal features, combining visual artifact analysis with
            physiological signal-based detection approaches.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Certifications</p>
          <h2>Learning Credentials</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((certificate) => (
            <div className="cert-card" key={certificate}>
              {certificate}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s Connect</h2>
        </div>

        <p>
          I am actively exploring AI Engineer, AI Backend Engineer, AI Cloud,
          MLOps, DevOps Engineer, Cloud Engineer, and Software Engineer
          opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:adithyaani135@gmail.com">Email</a>
          <a
            href="https://github.com/aadi090204"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adithya-anil-8a247a255/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;