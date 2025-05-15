"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

interface BirthChartProps {
  isLoading: boolean;
}

export default function BirthChart({ isLoading }: BirthChartProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Birth Chart Visualization</CardTitle>
          <CardDescription>
            Your Vedic astrological birth chart (Kundali) showing planetary positions at birth
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="w-full aspect-square rounded-md" />
          ) : (
            <div className="relative w-full aspect-square bg-secondary/5 rounded-md border border-border flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.2)"
                  strokeWidth="1"
                />
                
                {/* Inner circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.2)"
                  strokeWidth="1"
                />
                
                {/* House divisions - North Indian style chart */}
                <line
                  x1="20"
                  y1="200"
                  x2="380"
                  y2="200"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="20"
                  x2="200"
                  y2="380"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="380"
                  y2="380"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="380"
                  x2="380"
                  y2="20"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                />
                
                {/* House numbers */}
                <text x="110" y="110" fill="hsl(var(--foreground))" fontSize="14">
                  1
                </text>
                <text x="290" y="110" fill="hsl(var(--foreground))" fontSize="14">
                  2
                </text>
                <text x="290" y="290" fill="hsl(var(--foreground))" fontSize="14">
                  3
                </text>
                <text x="110" y="290" fill="hsl(var(--foreground))" fontSize="14">
                  4
                </text>
                <text x="60" y="140" fill="hsl(var(--foreground))" fontSize="14">
                  12
                </text>
                <text x="260" y="140" fill="hsl(var(--foreground))" fontSize="14">
                  11
                </text>
                <text x="260" y="260" fill="hsl(var(--foreground))" fontSize="14">
                  10
                </text>
                <text x="60" y="260" fill="hsl(var(--foreground))" fontSize="14">
                  9
                </text>
                <text x="140" y="60" fill="hsl(var(--foreground))" fontSize="14">
                  5
                </text>
                <text x="340" y="60" fill="hsl(var(--foreground))" fontSize="14">
                  6
                </text>
                <text x="340" y="340" fill="hsl(var(--foreground))" fontSize="14">
                  7
                </text>
                <text x="140" y="340" fill="hsl(var(--foreground))" fontSize="14">
                  8
                </text>
                
                {/* Center title */}
                <text
                  x="200"
                  y="200"
                  fill="hsl(var(--foreground))"
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  Rasi Chart
                </text>
                
                {/* Placeholder planets - would be calculated based on actual birth data */}
                <text x="105" y="90" fill="hsl(var(--primary))" fontSize="12">
                  Su
                </text>
                <text x="305" y="120" fill="hsl(var(--secondary))" fontSize="12">
                  Mo
                </text>
                <text x="270" y="280" fill="hsl(var(--accent))" fontSize="12">
                  Ma
                </text>
                <text x="90" y="270" fill="hsl(var(--primary))" fontSize="12">
                  Me
                </text>
                <text x="50" y="150" fill="hsl(var(--secondary))" fontSize="12">
                  Ju
                </text>
                <text x="250" y="130" fill="hsl(var(--accent))" fontSize="12">
                  Ve
                </text>
                <text x="250" y="240" fill="hsl(var(--primary))" fontSize="12">
                  Sa
                </text>
                <text x="70" y="250" fill="hsl(var(--secondary))" fontSize="12">
                  Ra
                </text>
                <text x="160" y="70" fill="hsl(var(--accent))" fontSize="12">
                  Ke
                </text>
              </svg>
              
              <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
                *Placeholder chart visualization
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Chart Information</CardTitle>
          <CardDescription>
            Details about your birth chart configuration
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Ascendant (Lagna)</h3>
                <p className="text-lg">Taurus</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Moon Sign (Rashi)</h3>
                <p className="text-lg">Pisces</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Nakshatra (Lunar Mansion)</h3>
                <p className="text-lg">Revati</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Ayanamsa Used</h3>
                <p className="text-lg">Lahiri</p>
              </div>
              
              <Separator />
              
              <div className="text-sm text-muted-foreground">
                <p>This is a placeholder visualization. In a complete implementation, this would be based on precise astronomical calculations using your birth details.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}