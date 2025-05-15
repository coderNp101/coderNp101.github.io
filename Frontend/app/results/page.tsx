"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share2, Printer } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import BirthChart from "@/components/results/BirthChart";
import PlanetaryPositions from "@/components/results/PlanetaryPositions";
import HouseInterpretations from "@/components/results/HouseInterpretations";
import DashaPredictions from "@/components/results/DashaPredictions";

export default function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Get user data from localStorage or defaults
      const formData = localStorage.getItem("kundaliFormData");
      if (formData) {
        const parsedData = JSON.parse(formData);
        setUserName(parsedData.name || "User");
      } else {
        setUserName("User");
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {isLoading ? (
            <Skeleton className="w-64 h-10" />
          ) : (
            `${userName}'s Vedic Birth Chart`
          )}
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          {isLoading ? (
            <Skeleton className="w-full h-6 mb-2" />
          ) : (
            "Your personalized Kundali analysis and interpretations powered by JyotishAI"
          )}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" /> Share
        </Button>
        <Button variant="outline" className="gap-2">
          <Printer className="h-4 w-4" /> Print
        </Button>
      </div>
      
      <Tabs defaultValue="birthchart" className="w-full">
        <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="birthchart">Birth Chart</TabsTrigger>
          <TabsTrigger value="planets">Planetary Positions</TabsTrigger>
          <TabsTrigger value="houses">House Interpretations</TabsTrigger>
          <TabsTrigger value="dashas">Dasha Predictions</TabsTrigger>
        </TabsList>
        
        <div className="mt-8">
          <TabsContent value="birthchart">
            <BirthChart isLoading={isLoading} />
          </TabsContent>
          
          <TabsContent value="planets">
            <PlanetaryPositions isLoading={isLoading} />
          </TabsContent>
          
          <TabsContent value="houses">
            <HouseInterpretations isLoading={isLoading} />
          </TabsContent>
          
          <TabsContent value="dashas">
            <DashaPredictions isLoading={isLoading} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}