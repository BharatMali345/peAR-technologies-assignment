import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //Variables
  baseUrl: string = environment.apiUrl;
  cart: any[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) {}

  //Get Restaurant Details
  getRestaurantDetails(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/restaurant/100`);
  }

  //Notification
  notify(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
    });
  }
}
