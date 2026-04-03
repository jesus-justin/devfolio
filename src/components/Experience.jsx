"use client";

import { motion } from "framer-motion";
import experience from "../data/experience";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
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
            Experience
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl"
          >
            Professional experience delivering dependable digital products.
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} className="relative border-l border-white/20 pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={staggerItem}
              className={index === experience.length - 1 ? "relative" : "relative pb-10"}
            >
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[color:var(--surface)] bg-[color:var(--brand)] sm:-left-[39px]" />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[color:var(--text-strong)]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[color:var(--text-muted)]">
                    {item.company}
                  </p>
                </div>
                <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                  {item.date}
                </p>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm leading-7 text-[color:var(--text-muted)]">
                {item.description.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                    <span>{point}</span>
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
