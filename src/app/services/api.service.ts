import { Flight } from './../Interface/flight.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(
      `http://interview-mock.herokuapp.com/api/workers`);
  }
  getFlights(id: number): Observable<Flight[]> {
    return this.http.get<Flight[]>(
      `http://interview-mock.herokuapp.com/api/workers/${id}`);
  }

}
