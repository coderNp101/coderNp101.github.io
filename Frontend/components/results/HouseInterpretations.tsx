"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

interface HouseInterpretationsProps {
  isLoading: boolean;
}

// Placeholder house data
const houseData = [
  {
    house: 1,
    title: "First House (Ascendant/Lagna)",
    sign: "Taurus",
    lord: "Venus",
    planets: ["Sun", "Mercury"],
    interpretation: "With Taurus rising, you present yourself as practical, reliable, and grounded. You likely have a strong physical presence and appreciate beauty and comfort. Venus as your chart ruler gives you a natural charm and diplomatic nature. The presence of Sun and Mercury in this house enhances your self-expression and communication abilities, making you articulate in expressing your identity.",
    lifeAreas: "Self-image, physical appearance, personal approach to life, first impressions you make on others",
  },
  {
    house: 2,
    title: "Second House",
    sign: "Gemini",
    lord: "Mercury",
    planets: ["Venus"],
    interpretation: "Your second house in Gemini suggests versatility in how you build resources and manage finances. You may have multiple streams of income or frequently change how you make money. With Venus placed here, you likely find financial security through creative pursuits, social connections, or aesthetic fields. You enjoy spending on beautiful things and experiences that stimulate your mind.",
    lifeAreas: "Material resources, earned income, possessions, values, speech, self-worth",
  },
  {
    house: 3,
    title: "Third House",
    sign: "Cancer",
    lord: "Moon",
    planets: ["Rahu"],
    interpretation: "With Cancer in your third house, your communication style is likely empathetic and nurturing. You connect emotionally with siblings and neighbors. The presence of Rahu here intensifies your curiosity and desire for knowledge, perhaps pushing you toward unconventional learning or communication methods. You may be drawn to writing or speaking about emotional or family-related topics.",
    lifeAreas: "Communication, siblings, neighbors, short trips, early education, courage",
  },
  // Additional houses would be included in a complete implementation
];

export default function HouseInterpretations({ isLoading }: HouseInterpretationsProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>House Interpretations</CardTitle>
          <CardDescription>
            How the twelve houses of your birth chart influence different areas of your life
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="w-full h-64" />
          ) : (
            <Tabs defaultValue="house1" className="w-full">
              <TabsList className="w-full grid grid-cols-4 md:grid-cols-6">
                {Array.from({ length: 12 }, (_, i) => (
                  <TabsTrigger key={i} value={`house${i + 1}`}>
                    House {i + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {houseData.map((house) => (
                <TabsContent key={house.house} value={`house${house.house}`} className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-xl font-medium">{house.title}</h3>
                    <p className="text-muted-foreground">Sign: {house.sign} | Lord: {house.lord}</p>
                  </div>
                  
                  {house.planets.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Planets in this house:</h4>
                      <p>{house.planets.join(", ")}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Life areas influenced:</h4>
                    <p>{house.lifeAreas}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Interpretation:</h4>
                    <p className="mt-2">{house.interpretation}</p>
                  </div>
                </TabsContent>
              ))}
              
              {/* Placeholder content for houses without detailed data */}
              {Array.from({ length: 12 }, (_, i) => i + 1)
                .filter((num) => !houseData.some((house) => house.house === num))
                .map((houseNum) => (
                  <TabsContent key={houseNum} value={`house${houseNum}`}>
                    <div className="p-8 text-center">
                      <p className="text-muted-foreground">
                        Detailed interpretation for House {houseNum} would appear here in the complete implementation.
                      </p>
                    </div>
                  </TabsContent>
                ))}
            </Tabs>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Strengths in Your Chart</CardTitle>
            <CardDescription>
              Positive house combinations and placements
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Strong 1st House</h3>
                  <p className="text-muted-foreground">
                    The presence of Sun and Mercury in your first house gives you a strong sense of self and excellent communication skills. You project confidence and clarity, making strong first impressions.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Venus in 2nd House</h3>
                  <p className="text-muted-foreground">
                    This placement suggests financial abundance, especially through creative or aesthetic pursuits. You have a natural ability to attract resources and likely value beautiful possessions.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Areas for Growth</CardTitle>
            <CardDescription>
              Challenging house placements that offer opportunities for development
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="w-full h-24" />
                <Skeleton className="w-full h-24" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Rahu in 3rd House</h3>
                  <p className="text-muted-foreground">
                    While this placement enhances your curiosity and communication skills, it may create restlessness or anxiety about gathering information. Learning to focus your mental energy constructively will be key to your growth.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Empty 7th House</h3>
                  <p className="text-muted-foreground">
                    With no planets in your 7th house of relationships, you may need to consciously develop your understanding of partnerships. Look to the sign on this house cusp and its ruler for guidance on relationship dynamics.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center text-sm text-muted-foreground mt-4">
        <p>* This is placeholder data for demonstration purposes. Complete house interpretations would be based on your actual birth chart.</p>
      </div>
    </div>
  );
}