import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'http://localhost:8091/employee/index';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
}
