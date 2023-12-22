import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ALPHA_SCHEDULE } from '../../data/alpha-schedule';
import { WorkoutItemComponent } from '../workout-item/workout-item.component';
import { WorkoutWeekComponent } from '../workout-week/workout-week.component';

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

  ngAfterViewInit() {
    this.scrollToScheduledWeek();
  }

  scrollToScheduledWeek() {
    const scheduledWeekComponent = this.weekComponents.find((weekComponent) =>
      weekComponent.week.workouts.some(
        (workout) => workout.value === 'scheduled'
      )
    );
    scheduledWeekComponent?.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
