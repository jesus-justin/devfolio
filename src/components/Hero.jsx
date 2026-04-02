export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pt-28"
    >
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-[color:var(--brand-soft)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
            Available for Frontend Roles
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[color:var(--text-strong)] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Your Name.
            <span className="block text-[color:var(--brand)]">
              I build things for the web.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            I design and develop fast, accessible digital experiences with React,
            Next.js, and modern UI systems. I care about clean architecture,
            delightful interaction, and measurable product impact.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-[color:var(--surface)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition-colors duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-6 shadow-[0_30px_80px_-40px_rgba(10,14,35,0.85)] backdrop-blur-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
            Core Toolkit
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-[color:var(--text-strong)] sm:text-base">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Next.js
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              React
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Tailwind CSS
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              JavaScript
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Node.js
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
