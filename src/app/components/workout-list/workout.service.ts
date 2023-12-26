import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workoutSource = new BehaviorSubject<string>('');
  currentWorkout = this.workoutSource.asObservable();

  constructor() {}

  changeWorkout(workout: string) {
    this.workoutSource.next(workout);
  }
}
