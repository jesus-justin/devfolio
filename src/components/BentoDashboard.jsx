"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useMemo, useState } from "react";
import projects from "../data/projects";
import skills from "../data/skills";
import experience from "../data/experience";
import certifications from "../data/certifications";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jesus-justin",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jesus-justin-mercado-5a864933b",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:mjesusjustin@gmail.com",
    icon: MailIcon,
  },
];

const quickNav = [
  { label: "Hero", href: "#hero-card" },
  { label: "Projects", href: "#projects-card" },
  { label: "Stack", href: "#skills-card" },
  { label: "Awards", href: "#certifications-card" },
  { label: "Contact", href: "#contact-card" },
];

function IconButton({ href, label, icon: Icon }) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target={label === "Email" ? undefined : "_blank"}
      rel={label === "Email" ? undefined : "noopener noreferrer"}
      className="bento-icon-button"
      aria-label={label}
      title={label}
    >
      <Icon />
    </motion.a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.41-4.04-1.41-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.24a11.36 11.36 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.66.24 2.9.12 3.2.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.66-5.47 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 4.98 8a2.48 2.48 0 0 0 0-4.5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05A4.21 4.21 0 0 1 17.68 9C21.7 9 22 11.65 22 15.09V21h-4v-5.26c0-1.25-.02-2.86-1.74-2.86-1.74 0-2.01 1.36-2.01 2.77V21h-4V9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{title}</h3>
      </div>
      {action}
    </div>
  );
}

function Badge({ children, tone = "default" }) {
  const toneClasses =
    tone === "accent"
      ? "border-[rgba(255,107,53,0.35)] bg-[rgba(255,107,53,0.12)] text-[#ffbf9e]"
      : tone === "warm"
        ? "border-[rgba(232,131,74,0.34)] bg-[rgba(232,131,74,0.1)] text-[#ffc8aa]"
        : "border-white/10 bg-white/5 text-[color:var(--text-muted)]";

  return <span className={`bento-chip ${toneClasses}`}>{children}</span>;
}

