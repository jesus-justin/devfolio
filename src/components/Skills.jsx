"use client";

import { motion } from "framer-motion";
import skills from "../data/skills";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
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
            Skills
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl"
          >
            Technical capabilities across the delivery lifecycle.
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <motion.article
              key={category}
              variants={staggerItem}
              className="rounded-2xl border border-white/15 bg-white/5 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="skill-chip rounded-full border border-white/20 bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[color:var(--text-strong)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
