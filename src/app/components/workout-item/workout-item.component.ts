import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workout } from '../../models/workout';
import { WorkoutService } from '../workout-list/workout.service';

@Component({
  selector: 'app-workout-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './workout-item.component.html',
  styleUrl: './workout-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutItemComponent {
  @Input()
  workout!: Workout;

  constructor(private workoutService: WorkoutService) {}

  onWorkoutChange() {
    console.log('Workout changed to: ', this.workout);
    this.workoutService.changeWorkout(this.workout.name);
  }
}
