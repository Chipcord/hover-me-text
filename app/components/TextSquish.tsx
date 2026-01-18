"use client";
import { motion, useAnimation } from "framer-motion";

interface TextSquishProps {
  text: string;
}

export const TextSquish: React.FC<TextSquishProps> = ({ text }) => {
  const controls = useAnimation();

  const squish = () => {
    controls.start({
      scaleY: [1, 0, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      className="inline-block cursor-pointer overflow-hidden w-max"
      onHoverStart={squish}
      onHoverEnd={squish}
    >
      <motion.span
        className="inline-block"
        animate={controls}
        initial={{ scaleY: 1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};
