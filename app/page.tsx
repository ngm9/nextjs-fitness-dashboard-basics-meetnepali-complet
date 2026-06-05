import WorkoutDashboard from './workout-dashboard';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>FitTrack Workout Summary</h1>
      <WorkoutDashboard />
    </main>
  );
}
