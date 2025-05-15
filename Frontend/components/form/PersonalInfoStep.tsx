"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoStepProps {
  name: string;
  email: string;
  errors: Record<string, string>;
  updateFormData: (field: string, value: any) => void;
}

export default function PersonalInfoStep({
  name,
  email,
  errors,
  updateFormData,
}: PersonalInfoStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-muted-foreground">
        Please enter your name and email address to begin generating your Kundali.
      </p>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => updateFormData("name", e.target.value)}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
          <p className="text-sm text-muted-foreground">
            We'll use this to send you your Kundali results and analysis.
          </p>
        </div>
      </div>
    </div>
  );
}