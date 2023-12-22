export interface Workout {
  id: number;
  name: string;
  day: number;
  value: 'nailed' | 'barely' | 'skipped' | 'scheduled';
}

export interface Schedule {
  week: number;
  workouts: Workout[];
}

export interface Program {
  schedule: Schedule[];
}
