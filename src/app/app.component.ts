import { Component, OnInit } from '@angular/core';
import { RealEstateService } from './real-estate.service'; // Adjust the path as necessary

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string; // Assuming image data is a base64 encoded string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public properties: Property[] = [];
  public userEmail: string | null = localStorage.getItem('userEmail'); // Retrieve user email from localStorage

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.realEstateService.getProperties().subscribe(
      (result) => {
        this.properties = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'RealEstateListing';
}
