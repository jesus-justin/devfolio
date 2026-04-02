import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-5 pb-24 pt-4 sm:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-6 shadow-[0_30px_70px_-45px_rgba(12,20,44,0.8)] backdrop-blur-xl sm:p-10">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
            Projects
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            Selected work that demonstrates product and engineering range.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-5"
            >
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
                    className="rounded-full border border-white/20 bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[color:var(--text-strong)]"
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
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-colors duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--surface)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Live Site
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
