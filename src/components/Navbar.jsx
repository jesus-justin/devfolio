"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface)]/85 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="logo-glow font-display text-lg font-semibold tracking-tight text-[color:var(--text-strong)]"
            onClick={handleNavClick}
          >
            DevFolio
          </a>

          <ul className="hidden items-center gap-7 text-sm font-medium text-[color:var(--text-muted)] md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[color:var(--text-strong)]"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              className="glow-cta hidden rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-[color:var(--bg)] md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-[color:var(--text-strong)] md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 p-4 md:hidden">
            <ul className="flex flex-col gap-2 text-sm font-medium text-[color:var(--text-muted)]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-[color:var(--text-strong)]"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  className="glow-cta mt-2 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-all duration-200 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-[color:var(--bg)]"
                  onClick={handleNavClick}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
