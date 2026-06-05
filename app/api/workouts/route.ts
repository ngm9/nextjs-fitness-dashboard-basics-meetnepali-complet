import { NextResponse } from 'next/server';
import { Workout } from '../../types';

const MOCK_WORKOUTS: Workout[] = [
  { id: 1, name: 'Morning Run', duration: 30, calories: 250, type: 'Cardio', date: '2024-06-09' },
  { id: 2, name: 'Lifting Session', duration: 45, calories: 350, type: 'Strength', date: '2024-06-08' },
  { id: 3, name: 'Yoga Flow', duration: 60, calories: 200, type: 'Flexibility', date: '2024-06-07' },
  { id: 4, name: 'HIIT', duration: 20, calories: 220, type: 'Cardio', date: '2024-06-06' },
  { id: 5, name: 'Cycling', duration: 50, calories: 400, type: 'Endurance', date: '2024-06-05' }
];

export async function GET() {
  return NextResponse.json(MOCK_WORKOUTS);
}
