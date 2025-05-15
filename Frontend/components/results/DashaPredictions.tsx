"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline, TimelineItem, TimelineItemContent, TimelineItemTitle } from "@/components/ui/timeline";
import { Skeleton } from "@/components/ui/skeleton";

interface DashaPredictionsProps {
  isLoading: boolean;
}

// This is a custom component for the timeline
function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

function TimelineItem({ children }: { children: React.ReactNode }) {
  return <div className="border-l-2 border-muted pl-6 pb-6 ml-3 relative">{children}</div>;
}

function TimelineItemTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="absolute left-[-8px] h-4 w-4 rounded-full bg-primary"></div>
      <h3 className="text-lg font-medium">{children}</h3>
    </div>
  );
}

function TimelineItemContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-muted-foreground">{children}</div>;
}

// Placeholder Dasha data
const dashaData = [
  {
    planet: "Venus",
    period: "Apr 2022 - Apr 2042",
    prediction: "The Venus Mahadasha is a generally favorable period focusing on relationships, creativity, comfort, and sensual pleasures. During these 20 years, you'll likely experience growth in artistic endeavors, relationships, and financial stability. Venus's energy brings harmony and balance, but watch for overindulgence or excessive attachment to material comforts.",
    subperiods: [
      {
        title: "Venus-Venus",
        period: "Apr 2022 - Oct 2025",
        prediction: "A time of heightened creativity, relationship harmony, and possible financial growth. Artistic pursuits flourish, and you may find yourself particularly attuned to beauty and aesthetics.",
      },
      {
        title: "Venus-Sun",
        period: "Oct 2025 - Oct 2026",
        prediction: "Your creative abilities gain recognition and visibility. Leadership opportunities within artistic or relationship-oriented contexts may emerge. A good period for self-expression through Venusian channels.",
      },
      {
        title: "Venus-Moon",
        period: "Oct 2026 - Jun 2028",
        prediction: "Emotional fulfillment through relationships and artistic expression. Your intuition regarding beauty and harmony is heightened. A favorable time for domestic happiness and emotional security.",
      },
    ],
  },
  {
    planet: "Sun",
    period: "Apr 2042 - Apr 2048",
    prediction: "The Sun Mahadasha brings focus to your core identity, vitality, and self-expression. This 6-year period highlights leadership abilities and may bring recognition or advancement in career. It's a time to shine in areas related to your authentic self, though ego-related challenges may need balancing.",
    subperiods: [
      {
        title: "Sun-Sun",
        period: "Apr 2042 - Aug 2042",
        prediction: "A brief but powerful period of self-realization and vitality. Your essential nature becomes more apparent, and you may feel a strong drive to express your authentic self.",
      },
      {
        title: "Sun-Moon",
        period: "Aug 2042 - Feb 2043",
        prediction: "Balance between self-expression and emotional needs. Your leadership may take on a more nurturing quality, and you might find yourself in positions where you care for others while still maintaining your authority.",
      },
      {
        title: "Sun-Mars",
        period: "Feb 2043 - Jun 2043",
        prediction: "Energy and drive combine with leadership abilities. A dynamic period for initiating projects and asserting your will. Watch for potential conflicts due to heightened assertiveness.",
      },
    ],
  },
];

export default function DashaPredictions({ isLoading }: DashaPredictionsProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Dasha Predictions</CardTitle>
          <CardDescription>
            Vedic astrology's unique timing system predicting different life periods
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="w-full h-12" />
              <Skeleton className="w-full h-64" />
            </div>
          ) : (
            <>
              <div className="mb-6 p-4 bg-secondary/10 rounded-md">
                <h3 className="font-medium mb-2">About Dashas</h3>
                <p className="text-sm text-muted-foreground">
                  Dashas are Vedic astrology's predictive timing system that divides your life into planetary periods and sub-periods. Each planet rules for a specific duration, influencing life events and experiences according to its nature and position in your birth chart.
                </p>
              </div>
              
              <Tabs defaultValue="venus" className="w-full">
                <TabsList className="w-full">
                  {dashaData.map((dasha) => (
                    <TabsTrigger key={dasha.planet} value={dasha.planet.toLowerCase()}>
                      {dasha.planet} Dasha
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {dashaData.map((dasha) => (
                  <TabsContent 
                    key={dasha.planet} 
                    value={dasha.planet.toLowerCase()} 
                    className="space-y-6 mt-6"
                  >
                    <div>
                      <h3 className="text-xl font-medium">
                        {dasha.planet} Mahadasha ({dasha.period})
                      </h3>
                      <p className="mt-2">{dasha.prediction}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4">Antardashas (Sub-periods)</h4>
                      <Timeline>
                        {dasha.subperiods.map((subperiod, index) => (
                          <TimelineItem key={index}>
                            <TimelineItemTitle>
                              {subperiod.title} ({subperiod.period})
                            </TimelineItemTitle>
                            <TimelineItemContent>
                              {subperiod.prediction}
                            </TimelineItemContent>
                          </TimelineItem>
                        ))}
                      </Timeline>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Dasha Influences</CardTitle>
            <CardDescription>
              How your present planetary period is affecting your life
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
                  <h3 className="text-lg font-medium">Venus-Venus (Apr 2022 - Oct 2025)</h3>
                  <p className="text-muted-foreground">
                    You're currently in a double Venus period, amplifying themes of harmony, creativity, relationships, and material comforts. This is an excellent time for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                    <li>Developing artistic talents and creative pursuits</li>
                    <li>Building harmonious relationships and partnerships</li>
                    <li>Enhancing your surroundings and creating beauty</li>
                    <li>Finding pleasure and joy in sensory experiences</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Transitions</CardTitle>
            <CardDescription>
              Preparing for your next planetary period
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
                  <h3 className="text-lg font-medium">Venus-Sun (Oct 2025 - Oct 2026)</h3>
                  <p className="text-muted-foreground">
                    As you transition to the Venus-Sun period in October 2025, prepare for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                    <li>Increased visibility and recognition for creative work</li>
                    <li>Greater focus on self-expression within relationships</li>
                    <li>Potential leadership roles in artistic or social contexts</li>
                    <li>Finding balance between ego and harmony</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center text-sm text-muted-foreground mt-4">
        <p>* This is placeholder data for demonstration purposes. Actual Dasha predictions would be calculated based on your precise birth details and chart placements.</p>
      </div>
    </div>
  );
}