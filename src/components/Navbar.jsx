const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface)]/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-[color:var(--text-strong)]"
        >
          DevFolio
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-[color:var(--text-muted)] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-[color:var(--text-strong)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-[color:var(--surface)]"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
