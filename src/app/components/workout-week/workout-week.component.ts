import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { Schedule } from '../../models/workout';
import { WorkoutItemComponent } from '../workout-item/workout-item.component';

@Component({
  selector: 'app-workout-week',
  standalone: true,
  imports: [CommonModule, WorkoutItemComponent],
  templateUrl: './workout-week.component.html',
  styleUrl: './workout-week.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutWeekComponent {
  @Input()
  week!: Schedule;

  constructor(public elementRef: ElementRef) {}
}
