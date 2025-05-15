"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronRight, Calendar, BarChart3, Clock9, Home, Plane as Planet } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Sample placeholder data
const planets = [
  { planet: "Sun", sign: "Aries", house: 1, degree: "15° 23'", retrograde: false },
  { planet: "Moon", sign: "Taurus", house: 2, degree: "8° 45'", retrograde: false },
  { planet: "Mercury", sign: "Pisces", house: 12, degree: "2° 18'", retrograde: true },
  { planet: "Venus", sign: "Aquarius", house: 11, degree: "25° 07'", retrograde: false },
  { planet: "Mars", sign: "Capricorn", house: 10, degree: "19° 34'", retrograde: false },
  { planet: "Jupiter", sign: "Leo", house: 5, degree: "11° 42'", retrograde: false },
  { planet: "Saturn", sign: "Scorpio", house: 8, degree: "28° 56'", retrograde: true },
  { planet: "Rahu", sign: "Virgo", house: 6, degree: "3° 12'", retrograde: false },
  { planet: "Ketu", sign: "Pisces", house: 12, degree: "3° 12'", retrograde: false },
];

const houses = [
  { house: 1, sign: "Aries", planets: ["Sun"] },
  { house: 2, sign: "Taurus", planets: ["Moon"] },
  { house: 3, sign: "Gemini", planets: [] },
  { house: 4, sign: "Cancer", planets: [] },
  { house: 5, sign: "Leo", planets: ["Jupiter"] },
  { house: 6, sign: "Virgo", planets: ["Rahu"] },
  { house: 7, sign: "Libra", planets: [] },
  { house: 8, sign: "Scorpio", planets: ["Saturn"] },
  { house: 9, sign: "Sagittarius", planets: [] },
  { house: 10, sign: "Capricorn", planets: ["Mars"] },
  { house: 11, sign: "Aquarius", planets: ["Venus"] },
  { house: 12, sign: "Pisces", planets: ["Mercury", "Ketu"] },
];

const dashas = [
  { 
    period: "Ketu Mahadasha", 
    startDate: "Jan 2020", 
    endDate: "Jan 2027", 
    description: "A period of spiritual growth and introspection. There may be sudden changes and detachments from material desires. Good for meditation and inner work." 
  },
  { 
    period: "Venus Mahadasha", 
    startDate: "Jan 2027", 
    endDate: "Jan 2047", 
    description: "A period focused on relationships, creativity, and comforts. Favorable for marriage, arts, and financial growth if Venus is well-placed in the chart." 
  },
  { 
    period: "Sun Mahadasha", 
    startDate: "Jan 2047", 
    endDate: "Jan 2053", 
    description: "A period highlighting leadership, authority, and self-identity. May bring recognition, career advancement, and improved relationship with father figures." 
  },
];

interface KundaliResultsProps {
  formData: {
    name: string;
    date: Date | undefined;
    place: string;
    timezone: string;
    [key: string]: any;
  };
}

const KundaliResults = ({ formData }: KundaliResultsProps) => {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-card p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          <Star className="mb-2 inline-block h-6 w-6 text-amber-500" />
          <span className="ml-2">Kundali Analysis</span>
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 rounded-md border bg-muted/50 p-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Birth Date</p>
              <p className="text-sm text-muted-foreground">
                {formData.date ? formData.date.toLocaleDateString() : "Not specified"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md border bg-muted/50 p-3">
            <Clock9 className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Birth Time</p>
              <p className="text-sm text-muted-foreground">{formData.time || "Not specified"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md border bg-muted/50 p-3">
            <Home className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Birth Place</p>
              <p className="text-sm text-muted-foreground">{formData.place || "Not specified"}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="planets">Planets</TabsTrigger>
            <TabsTrigger value="houses">Houses</TabsTrigger>
            <TabsTrigger value="dashas">Dashas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-amber-500" />
                  Personal Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Your Kundali indicates a strong influence of {planets[0].planet} in {planets[0].sign}, positioned in the {planets[0].house}st house. This suggests a natural leadership ability and creative energy that can be channeled into ambitious pursuits.
                </p>
                <p className="mb-4 text-muted-foreground">
                  The {planets[1].planet} in {planets[1].sign} in your {planets[1].house}nd house indicates emotional stability and a practical approach to material comforts. You likely value security and may have a talent for financial matters.
                </p>
                <p className="text-muted-foreground">
                  Your ascendant (Lagna) is in {houses[0].sign}, giving you a pioneering spirit and courageous approach to life. You may be seen as dynamic, assertive, and independent by others.
                </p>
              </CardContent>
            </Card>

            {formData.showChart && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Planet className="mr-2 h-5 w-5 text-amber-500" />
                    Kundali Chart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-md border">
                    <div className="grid h-full w-full grid-cols-3 grid-rows-3 absolute">
                      <div className="border border-border"></div>
                      <div className="border border-border">{houses[0].planets.join(", ")}</div>
                      <div className="border border-border">{houses[1].planets.join(", ")}</div>
                      <div className="border border-border">{houses[11].planets.join(", ")}</div>
                      <div className="border border-border flex items-center justify-center text-xs text-muted-foreground">
                        Chart Placeholder
                      </div>
                      <div className="border border-border">{houses[2].planets.join(", ")}</div>
                      <div className="border border-border">{houses[10].planets.join(", ")}</div>
                      <div className="border border-border">{houses[9].planets.join(", ")}</div>
                      <div className="border border-border">{houses[3].planets.join(", ")}</div>
                    </div>
                    <div className="grid h-full w-full grid-cols-4 grid-rows-4 absolute">
                      <div className="col-start-2 col-span-2 row-start-2 row-span-2 border border-dashed border-muted-foreground flex items-center justify-center">
                        {formData.name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="planets">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Planet className="mr-2 h-5 w-5 text-amber-500" />
                  Planetary Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Planet</TableHead>
                      <TableHead>Sign</TableHead>
                      <TableHead>House</TableHead>
                      <TableHead>Degree</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {planets.map((planet, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {planet.planet}
                        </TableCell>
                        <TableCell>{planet.sign}</TableCell>
                        <TableCell>{planet.house}</TableCell>
                        <TableCell>{planet.degree}</TableCell>
                        <TableCell>
                          {planet.retrograde ? (
                            <span className="text-amber-500">Retrograde</span>
                          ) : (
                            <span className="text-muted-foreground">Direct</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="houses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5 text-amber-500" />
                  House Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>House</TableHead>
                      <TableHead>Sign</TableHead>
                      <TableHead>Planets</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {houses.map((house, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {house.house}
                        </TableCell>
                        <TableCell>{house.sign}</TableCell>
                        <TableCell>
                          {house.planets.length ? house.planets.join(", ") : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dashas">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-amber-500" />
                  Dasha Periods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {dashas.map((dasha, index) => (
                    <AccordionItem key={index} value={`dasha-${index}`}>
                      <AccordionTrigger>
                        <div className="flex items-center text-left">
                          <span className="font-medium">{dasha.period}</span>
                          <span className="ml-4 text-sm text-muted-foreground">
                            {dasha.startDate} - {dasha.endDate}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{dasha.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KundaliResults;