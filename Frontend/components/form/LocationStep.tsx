"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

interface LocationStepProps {
  birthCity: string;
  birthCountry: string;
  latitude: number | null;
  longitude: number | null;
  errors: Record<string, string>;
  updateFormData: (field: string, value: any) => void;
}

// Mock location search function (in a real app, this would use Google Places API)
const searchLocations = async (query: string): Promise<any[]> => {
  // This is a mock function - it would normally call an API
  if (!query) return [];
  
  const mockData = [
    { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060 },
    { city: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
    { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
    { city: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777 },
    { city: "Delhi", country: "India", lat: 28.7041, lng: 77.1025 },
    { city: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050 },
  ];
  
  // Filter based on input
  return mockData.filter(
    (location) =>
      location.city.toLowerCase().includes(query.toLowerCase()) ||
      location.country.toLowerCase().includes(query.toLowerCase())
  );
};

export default function LocationStep({
  birthCity,
  birthCountry,
  latitude,
  longitude,
  errors,
  updateFormData,
}: LocationStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchQuery.length > 2) {
        setSearching(true);
        const results = await searchLocations(searchQuery);
        setSearchResults(results);
        setSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleLocationSelect = (location: any) => {
    updateFormData("birthCity", location.city);
    updateFormData("birthCountry", location.country);
    updateFormData("latitude", location.lat);
    updateFormData("longitude", location.lng);
    setSearchQuery(`${location.city}, ${location.country}`);
    setSearchResults([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Birth Location</h2>
      <p className="text-muted-foreground">
        Please enter the city and country where you were born.
      </p>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="locationSearch">Search for your birth location</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="locationSearch"
              type="text"
              placeholder="Search city or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            
            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-card rounded-md shadow-lg max-h-60 overflow-auto border">
                {searchResults.map((location, index) => (
                  <div
                    key={index}
                    className="p-3 cursor-pointer hover:bg-muted flex items-center"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{location.city}, {location.country}</span>
                  </div>
                ))}
              </div>
            )}
            
            {searching && (
              <div className="absolute z-10 w-full mt-1 bg-card rounded-md shadow-lg p-3 text-center border">
                Searching...
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Enter at least 3 characters to search for locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="birthCity">City</Label>
            <Input
              id="birthCity"
              type="text"
              value={birthCity}
              onChange={(e) => updateFormData("birthCity", e.target.value)}
              placeholder="City of birth"
              className={errors.birthCity ? "border-destructive" : ""}
            />
            {errors.birthCity && (
              <p className="text-sm text-destructive">{errors.birthCity}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthCountry">Country</Label>
            <Input
              id="birthCountry"
              type="text"
              value={birthCountry}
              onChange={(e) => updateFormData("birthCountry", e.target.value)}
              placeholder="Country of birth"
              className={errors.birthCountry ? "border-destructive" : ""}
            />
            {errors.birthCountry && (
              <p className="text-sm text-destructive">{errors.birthCountry}</p>
            )}
          </div>
        </div>
        
        {latitude && longitude && (
          <div className="text-sm text-muted-foreground">
            <p>Coordinates: {latitude.toFixed(4)}, {longitude.toFixed(4)}</p>
          </div>
        )}
      </div>
    </div>
  );
}