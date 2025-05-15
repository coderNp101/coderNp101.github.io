"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Simple animation for the celestial objects
  const [starPositions, setStarPositions] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);
  
  useEffect(() => {
    // Generate random star positions
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStarPositions(stars);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="celestial-bg">
        <div className="container relative py-20 md:py-32 flex flex-col items-center">
          {/* Animated stars */}
          {starPositions.map((star, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              animate={{
                opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}rem`,
                height: `${star.size}rem`,
              }}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              A modern approach to ancient wisdom
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Generate your Kundali and receive AI-powered Vedic interpretations
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/generate-kundali">
                <Button size="lg" className="text-md rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-secondary font-medium">
                  Generate Your Kundali <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Animated celestial objects */}
          <motion.div
            className="absolute top-20 right-[5%] text-white/80"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sun className="h-16 w-16 md:h-24 md:w-24" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-[10%] text-white/80"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Moon className="h-12 w-12 md:h-20 md:w-20" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 left-[20%] text-accent/90"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="h-8 w-8 md:h-12 md:w-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}