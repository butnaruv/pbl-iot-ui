import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-measurement',
  templateUrl: './health-measurement.component.html',
  styleUrls: ['./health-measurement.component.css']
})
export class HealthMeasurementComponent {
  constructor(private router: Router) { }
  isClicked = false;
  enterMenu(): void {
    console.log("test");
    this.isClicked = !this.isClicked;
  }
}
