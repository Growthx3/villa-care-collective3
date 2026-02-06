'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroModule() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Villa Exterior"
          fill
          className="object-cover opacity-90"
          priority
          quality={90}
        />
        {/* Subtle overlay to ensure text contrast if needed, but keeping it minimal as requested */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-5xl font-light tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          A beautifully simple way to care for your estate.
        </motion.h1>
      </div>

      {/* Scroll Indicator (Optional but helpful for "Scroll driven") */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
