import { Component, OnInit } from '@angular/core';
import { RealEstateService } from './real-estate.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.realEstateService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }
}
