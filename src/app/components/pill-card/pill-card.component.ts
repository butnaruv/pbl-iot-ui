import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill-card',
  templateUrl: './pill-card.component.html',
  styleUrls: ['./pill-card.component.css']
})
export class PillCardComponent {
  @Input() name!: String;
  @Input() hour!: String;
}
