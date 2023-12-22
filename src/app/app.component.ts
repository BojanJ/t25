import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, WorkoutListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {

  @ViewChild('headerComponent', { read: ElementRef })
  headerComponent!: ElementRef;

  headerHeight: number = 0;

  ngAfterViewInit() {
    this.headerHeight = this.headerComponent.nativeElement.offsetHeight;
    console.log('this.headerHeight: ', this.headerHeight);
  }
}
