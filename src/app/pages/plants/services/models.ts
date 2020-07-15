export interface Plant {
  name: string;
  description: string;
  locations: Location[];
  uses?: string[];
  rolls?: string[];
  statblock?: string;
}

export interface Location {
  location: string;
  rarity: string;
}
