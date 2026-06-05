export interface Workout {
  id: number;
  name: string;
  duration: number; // in minutes
  calories: number;
  type: string;
  date: string; // ISO date string
}
