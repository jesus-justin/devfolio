"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [initialized, setInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnvironment = () => {
      setIsMobile(mobileQuery.matches || reducedMotionQuery.matches);
    };

    updateEnvironment();
    mobileQuery.addEventListener("change", updateEnvironment);
    reducedMotionQuery.addEventListener("change", updateEnvironment);

    return () => {
      mobileQuery.removeEventListener("change", updateEnvironment);
      reducedMotionQuery.removeEventListener("change", updateEnvironment);
    };
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInitialized(true));
  }, []);

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#38bdf8", "#22d3ee", "#60a5fa"],
        },
        links: {
          enable: true,
          color: "#60a5fa",
          distance: 150,
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 28,
          density: {
            enable: true,
            width: 1280,
            height: 720,
          },
        },
        opacity: {
          value: { min: 0.25, max: 0.55 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
      },
    }),
    []
  );

  if (!initialized || isMobile) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Particles
        id="portfolio-particles"
        className="absolute inset-0 h-full w-full"
        options={options}
      />
    </div>
  );
}
