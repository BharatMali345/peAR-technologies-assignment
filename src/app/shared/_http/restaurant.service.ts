import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //Variables
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  //Get Restaurant Details
  getRestaurantDetails(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/restaurant/100`);
  }
}
