"use client";

import { motion } from "framer-motion";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

export default function Contact() {
  const links = [
    {
      label: "Email",
      href: "mailto:mjesusjustin@gmail.com",
      value: "mjesusjustin@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jesus-justin-mercado-5a864933b",
      value: "linkedin.com/in/jesus-justin-mercado-5a864933b",
    },
    {
      label: "GitHub",
      href: "https://github.com/jesus-justin",
      value: "github.com/jesus-justin",
    },
  ];

  return (
    <motion.section
      id="contact"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 pb-20 pt-4 sm:px-8"
    >
      <motion.div
        variants={staggerContainer}
        className="mx-auto w-full max-w-6xl rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-8 text-center shadow-[0_30px_70px_-45px_rgba(12,20,44,0.8)] backdrop-blur-xl sm:p-12"
      >
        <motion.p
          variants={staggerItem}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]"
        >
          Contact
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl"
        >
          Get in touch
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--text-muted)] sm:text-base"
        >
          I am open to frontend engineering opportunities, product-focused
          roles, and collaboration on impactful web experiences.
        </motion.p>

        <motion.div variants={staggerContainer} className="mt-8 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="rounded-2xl border border-white/20 bg-white/5 p-4 text-left transition-all duration-200 hover:border-[color:var(--brand)] hover:shadow-[0_0_28px_rgba(57,215,255,0.16)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                {link.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-[color:var(--text-strong)]">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
