import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntryComponent } from './components/entry/entry.component';
import { HealthMeasurementComponent } from './components/health-measurement/health-measurement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PillCardComponent } from './components/pill-card/pill-card.component';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment as env } from '../environments/environment.prod';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    HealthMeasurementComponent,
    DashboardComponent,
    PillCardComponent,
    AddMedicineComponent,
    SideNavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
