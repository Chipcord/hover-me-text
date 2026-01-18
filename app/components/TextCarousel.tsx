"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function TextCarousel({ text }: { text: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState<number | null>(null);
  const x = useMotionValue(0);
  const loopAnimationRef = useRef<any>(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
      x.set(-textRef.current.offsetWidth);
    }
  }, [text]);

  const startLoop = () => {
    if (!textWidth) return;

    if (loopAnimationRef.current) loopAnimationRef.current.stop();

    const step = () => {
      const start = x.get();
      const distance = textWidth - (start + textWidth);
      const duration = (distance / textWidth) * 2;

      loopAnimationRef.current = animate(x, 0, {
        duration: duration,
        ease: "linear",
        onComplete: () => {
          x.set(-textWidth);
          step();
        },
      });
    };

    step();
  };

  const handleMouseEnter = () => {
    startLoop();
  };

  const handleMouseLeave = () => {
    if (!textWidth) return;

    if (loopAnimationRef.current) loopAnimationRef.current.stop();

    const currentX = x.get();

    const targetX =
      Math.abs(currentX - 0) < Math.abs(currentX + textWidth) ? 0 : -textWidth;

    animate(x, targetX, { duration: 0.6, ease: "easeOut" });
  };

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom cursor-pointer"
      style={{ width: textWidth || "auto" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={textRef} className="absolute invisible whitespace-nowrap pr-4">
        {text}
      </span>

      <motion.span style={{ x }} className="flex whitespace-nowrap">
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
      </motion.span>
    </span>
  );
}
