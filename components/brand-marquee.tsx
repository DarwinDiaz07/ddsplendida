"use client"

import { motion } from "framer-motion"

export function BrandMarquee() {
  const brands = [
    "SKIN1004",
    "Beauty of Joseon",
    "Round Lab",
    "Pyunkang Yul",
    "Arencia",
    "Tocobo",
    "Eqqualberry",
    "Axis-Y",
    "Celimax",
    "Jumiso",
  ]

  return (
    <div className="overflow-hidden bg-white/50 backdrop-blur py-8">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...brands,  ...brands,  ...brands].map((brand, index) => (
          <div key={index} className="flex-shrink-0 text-2xl font-bold text-muted-foreground/60">
            {brand}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
