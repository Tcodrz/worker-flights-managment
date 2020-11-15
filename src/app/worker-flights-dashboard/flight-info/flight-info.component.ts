import { Flight } from './../../Interface/flight.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent {

  @Input() flight: Flight;

  durationString(d: number): string {
    return `${Math.floor(d / 60)}h ${d % 60}m`;
  }

}
