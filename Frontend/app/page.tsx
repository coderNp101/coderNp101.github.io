import Link from "next/link";
import { Star, ArrowRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FeaturesSection from "@/components/home/features-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import HowItWorksSection from "@/components/home/how-it-works-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-20 dark:from-indigo-950 dark:to-background md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="stars-pattern absolute inset-0"></div>
        </div>
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10">
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-100/80 p-3 dark:bg-amber-900/20">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Destiny Engine</span>
              <span className="block text-xl font-medium text-amber-600 dark:text-amber-400 md:text-2xl">
                A modern approach to ancient wisdom
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-700 dark:text-slate-300 md:text-xl">
              Generate your Kundali and receive AI-powered Vedic interpretations.
              Explore the celestial influences that shape your destiny.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600"
                size="lg"
              >
                <Link href="/generate">
                  Generate Your Kundali
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/concepts">Learn About Vedic Astrology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 dark:bg-indigo-950 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Ready to discover your cosmic blueprint?
            </h2>
            <p className="mb-8 text-lg text-slate-700 dark:text-slate-300">
              Generate your personalized Kundali and unlock the celestial
              insights that guide your life's journey.
            </p>
            <Button
              asChild
              className="bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600"
              size="lg"
            >
              <Link href="/generate">
                Generate Your Kundali
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}