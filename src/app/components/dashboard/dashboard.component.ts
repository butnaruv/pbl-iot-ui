import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }
  isClicked = false;
  enterMenu(): void {
    console.log("test");
    this.isClicked = !this.isClicked;
  }
}
