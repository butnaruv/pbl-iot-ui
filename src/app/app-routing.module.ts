import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { HomeComponent } from './components/home/home.component';
import { HealthMeasurementComponent } from './components/health-measurement/health-measurement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'data', component: HealthMeasurementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nav-bar', component: SideNavbarComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
