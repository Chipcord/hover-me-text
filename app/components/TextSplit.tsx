"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";

type TextSplitProps = {
  text: string;
  className?: string;
};

const STAGGER = 0.03;
const DURATION = 0.6;
const EASE = [0.68, -0.6, 0.32, 1.6];

export function TextSplit({ text, className = "" }: TextSplitProps) {
  const chars = useMemo(() => text.split(""), [text]);
  const [hovered, setHovered] = useState(false);

  const parent = {
    initial: {
      transition: {
        staggerChildren: STAGGER,
        staggerDirection: -1,
      },
    },
    hover: {
      transition: {
        staggerChildren: STAGGER,
        staggerDirection: 1,
      },
    },
  };

  const topChar = {
    initial: {
      y: "0%",
      rotateX: 0,
    },
    hover: {
      y: "-100%",
      rotateX: 90,
      transition: {
        duration: DURATION,
        ease: EASE,
      },
    },
  };

  const bottomChar = {
    initial: {
      y: "100%",
      rotateX: -90,
    },
    hover: {
      y: "0%",
      rotateX: 0,
      transition: {
        duration: DURATION,
        ease: EASE,
      },
    },
  };

  return (
    <span className="relative inline-block overflow-hidden">
      <motion.span
        className={`relative inline-block ${className}`}
        variants={parent}
        initial="initial"
        animate={hovered ? "hover" : "initial"}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <span className="block">
          {chars.map((char, i) => (
            <motion.span
              key={`top-${i}`}
              className="inline-block will-change-transform"
              style={{ transformOrigin: "50% 50% -10px" }}
              variants={topChar}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>

        <span aria-hidden className="absolute inset-0 block">
          {chars.map((char, i) => (
            <motion.span
              key={`bottom-${i}`}
              className="inline-block will-change-transform"
              style={{ transformOrigin: "50% 50% -10px" }}
              variants={bottomChar}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.span>
    </span>
  );
}
