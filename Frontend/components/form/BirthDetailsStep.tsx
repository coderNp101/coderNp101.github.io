"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BirthDetailsStepProps {
  birthDate: Date | undefined;
  birthTime: string;
  errors: Record<string, string>;
  updateFormData: (field: string, value: any) => void;
}

export default function BirthDetailsStep({
  birthDate,
  birthTime,
  errors,
  updateFormData,
}: BirthDetailsStepProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Birth Details</h2>
      <p className="text-muted-foreground">
        Please provide your exact birth date and time for accurate Kundali generation.
      </p>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="birthDate">Birth Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground",
                  errors.birthDate && "border-destructive"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? format(birthDate, "PPP") : "Select your birth date"}
              </Button>
            </PopoverTrigger>
            {isClient && (
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={birthDate}
                  onSelect={(date) => updateFormData("birthDate", date)}
                  initialFocus
                  disabled={(date) => date > new Date()}
                />
              </PopoverContent>
            )}
          </Popover>
          {errors.birthDate && (
            <p className="text-sm text-destructive">{errors.birthDate}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthTime">Birth Time (24-hour format)</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="birthTime"
              type="time"
              value={birthTime}
              onChange={(e) => updateFormData("birthTime", e.target.value)}
              className={cn("pl-10", errors.birthTime && "border-destructive")}
            />
          </div>
          {errors.birthTime && (
            <p className="text-sm text-destructive">{errors.birthTime}</p>
          )}
          <p className="text-sm text-muted-foreground">
            Accurate birth time is crucial for precise Kundali calculation.
          </p>
        </div>
      </div>
    </div>
  );
}