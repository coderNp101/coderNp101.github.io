import { 
  Star, 
  Sparkles, 
  Calendar, 
  Globe, 
  Clock, 
  Brain,
  BarChart
} from "lucide-react";

const features = [
  {
    icon: <Star className="h-10 w-10 text-amber-500" />,
    title: "Accurate Kundali Generation",
    description:
      "Generate precise Vedic birth charts based on your exact birth details and location.",
  },
  {
    icon: <Brain className="h-10 w-10 text-indigo-500" />,
    title: "AI-Powered Interpretations",
    description:
      "Receive detailed interpretations of your chart using our advanced AI system trained on ancient Vedic texts.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-amber-500" />,
    title: "Dasha Predictions",
    description:
      "Explore the planetary periods (Dashas) that influence different phases of your life journey.",
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    title: "Precise Geolocation",
    description:
      "Our system uses accurate geographical data to ensure your chart reflects the exact planetary positions at your birth.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-amber-500" />,
    title: "Multiple Calendar Systems",
    description:
      "Support for both AD (Gregorian) and BS (Bikram Sambat) calendar systems for comprehensive flexibility.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-indigo-500" />,
    title: "Beautiful Visualizations",
    description:
      "View your birth chart through stunning, easy-to-understand visual representations of planetary positions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Modern Technology Meets Ancient Wisdom
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Discover how our platform brings Vedic astrology into the digital age with
            advanced features and accurate interpretations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;