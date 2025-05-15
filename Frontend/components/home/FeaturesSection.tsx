"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Calendar, 
  Clock, 
  MapPin, 
  BarChart, 
  PieChart, 
  Sparkles,
  Brain
} from "lucide-react";

const features = [
  {
    icon: <Star className="h-6 w-6" />,
    title: "Birth Chart Analysis",
    description: "Get a detailed analysis of your birth chart with interpretations for planets, houses, and aspects.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Transit Predictions",
    description: "Understand how current planetary movements affect your life with personalized transit predictions.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Dashas & Timing",
    description: "Explore the Vedic timing system of Dashas to understand different periods in your life.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location-Aware",
    description: "Precise calculations based on your exact birth location for maximum astrological accuracy.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Interpretations",
    description: "Modern AI interprets ancient wisdom, making Vedic astrology accessible to everyone.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Remedial Measures",
    description: "Receive personalized remedies and spiritual practices to harmonize planetary influences.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="sacred-geometry-pattern"></div>
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vedic Wisdom Meets Modern Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how JyotishAI combines ancient astrological knowledge with cutting-edge AI to provide personalized insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}