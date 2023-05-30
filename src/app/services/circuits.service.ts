import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Circuit } from '../models/circuit.interface';

@Injectable({
  providedIn: 'root',
})
export class CircuitsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'aa6cc7232f6069d7ccaa04dd56b25656',
      'x-rapidapi-host': 'v1.formula-1.api-sports.io',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllCircuits(): Observable<Circuit[]> {
    return this.http
      .get<any>('https://v1.formula-1.api-sports.io/circuits', this.httpOptions)
      .pipe(map((response) => response.response as Circuit[]));
  }

  getCircuitById(id: String): Observable<Circuit> {
    return this.http
      .get<any>(
        'https://v1.formula-1.api-sports.io/circuits?id=' + id,
        this.httpOptions
      )
      .pipe(map((response) => response.response[0] as Circuit));
  }
}
