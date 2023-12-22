import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ALPHA_SCHEDULE } from '../../data/alpha-schedule';
import { WorkoutItemComponent } from '../workout-item/workout-item.component';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, WorkoutItemComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  @ViewChildren(WorkoutItemComponent)
  workoutItems!: QueryList<WorkoutItemComponent>;
  schedule = ALPHA_SCHEDULE;

  ngAfterViewInit() {
    this.scrollToScheduledWorkout();
  }

  scrollToScheduledWorkout() {
    const scheduledWorkoutIndex = this.workoutItems
      .toArray()
      .findIndex((item) => item.workout.value === 'scheduled');
    if (scheduledWorkoutIndex > 0) {
      const previousWorkoutItem =
        this.workoutItems.toArray()[scheduledWorkoutIndex - 1];
      previousWorkoutItem.elementRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
