"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import certifications from "../data/certifications";
import { sectionReveal, staggerContainer, staggerItem } from "./animationVariants";

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <motion.section
      id="certifications"
      variants={sectionReveal}
      initial={isMobile ? "visible" : "hidden"}
      animate={isMobile ? "visible" : undefined}
      whileInView={isMobile ? undefined : "visible"}
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
            Credentials
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl"
          >
            Certifications and Awards
          </motion.h2>
        </div>

        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => {
            const filePath = encodeURI(`/certifications_pictures/${item.fileName}`);

            return (
              <motion.article
                key={item.fileName}
                variants={staggerItem}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4"
              >
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--text-muted)]">
                  {item.type === "pdf" ? "PDF" : "Image"}
                </p>
                <p className="text-xs font-medium text-[color:var(--text-muted)]">
                  {item.issuer}
                </p>
              </div>

              {item.type === "image" ? (
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={filePath}
                    alt={item.title}
                    width={900}
                    height={600}
                    className="h-44 w-full object-cover"
                  />
                </div>
              ) : (
                <>
                  <div className="hidden overflow-hidden rounded-xl border border-white/10 bg-[color:var(--surface)]/80 md:block">
                    <iframe
                      src={`${filePath}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={`${item.title} preview`}
                      className="h-44 w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex h-44 items-center justify-center rounded-xl border border-white/10 bg-[color:var(--surface)]/80 text-sm text-[color:var(--text-muted)] md:hidden">
                    PDF preview available on tap
                  </div>
                </>
              )}

              <h3 className="mt-4 text-base font-semibold leading-7 text-[color:var(--text-strong)]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
                {item.description}
              </p>

              <a
                href={filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-[color:var(--text-strong)] transition-all duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
              >
                View Credential
              </a>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
