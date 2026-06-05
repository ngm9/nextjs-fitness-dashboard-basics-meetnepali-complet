import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Simulate logging: Accepts {workoutId: number}; responds success after 500ms
  await new Promise((res) => setTimeout(res, 500));
  return NextResponse.json({ success: true });
}
