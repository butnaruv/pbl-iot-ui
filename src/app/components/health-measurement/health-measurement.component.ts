import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventmqttService } from 'src/app/services/mqtt/eventmqtt.service';

@Component({
  selector: 'app-health-measurement',
  templateUrl: './health-measurement.component.html',
  styleUrls: ['./health-measurement.component.css']
})
export class HealthMeasurementComponent implements OnInit {
  constructor(
    private router: Router,
    private eventMqtt: EventmqttService) { }

  isClicked = false;
  events!: any[];
  deviceId!: string;
  subscription!: Subscription;

  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscribeToTopic() {
    this.subscription = this.eventMqtt.topic(this.deviceId)
      .subscribe((data: IMqttMessage) => {
        let item = JSON.parse(data.payload.toString());
        this.events.push(item);
      });
  }

  enterMenu(): void {
    console.log("test");
    this.isClicked = !this.isClicked;
  }
}