export default function BentoDashboard() {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [certsExpanded, setCertsExpanded] = useState(false);

  const featuredProject = projects[0];
  const moreProjects = projects.slice(1);
  const certificationsVisible = certsExpanded ? certifications : certifications.slice(0, 4);
  const skillGroups = useMemo(() => Object.entries(skills), []);

  return (
    <motion.main
      variants={sectionReveal}
      initial="hidden"
      animate="visible"
      className="mx-auto min-h-screen w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
    >
      <motion.header
        variants={staggerItem}
        className="bento-topbar mb-4 flex flex-col gap-3 p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
            JM
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Portfolio Dashboard
            </p>
            <p className="text-sm text-white/90">Jesus Justin B. Mercado</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {quickNav.map((link) => (
            <a key={link.href} href={link.href} className="bento-nav-pill">
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" className="bento-nav-pill bento-nav-pill-accent">
            Resume
          </a>
        </div>
      </motion.header>

      <motion.section
        variants={staggerContainer}
        className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(160px,auto)]"
      >
        <motion.article
          id="gallery-card"
          variants={staggerItem}
          whileHover={{ scale: 1.01 }}
          className="bento-card group relative overflow-hidden lg:col-span-4 lg:row-span-2"
        >
          <div className="relative h-full min-h-[360px] overflow-hidden">
            <Image
              src="/developer_profile-picture.jpg"
              alt="Jesus Justin Mercado profile"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05)_0%,rgba(10,10,10,0.4)_60%,rgba(10,10,10,0.9)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-[#ffbf9e]">
                Gallery
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Builder portrait / profile snapshot
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--text-muted)]">
                A clean visual identity for a product-focused developer building interactive systems, AI tools, and polished interfaces.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          id="hero-card"
          variants={staggerItem}
          className="bento-card lg:col-span-5 lg:row-span-2"
        >
          <div className="grid h-full gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-[#ff9d6f]">
                  Hero
                </p>
                <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m <span className="text-[#ff6b35]">Jesus Justin B. Mercado</span>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--text-muted)] sm:text-lg">
                  I design practical, polished digital products with a focus on usability,
                  performance, and clear systems thinking. My work blends frontend craft,
                  product intuition, and hands-on problem solving.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge tone="accent">Batangas, PH</Badge>
                <Badge tone="warm">BSIT - Business Analytics</Badge>
                <Badge>3rd Year</Badge>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Roles
                </p>
                <div className="mt-2 text-xl font-medium text-white sm:text-2xl">
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer",
                      1800,
                      "Full Stack Developer",
                      1800,
                      "UI/UX Enthusiast",
                      1800,
                    ]}
                    wrapper="span"
                    speed={48}
                    repeat={Infinity}
                    cursor={true}
                    style={{ display: "inline-block" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 lg:flex-col lg:justify-between">
              {socialLinks.map((link) => (
                <IconButton key={link.label} {...link} />
              ))}
            </div>
          </div>
        </motion.article>

        <motion.article
          id="projects-card"
          variants={staggerItem}
          className="bento-card lg:col-span-3 lg:row-span-2"
        >
          <SectionHeader
            eyebrow="Projects"
            title="Systems, products & creative builds."
            action={
              <button
                type="button"
                onClick={() => setProjectsExpanded((current) => !current)}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffbf9e] transition-colors hover:text-white"
              >
                {projectsExpanded ? "Collapse" : "Click to expand"}
              </button>
            }
          />

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff9d6f]">
              Featured Project
            </p>
            <h4 className="mt-2 text-xl font-semibold text-white">{featuredProject.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge tone="accent">{featuredProject.role}</Badge>
              <Badge>{featuredProject.year}</Badge>
              <Badge tone="warm">{featuredProject.badge}</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--text-muted)]">
              {featuredProject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
              Click to expand
            </p>
          </div>

          <AnimatePresence initial={false}>
            {projectsExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-4 overflow-hidden"
              >
                <div className="max-h-64 space-y-3 overflow-auto pr-1">
                  {moreProjects.map((project) => (
                    <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="text-sm font-semibold text-white">{project.title}</h5>
                          <p className="mt-1 text-xs text-[color:var(--text-muted)]">{project.role} · {project.year}</p>
                        </div>
                        <span className="rounded-full border border-[rgba(255,107,53,0.28)] bg-[rgba(255,107,53,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffc8aa]">
                          {project.badge}
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-[color:var(--text-muted)]">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bento-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>

        <motion.article
          id="skills-card"
          variants={staggerItem}
          className="bento-card lg:col-span-3"
        >
          <SectionHeader
            eyebrow="Skills"
            title="Stack I Use"
            action={
              <button
                type="button"
                onClick={() => setSkillsExpanded((current) => !current)}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffbf9e] transition-colors hover:text-white"
              >
                {skillsExpanded ? "Show less" : "Expand all"}
              </button>
            }
          />

          <AnimatePresence initial={false} mode="wait">
            {skillsExpanded ? (
              <motion.div
                key="skills-expanded"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {skillGroups.map(([group, items]) => (
                  <div key={group}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff9d6f]">
                      {group}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="skill-chip bento-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="skills-collapsed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-2"
              >
                {skillGroups
                  .flatMap(([, items]) => items)
                  .slice(0, 10)
                  .map((skill) => (
                    <span key={skill} className="skill-chip bento-chip">
                      {skill}
                    </span>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>

        <motion.article
          id="experience-card"
          variants={staggerItem}
          className="bento-card lg:col-span-5"
        >
          <SectionHeader eyebrow="Experience" title="Selected work history" />
          <div className="space-y-3">
            {experience.map((item) => (
              <div key={`${item.company}-${item.role}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h5 className="text-sm font-semibold text-white">{item.role}</h5>
                    <p className="mt-1 text-xs text-[color:var(--text-muted)]">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffbf9e]">
                    {item.date}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-5 text-[color:var(--text-muted)]">
                  {item.description[0]}
                </p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          id="certifications-card"
          variants={staggerItem}
          className="bento-card lg:col-span-4"
        >
          <SectionHeader
            eyebrow="Awards"
            title="Competitions / Certifications"
            action={
              <button
                type="button"
                onClick={() => setCertsExpanded((current) => !current)}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffbf9e] transition-colors hover:text-white"
              >
                {certsExpanded ? "Show less" : "More"}
              </button>
            }
          />
          <div className="space-y-3">
            {certificationsVisible.map((item) => (
              <div key={item.fileName} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                    <p className="mt-1 text-xs text-[color:var(--text-muted)]">{item.description}</p>
                  </div>
                  <span className="rounded-full border border-[rgba(255,107,53,0.28)] bg-[rgba(255,107,53,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffc8aa]">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          id="contact-card"
          variants={staggerItem}
          className="bento-card lg:col-span-3"
        >
          <SectionHeader eyebrow="Contact" title="Get in touch" />
          <p className="text-sm leading-6 text-[color:var(--text-muted)]">
            Available for frontend roles, product builds, and collaborative technical work.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <IconButton {...socialLinks[2]} />
            <IconButton {...socialLinks[1]} />
            <IconButton {...socialLinks[0]} />
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
              Direct contact
            </p>
            <a href="mailto:mjesusjustin@gmail.com" className="mt-2 block text-sm font-medium text-white transition-colors hover:text-[#ffbf9e]">
              mjesusjustin@gmail.com
            </a>
          </div>
        </motion.article>
      </motion.section>
    </motion.main>
  );
}
