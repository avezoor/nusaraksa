"use client"

import { Button } from "@/components/ui/button"
import { MapPin, BookOpen, Users, ArrowDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { images } from "@/config/images"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center pt-14 sm:pt-16 md:pt-20 pb-8 overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${images.hero.background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

        {/* Animated Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-0 w-[200%] h-full opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat-x",
              backgroundSize: "50% 100%",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge - Better responsive sizing */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-card/10 backdrop-blur-md border border-card/20 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
            </motion.div>
            <span className="text-xs sm:text-sm text-card font-medium tracking-wide">
              Kepulauan Kangean, Sumenep, Madura
            </span>
          </motion.div>

          {/* Main Heading - Better responsive font sizes */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-card mb-4 sm:mb-6 md:mb-8 text-balance leading-[1.15] px-2"
          >
            Jelajahi Keindahan Budaya{" "}
            <span className="relative inline-block">
              <span className="text-secondary">Pulau Kangean</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-secondary/50 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle - Better responsive text */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-card/85 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-pretty leading-relaxed font-light px-4"
          >
            Platform digital pelestarian budaya dan pariwisata berkelanjutan. Temukan bahasa, tradisi, dan keindahan
            alam Kepulauan Kangean.
          </motion.p>

          {/* CTA Buttons - Better button sizing on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Mulai Belajar
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-card/5 backdrop-blur-md border-card/30 text-card hover:bg-card/15 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Tentang Kami
            </Button>
          </motion.div>

          {/* Stats - Better grid and sizing for mobile */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2"
          >
            {[
              { value: "500+", label: "Kosakata Bahasa" },
              { value: "50+", label: "Cerita Rakyat" },
              { value: "30+", label: "Destinasi Wisata" },
              { value: "100+", label: "Karya Pemuda" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/5 backdrop-blur-sm border border-card/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="text-2xl sm:text-3xl md:text-4xl font-serif text-card mb-0.5 sm:mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-card/70 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-card/60 font-light tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 text-card/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
