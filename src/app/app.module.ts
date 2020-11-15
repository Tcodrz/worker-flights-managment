import { WorkerFlightsDashboardModule } from './worker-flights-dashboard/worker-flights-dashboard.module';
import { DashboardComponent } from './worker-flights-dashboard/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    WorkerFlightsDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
