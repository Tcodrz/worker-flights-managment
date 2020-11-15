import { Subscription } from 'rxjs';
import { Flight } from './../../Interface/flight.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Worker } from '../../Interface/Worker.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  workers: Worker[] = [];
  selectedWorker: Worker = null;
  selectedFlight: Flight = null;
  private sub: Subscription;

  constructor(private api: ApiService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.api.getWorkers().subscribe((data) => {
      data.forEach((x) => {
        const worker = new Worker(x['id'], x['name']);
        this.workers.push(worker);
      });
    });
  }

  showFlights(worker: Worker): void {
    this.selectedWorker = worker;
  }

  showFlightInfo(flight: Flight): void {
    this.selectedFlight = flight;
  }

}
