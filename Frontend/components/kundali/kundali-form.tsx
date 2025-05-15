"use client";

import { useState } from "react";
import {
  CalendarIcon,
  Clock,
  MapPin,
  Languages,
  Sparkles,
  BookOpen,
  Check,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import KundaliResults from "@/components/kundali/kundali-results";

const timezones = [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:30",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:30",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+03:30",
  "UTC+04:00",
  "UTC+04:30",
  "UTC+05:00",
  "UTC+05:30",
  "UTC+05:45",
  "UTC+06:00",
  "UTC+06:30",
  "UTC+07:00",
  "UTC+08:00",
  "UTC+08:45",
  "UTC+09:00",
  "UTC+09:30",
  "UTC+10:00",
  "UTC+10:30",
  "UTC+11:00",
  "UTC+12:00",
  "UTC+12:45",
  "UTC+13:00",
  "UTC+14:00",
];

const KundaliForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: undefined as Date | undefined,
    time: "",
    isBS: false,
    place: "",
    latitude: "",
    longitude: "",
    timezone: "UTC+05:45", // Default for Nepal
    language: "english",
    showChart: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would call an API to generate the Kundali
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <BookOpen className="mr-2 h-5 w-5 text-amber-500" />
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Birth Date and Time */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <CalendarIcon className="mr-2 h-5 w-5 text-amber-500" />
              Birth Date and Time
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <div className="flex items-center space-x-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? (
                            format(formData.date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange("date", date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="calendar-type">BS</Label>
                      <Switch
                        id="calendar-type"
                        checked={formData.isBS}
                        onCheckedChange={(checked) =>
                          handleInputChange("isBS", checked)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time of Birth</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      required
                    />
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Location */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <MapPin className="mr-2 h-5 w-5 text-amber-500" />
              Birth Location
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="place">Place of Birth</Label>
                <Input
                  id="place"
                  placeholder="Search for a city or location"
                  value={formData.place}
                  onChange={(e) => handleInputChange("place", e.target.value)}
                  required
                />
              </div>

              {/* Map Placeholder */}
              <div className="relative mt-4 h-[200px] rounded-md border bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Map integration would appear here
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    placeholder="e.g., 27.7172"
                    value={formData.latitude}
                    onChange={(e) =>
                      handleInputChange("latitude", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    placeholder="e.g., 85.3240"
                    value={formData.longitude}
                    onChange={(e) =>
                      handleInputChange("longitude", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={formData.timezone}
                    onValueChange={(value) =>
                      handleInputChange("timezone", value)
                    }
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Output Options */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <Sparkles className="mr-2 h-5 w-5 text-amber-500" />
              Output Options
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="language">Output Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) =>
                    handleInputChange("language", value)
                  }
                >
                  <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="nepali">Nepali</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="show-chart"
                  checked={formData.showChart}
                  onCheckedChange={(checked) =>
                    handleInputChange("showChart", checked)
                  }
                />
                <Label htmlFor="show-chart">Show Kundali Chart</Label>
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600"
          size="lg"
        >
          Generate Kundali
        </Button>
      </form>

      {isSubmitted && (
        <div className="mt-12">
          <KundaliResults formData={formData} />
        </div>
      )}
    </div>
  );
};

export default KundaliForm;