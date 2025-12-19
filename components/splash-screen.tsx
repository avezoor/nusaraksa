"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Deterministic "random" function based on seed
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800) // Show splash untuk 2.8 detik

    return () => clearTimeout(timer)
  }, [])

  // Generate floating particles dengan deterministic positions
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
    startX: (seededRandom(i * 2) * 200 - 100),
    startY: (seededRandom(i * 2 + 1) * 200 - 100),
    endX: (seededRandom(i * 3) * 400 - 200),
    endY: (seededRandom(i * 3 + 1) * 400 - 200),
  }))

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, rgba(var(--color-primary), 0.1), transparent)",
                "linear-gradient(225deg, rgba(var(--color-primary), 0.15), transparent)",
                "linear-gradient(45deg, rgba(var(--color-primary), 0.1), transparent)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 -z-10"
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: particle.startX,
                  y: particle.startY,
                }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                  x: particle.endX,
                  y: particle.endY,
                }}
                transition={{
                  duration: 2.5,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
                className="absolute w-1 h-1 rounded-full bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Outer Rotating Ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="relative w-28 h-28 sm:w-36 sm:h-36"
            >
              {/* Outer Hexagon-like rotation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary" />
              </motion.div>

              {/* Middle rotating ring (opposite direction) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2"
              >
                <div className="absolute inset-0 rounded-full border border-primary/50" />
              </motion.div>

              {/* Inner Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(var(--color-primary), 0.3)",
                    "0 0 40px rgba(var(--color-primary), 0.6)",
                    "0 0 20px rgba(var(--color-primary), 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-4 rounded-full"
              />

              {/* Logo with Bounce */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  scale: { delay: 0.3, duration: 0.6, ease: "easeOut" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/icon-dark-32x32.png"
                  alt="NusaRaksa"
                  width={72}
                  height={72}
                  priority
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Text with Stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="font-serif text-3xl sm:text-4xl font-normal text-foreground tracking-wide"
              >
                NusaRaksa
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-sm text-muted-foreground font-light"
              >
                Island
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-xs text-muted-foreground/60 font-light tracking-widest pt-2"
              >
                MELESTARIKAN BUDAYA
              </motion.p>
            </motion.div>

            {/* Bottom Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 1.2, duration: 1 }}
              className="h-0.5 bg-gradient-to-r from-primary/40 to-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
