import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ALPHA_SCHEDULE } from '../../data/alpha-schedule';
import { WorkoutWeekComponent } from '../workout-week/workout-week.component';
import { Program } from '../../models/workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, WorkoutWeekComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  @ViewChildren(WorkoutWeekComponent)
  weekComponents!: QueryList<WorkoutWeekComponent>;
  schedule = ALPHA_SCHEDULE;

  constructor(private workoutService: WorkoutService) {
    this.workoutService.currentWorkout.subscribe((workout) => {
      if (workout === '') return;
      localStorage.setItem('schedule', JSON.stringify(this.schedule));
    });
  }

  ngOnInit() {
    const scheduleString: string | null = localStorage.getItem('schedule');
    if (scheduleString) {
      this.schedule = JSON.parse(scheduleString) as Program;
    }
  }

  ngAfterViewInit() {
    this.scrollToScheduledWeek();
  }

  scrollToScheduledWeek() {
    const scheduledWeekComponent = this.weekComponents.find(
      (weekComponent: { week: { workouts: any[] } }) =>
        weekComponent.week.workouts.some(
          (workout: { value: string }) => workout.value === 'scheduled'
        )
    );
    scheduledWeekComponent?.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
