"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw, Save } from "lucide-react";
import { toast } from "sonner";

import PersonalInfoStep from "./PersonalInfoStep";
import BirthDetailsStep from "./BirthDetailsStep";
import LocationStep from "./LocationStep";

const steps = ["Personal Information", "Birth Details", "Birth Location"];

interface FormData {
  name: string;
  email: string;
  birthDate: Date | undefined;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number | null;
  longitude: number | null;
}

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    birthDate: undefined,
    birthTime: "",
    birthCity: "",
    birthCountry: "",
    latitude: null,
    longitude: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 0) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    } else if (currentStep === 1) {
      if (!formData.birthDate) {
        newErrors.birthDate = "Birth date is required";
      }
      if (!formData.birthTime) {
        newErrors.birthTime = "Birth time is required";
      }
    } else if (currentStep === 2) {
      if (!formData.birthCity.trim()) {
        newErrors.birthCity = "Birth city is required";
      }
      if (!formData.birthCountry.trim()) {
        newErrors.birthCountry = "Birth country is required";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleUpdateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      toast.success("Form submitted successfully!", {
        description: "Redirecting to your results...",
      });
      
      // Redirect to results page
      setTimeout(() => {
        router.push("/results");
      }, 1500);
    }
  };

  const handleSaveProgress = () => {
    // In a real app, save to localStorage or server
    localStorage.setItem("kundaliFormData", JSON.stringify(formData));
    localStorage.setItem("kundaliFormStep", currentStep.toString());
    
    toast.success("Progress saved!", {
      description: "You can resume from this point later.",
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      birthDate: undefined,
      birthTime: "",
      birthCity: "",
      birthCountry: "",
      latitude: null,
      longitude: null,
    });
    setCurrentStep(0);
    setErrors({});
    
    toast.info("Form has been reset");
  };

  return (
    <div className="w-full max-w-3xl mx-auto multi-step-form-wrapper rounded-lg overflow-hidden">
      <div className="bg-card/80 backdrop-blur-sm p-6 md:p-8 rounded-t-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Generate Your Kundali
        </h1>
        
        {/* Progress steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center z-10 border-2 transition-colors ${
                  currentStep >= index
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-muted border-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute h-[2px] top-5 left-[50%] w-full transition-colors ${
                    currentStep > index ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
              
              <span
                className={`text-sm mt-2 text-center hidden sm:block ${
                  currentStep >= index ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Form content */}
      <div className="bg-card/95 backdrop-blur-sm p-6 md:p-8 rounded-b-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <PersonalInfoStep
                name={formData.name}
                email={formData.email}
                errors={errors}
                updateFormData={handleUpdateFormData}
              />
            )}
            {currentStep === 1 && (
              <BirthDetailsStep
                birthDate={formData.birthDate}
                birthTime={formData.birthTime}
                errors={errors}
                updateFormData={handleUpdateFormData}
              />
            )}
            {currentStep === 2 && (
              <LocationStep
                birthCity={formData.birthCity}
                birthCountry={formData.birthCountry}
                latitude={formData.latitude}
                longitude={formData.longitude}
                errors={errors}
                updateFormData={handleUpdateFormData}
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Form navigation */}
        <div className="flex flex-wrap justify-between mt-8 gap-4">
          <div className="flex gap-2">
            {currentStep > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveProgress}
              className="gap-2"
            >
              <Save className="h-4 w-4" /> Save Progress
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={handleNext}
              className="gap-2"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}{" "}
              {currentStep < steps.length - 1 && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}