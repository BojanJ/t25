import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { Workout } from '../../models/workout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  constructor(public elementRef: ElementRef) {}
}
