import Image from "next/image";

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
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[color:var(--text-strong)] sm:text-5xl lg:text-6xl">
            Welcome to my Portfolio, I am
            <span className="block text-[color:var(--brand)]">Jesus Justin B. Mercado</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            I am currently a 3rd Year BSIT Major in Business Analytics Student
            specializing.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-[color:var(--surface)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition-colors duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition-colors duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-6 shadow-[0_30px_80px_-40px_rgba(10,14,35,0.85)] backdrop-blur-xl sm:p-8">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/toolkit-showcase.png"
              alt="Web developer toolkit skills"
              width={600}
              height={400}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
