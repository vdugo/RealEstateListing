import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RealEstateService } from '../real-estate.service';

// Define a Property interface
interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string; // Assuming image is a base64 encoded string
}

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = []; // Use the Property interface here

  constructor(private realEstateService: RealEstateService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.realEstateService.getProperties().subscribe(data => {
      this.properties = data;
    }, error => {
      console.error('Error fetching properties', error);
    });
  }

  getImageUrl(image: string): SafeUrl { // Assuming image is a string
    let objectURL = 'data:image/jpeg;base64,' + image;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
