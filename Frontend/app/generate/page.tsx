import KundaliForm from "@/components/kundali/kundali-form";
import { Separator } from "@/components/ui/separator";

export default function GenerateKundaliPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Generate Your Kundali
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your birth details to generate a personalized Vedic astrological birth chart
          </p>
        </div>
        
        <Separator className="mb-8" />
        
        <KundaliForm />
      </div>
    </div>
  );
}