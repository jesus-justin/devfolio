"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.25 });
  const hoverRef = useRef(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => {
      setIsFinePointer(finePointerQuery.matches);
      setIsVisible(finePointerQuery.matches);
    };

    const frame = window.requestAnimationFrame(updatePointer);
    finePointerQuery.addEventListener("change", updatePointer);

    return () => {
      window.cancelAnimationFrame(frame);
      finePointerQuery.removeEventListener("change", updatePointer);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return undefined;
    }

    const moveCursor = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event) => {
      const target = event.target.closest("a, button, [role='button'], input, textarea, select");
      hoverRef.current = Boolean(target);
      setIsHovering(hoverRef.current);
    };

    const handleLeave = () => {
      hoverRef.current = false;
      setIsHovering(false);
    };

    const handleEnter = () => setIsVisible(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.body.style.cursor = "";
    };
  }, [isFinePointer, x, y]);

  const cursorStyles = useMemo(
    () => ({
      x: springX,
      y: springY,
    }),
    [springX, springY]
  );

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={cursorStyles}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="cursor-ring"
      />
      <motion.div
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        className="cursor-dot"
      />
    </motion.div>
  );
}
