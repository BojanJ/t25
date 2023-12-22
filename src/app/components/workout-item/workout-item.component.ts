import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workout } from '../../models/workout';

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
}
