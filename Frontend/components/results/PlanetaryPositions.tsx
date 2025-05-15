"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface PlanetaryPositionsProps {
  isLoading: boolean;
}

// Placeholder data - would be calculated from actual birth details
const planetaryData = [
  { planet: "Sun", sign: "Taurus", degree: "15° 42'", house: 1, retrograde: false },
  { planet: "Moon", sign: "Pisces", degree: "28° 17'", house: 11, retrograde: false },
  { planet: "Mars", sign: "Capricorn", degree: "09° 03'", house: 9, retrograde: false },
  { planet: "Mercury", sign: "Taurus", degree: "20° 58'", house: 1, retrograde: false },
  { planet: "Jupiter", sign: "Scorpio", degree: "07° 16'", house: 7, retrograde: true },
  { planet: "Venus", sign: "Gemini", degree: "02° 34'", house: 2, retrograde: false },
  { planet: "Saturn", sign: "Capricorn", degree: "24° 51'", house: 9, retrograde: true },
  { planet: "Rahu", sign: "Cancer", degree: "06° 10'", house: 3, retrograde: true },
  { planet: "Ketu", sign: "Capricorn", degree: "06° 10'", house: 9, retrograde: true },
];

export default function PlanetaryPositions({ isLoading }: PlanetaryPositionsProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Planetary Positions</CardTitle>
          <CardDescription>
            The positions of planets at the time of your birth, showing their signs, degrees, and houses
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="w-full h-12" />
              <Skeleton className="w-full h-32" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Planet</TableHead>
                  <TableHead>Sign</TableHead>
                  <TableHead>Degree</TableHead>
                  <TableHead>House</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planetaryData.map((planet, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{planet.planet}</TableCell>
                    <TableCell>{planet.sign}</TableCell>
                    <TableCell>{planet.degree}</TableCell>
                    <TableCell>{planet.house}</TableCell>
                    <TableCell>
                      {planet.retrograde ? (
                        <span className="text-primary">Retrograde</span>
                      ) : (
                        <span className="text-muted-foreground">Direct</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Planetary Influences</CardTitle>
            <CardDescription>
              The most significant planetary influences in your chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Saturn in 9th House</h3>
                  <p className="text-muted-foreground">
                    Saturn placed in the 9th house brings a structured and disciplined approach to higher learning, philosophy, and spiritual pursuits. You may experience delays in higher education or traveling, but ultimately gain deeper, more practical wisdom.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Moon in Pisces</h3>
                  <p className="text-muted-foreground">
                    With Moon in Pisces, you have a deeply sensitive and empathetic emotional nature. Your intuition is highly developed, and you may experience moments of spiritual insight and connection. Creative pursuits help channel your rich inner world.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Jupiter Retrograde</h3>
                  <p className="text-muted-foreground">
                    Retrograde Jupiter suggests an introspective relationship with growth, wisdom, and abundance. You may need to revisit past learnings to fully embrace expansion in this lifetime. Personal philosophy develops through internal reflection rather than external teachings.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Planetary Aspects</CardTitle>
            <CardDescription>
              Important aspects between planets in your chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Sun conjunct Mercury</h3>
                  <p className="text-muted-foreground">
                    This conjunction brings sharp intellect and strong communication skills. Your thoughts and identity are closely aligned, making you articulate in expressing your core self. You may excel in intellectual pursuits that showcase your unique perspective.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Mars square Jupiter</h3>
                  <p className="text-muted-foreground">
                    This challenging aspect creates tension between your drive (Mars) and your desire for expansion (Jupiter). While giving you tremendous energy and enthusiasm, it can lead to overconfidence or taking on more than you can handle. Learning to channel this dynamic energy constructively is key.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Ketu conjunct Saturn</h3>
                  <p className="text-muted-foreground">
                    This powerful conjunction suggests a karmic relationship with discipline, limitations, and responsibility. You may feel simultaneously detached from worldly ambitions yet bound by duties. This aspect often brings spiritual wisdom through worldly challenges.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center text-sm text-muted-foreground mt-8">
        <p>* This is placeholder data for demonstration purposes. The actual planetary positions would be calculated based on your precise birth details.</p>
      </div>
    </div>
  );
}