"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import projects from "../data/projects";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!node || !isFinePointer) {
      return undefined;
    }

    VanillaTilt.init(node, {
      max: 8,
      speed: 400,
      scale: 1.02,
      glare: true,
      "max-glare": 0.12,
      perspective: 1100,
    });

    return () => {
      if (node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.article
      ref={cardRef}
      variants={staggerItem}
      className="project-tilt group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 transition-transform duration-300 hover:border-[color:var(--brand)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--brand)]/0 via-transparent to-[color:var(--brand)]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(57,215,255,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(107,84,255,0.18),transparent_42%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-[color:var(--text-strong)]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="skill-chip rounded-full border border-white/20 bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[color:var(--text-strong)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-all duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
          >
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cta rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Live Site
            </a>
          ) : (
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
              Demo on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <motion.section
      id="projects"
      variants={sectionReveal}
      initial={isMobile ? "visible" : "hidden"}
      animate={isMobile ? "visible" : undefined}
      whileInView={isMobile ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 pb-24 pt-4 sm:px-8"
    >
      <motion.div
        variants={staggerContainer}
        className="mx-auto w-full max-w-6xl rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-6 shadow-[0_30px_70px_-45px_rgba(12,20,44,0.8)] backdrop-blur-xl sm:p-10"
      >
        <div className="mb-8 space-y-3">
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]"
          >
            Projects
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl"
          >
            Selected work that demonstrates product and engineering range.
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
