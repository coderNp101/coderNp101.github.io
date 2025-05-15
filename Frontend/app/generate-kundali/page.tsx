import MultiStepForm from "@/components/form/MultiStepForm";

export const metadata = {
  title: "Generate Your Kundali | JyotishAI",
  description: "Enter your birth details to generate your personalized Vedic astrology chart and receive AI-powered interpretations.",
};

export default function GenerateKundaliPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="celestial-bg py-16 md:py-24 flex-grow flex items-center justify-center">
        <div className="container">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}