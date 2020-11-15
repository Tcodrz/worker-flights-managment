import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WorkerListComponent,
    FlightsListComponent,
    FlightInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkerFlightsDashboardModule { }
