"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

export default function Hero() {
  return (
    <motion.section
      id="home"
      variants={sectionReveal}
      initial="hidden"
      animate="visible"
      className="relative isolate overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pt-28"
    >
      <div className="hero-aurora pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(57,215,255,0.22),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(107,84,255,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,215,255,0.12),transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center"
      >
        <div className="space-y-7">
          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-[color:var(--text-strong)] sm:text-5xl lg:text-6xl"
          >
            Welcome to my Portfolio, I am
            <span className="mt-2 block text-[color:var(--brand)]">
              Jesus Justin B. Mercado
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="max-w-2xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg"
          >
            I am currently a 3rd Year BSIT Major in Business Analytics Student
            specializing.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              className="glow-cta rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
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
              className="glow-cta rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition-colors duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-muted)]"
          >
            <span className="text-[color:var(--text-muted)]">Currently focused on</span>
            <span className="inline-flex min-h-9 items-center rounded-full border border-white/15 bg-white/5 px-4 font-medium text-[color:var(--brand)]">
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
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={staggerItem}
          className="rounded-3xl border border-white/15 bg-[color:var(--surface)]/80 p-6 shadow-[0_30px_80px_-40px_rgba(10,14,35,0.85)] backdrop-blur-xl sm:p-8"
        >
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/toolkit-showcase.png"
              alt="Web developer toolkit skills"
              width={600}
              height={400}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
