import Image from "next/image";
import { 
  CalendarDays, 
  MapPin, 
  FileText, 
  LineChart 
} from "lucide-react";

const steps = [
  {
    icon: <CalendarDays className="h-12 w-12 text-amber-500" />,
    title: "Enter Your Birth Details",
    description:
      "Provide your full name, exact date and time of birth using our intuitive form.",
  },
  {
    icon: <MapPin className="h-12 w-12 text-indigo-500" />,
    title: "Specify Your Birth Location",
    description:
      "Use our integrated map to select your exact birth location for precise astrological calculations.",
  },
  {
    icon: <FileText className="h-12 w-12 text-amber-500" />,
    title: "Generate Your Kundali",
    description:
      "Our system calculates your personalized Vedic birth chart using advanced astronomical algorithms.",
  },
  {
    icon: <LineChart className="h-12 w-12 text-indigo-500" />,
    title: "Explore Your Cosmic Blueprint",
    description:
      "Receive detailed interpretations about your planetary positions, houses, and upcoming Dasha periods.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Generating your Vedic birth chart is simple and insightful
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-white p-4 shadow-md dark:bg-slate-800">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl shadow-xl md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-indigo-500/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  Vedic Wisdom
                </h3>
                <p className="text-white/90">
                  Discover the ancient insights of your cosmic journey
                </p>
              </div>
            </div>
            <Image 
              src="https://images.pexels.com/photos/5766595/pexels-photo-5766595.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Vedic astrology chart and symbols" 
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;