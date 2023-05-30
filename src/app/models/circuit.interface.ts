export interface Circuit {
  id: number;
  name: string;
  image: string;
  competition: Competition;
  first_grand_prix: number;
  laps: number;
  length: string;
  race_distance: string;
  lap_record: LapRecord;
  capacity: number;
  opened: number;
  owner: string | null;
}

interface Competition {
  id: number;
  name: string;
  location: Location;
}

interface Location {
  country: string;
  city: string;
}

interface LapRecord {
  time: string;
  driver: string;
  year: number;
}
