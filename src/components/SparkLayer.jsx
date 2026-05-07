import React from 'react'
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function SparkLayer() {

     const sparkles = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
     <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
