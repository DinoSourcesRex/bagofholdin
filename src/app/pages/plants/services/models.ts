export interface Plant {
  name: string;
  description: string;
  locations: Location[];
  uses?: string[];
  rolls?: string[];
  statblock?: string;
}

// todo: do we need enums for these?
export interface Location {
  location: string;
  rarity: string;
}
