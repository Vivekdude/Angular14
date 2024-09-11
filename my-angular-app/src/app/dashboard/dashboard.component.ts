import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];  // Variable to store API data

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  // Method to fetch data from the API
  fetchData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
