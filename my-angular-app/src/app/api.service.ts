import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Method to get data from a dummy API
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'); // Dummy API endpoint
  }
}
