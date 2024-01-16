import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails: boolean;
  timestamps = [];

  setDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.timestamps.push(new Date())
  }
}
