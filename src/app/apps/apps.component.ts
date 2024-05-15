import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  employees: any = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {  // Add ': void' to explicitly state that ngOnInit returns nothing
    this.apiService.getEmployees().subscribe(data => {
      this.employees = data;
    }, error => {
      console.error('Error fetching employees:', error);
    });
  }
}
