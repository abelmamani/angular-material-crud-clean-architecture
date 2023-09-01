import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  url: string = "http://localhost:8080/bus";

  constructor(private http: HttpClient){}
  
  getAllBuses(): Observable<Bus[]>{
      return this.http.get<Bus[]>(this.url);
  }
  addBus(bus: Bus): Observable<any>{
    return this.http.post(this.url, bus);
  }
  updateBus(bus: Bus): Observable<any>{
    return this.http.put(this.url, bus);
  }
  deleteBus(id: number): Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }
}
