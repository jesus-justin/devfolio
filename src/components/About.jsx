import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border border-white/15 bg-[color:var(--surface)]/85 p-6 shadow-[0_30px_70px_-45px_rgba(12,20,44,0.8)] backdrop-blur-xl sm:p-10 lg:grid-cols-[280px_1fr] lg:items-center">
        <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/20 bg-white/10">
          <Image
            src="/profile.jpg"
            alt="Developer profile photo"
            width={560}
            height={560}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
            About
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            Building thoughtful products with business impact.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            I am a frontend-focused developer who combines engineering quality
            with product thinking to build reliable web experiences. My work is
            centered on creating interfaces that are fast, accessible, and easy
            for teams to maintain at scale.
          </p>
          <p className="max-w-3xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            I collaborate effectively across design, engineering, and
            stakeholder teams, and I enjoy translating business requirements
            into polished, measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
