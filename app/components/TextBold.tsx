"use client";

import { motion } from "framer-motion";

type TextBoldProps = {
  text: string;
  className?: string;
};

export function TextBold({ text, className = "" }: TextBoldProps) {
  return (
    <motion.span
      className={`inline-block cursor-pointer ${className}`}
      initial={{ fontVariationSettings: `"wght" 500` }}
      whileHover={{ fontVariationSettings: `"wght" 800` }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {text}
    </motion.span>
  );
}
