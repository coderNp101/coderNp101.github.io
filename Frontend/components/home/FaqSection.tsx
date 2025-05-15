"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What is Vedic astrology?",
    answer: "Vedic astrology, also known as Jyotish, is an ancient Indian system of astrology that originated in the Vedic period. It differs from Western astrology primarily in its use of the sidereal zodiac rather than the tropical zodiac. Vedic astrology places emphasis on the Moon sign rather than the Sun sign and incorporates a system of planetary periods known as Dashas to time events."
  },
  {
    question: "How is JyotishAI different from other astrology platforms?",
    answer: "JyotishAI combines traditional Vedic astrological principles with modern AI technology to provide more nuanced and personalized interpretations. Our platform utilizes sophisticated algorithms to analyze complex astrological patterns and offers practical, actionable insights rather than vague predictions. We also prioritize educational aspects, helping users understand the 'why' behind the interpretations."
  },
  {
    question: "How accurate is the birth time needed for good results?",
    answer: "Birth time accuracy is quite important in Vedic astrology as it determines your Ascendant (Lagna) and the precise placement of planets in houses. Even a difference of a few minutes can change these placements. For the most accurate readings, we recommend providing a birth time that's accurate to within 5 minutes. If you don't know your exact birth time, our system can still provide valuable insights based on your birth date and location, but certain predictions like timing of events may be less precise."
  },
  {
    question: "What information do I need to generate my Kundali?",
    answer: "To generate a complete Kundali (birth chart), you'll need to provide your full name, date of birth, precise time of birth, and exact place of birth. The location information helps us calculate the correct rising sign and planetary positions specific to your birth coordinates. If you're uncertain about your exact birth time, you can still receive a partial analysis based on the available information."
  },
  {
    question: "Do you offer remedial measures for challenging planetary positions?",
    answer: "Yes, JyotishAI provides personalized remedial recommendations based on your chart analysis. These may include specific gemstones, mantras, charitable activities, or spiritual practices designed to harmonize challenging planetary energies. Our AI analyzes not just the difficult positions but also the strengths in your chart to suggest balanced and practical remedies that align with modern lifestyles."
  },
  {
    question: "How often should I check for updates to my astrological forecast?",
    answer: "Transits (current planetary movements) affect your birth chart continuously, but meaningful changes typically occur over weeks and months rather than days. We recommend checking your transit predictions monthly for general trends and before making important decisions. For more time-sensitive matters or during significant life transitions, weekly updates can provide additional guidance. Premium users receive notifications about important upcoming transits specific to their chart."
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="sacred-geometry-pattern opacity-[0.05]"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Vedic astrology and JyotishAI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm border border-border/50 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b last:border-0">
                  <AccordionTrigger className="px-6 py-4 hover:bg-muted/20 transition-colors text-left">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}