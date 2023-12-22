import { Program } from '../models/workout';
export const ALPHA_SCHEDULE: Program = {
  schedule: [
    {
      week: 1,
      workouts: [
        {
          id: 1,
          name: 'Cardio',
          day: 1,
          value: 'barely',
        },
        {
          id: 2,
          name: 'Speed 1.0',
          day: 2,
          value: 'nailed',
        },
        {
          id: 3,
          name: 'Total Body Circuit',
          day: 3,
          value: 'skipped',
        },
        {
          id: 4,
          name: 'Ab Intervals',
          day: 4,
          value: 'barely',
        },
        {
          id: 5,
          name: 'Lower Focus',
          day: 5,
          value: 'barely',
        },
        {
          id: 6,
          name: 'Rest',
          day: 6,
          value: 'barely',
        },
        {
          id: 7,
          name: 'Rest',
          day: 7,
          value: 'barely',
        },
      ],
    },
    {
      week: 2,
      workouts: [
        {
          id: 8,
          name: 'Cardio',
          day: 8,
          value: 'barely',
        },
        {
          id: 9,
          name: 'Speed 1.0',
          day: 9,
          value: 'scheduled',
        },
        // Continue this pattern for the rest of the workouts
      ],
    },
    // Continue this pattern for the rest of the weeks
  ],
};
