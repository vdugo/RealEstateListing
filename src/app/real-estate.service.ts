import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private apiUrl = 'https://realestatelistingapi20231214210956.azurewebsites.net/api';


  constructor(private http: HttpClient) { }

  // Method to get all properties
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}/Properties`);
  }

  // Method to get a single property by id
  getProperty(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/Properties/${id}`);
  }

  // Method to create a new property
  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiUrl}/Properties`, property);
  }

  // Method to update a property
  updateProperty(property: Property): Observable<any> {
    return this.http.put(`${this.apiUrl}/Properties/${property.id}`, property);
  }

  // Method to delete a property
  deleteProperty(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Properties/${id}`);
  }

  // Method to authenticate a user (login)
  authenticate(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/authenticate`, user);
  }

  // Method to login a user - Sends login credentials to the server
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { email, password });
  }

  // Example method to make an authenticated request to a protected endpoint
  getProtectedData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>(`${this.apiUrl}/protectedEndpoint`, { headers });
  }

  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/register`, user);
  }
}
