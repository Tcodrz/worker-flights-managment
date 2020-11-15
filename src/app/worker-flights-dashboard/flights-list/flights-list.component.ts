import { map } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Flight } from './../../Interface/flight.interface';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnDestroy, OnChanges {

  private REFRESH_INTERVAL = 60 * 1000;
  private selectedFlight: Flight = null;
  private sub: Subscription;
  private intervalSub: Subscription;

  @Input() workerID: number;
  @Output() selectFlight: EventEmitter<Flight> = new EventEmitter();
  flightsList: Flight[] = [];

  constructor(private api: ApiService) { }

  ngOnChanges(): void {
    this.selectedFlight = null;
    if (this.flightsList.length > 0) {
      this.intervalSub.unsubscribe();
    }
    this.getFlights();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.intervalSub.unsubscribe();
  }

  private getFlights(): void {
    this.sub = this.api.getFlights(this.workerID).subscribe(data => {
      this.flightsList = data;

      this.refreshFlights();

      if (!this.selectedFlight) {
        this.onSelectFlight(this.flightsList[0]);
      }
    });

  }

  private refreshFlights(): void {
    this.intervalSub = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.api.getFlights(this.workerID).pipe(
        map(x => {
          x.forEach(f => f.selected = false);
          return x;
        })
      ).subscribe(data => {
        this.flightsList = data;
        const index = this.flightsList.findIndex(x => x.num === this.selectedFlight.num);
        this.onSelectFlight(this.flightsList[index]);
      });
    });
  }

  onSelectFlight(flight: Flight): void {
    this.flightsList.forEach(x => x.selected = false);
    flight.selected = true;
    this.selectedFlight = flight;
    this.selectFlight.emit(this.selectedFlight);
  }

}
