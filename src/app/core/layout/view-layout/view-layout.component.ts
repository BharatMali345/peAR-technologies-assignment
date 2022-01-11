import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/shared/_http/restaurant.service';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss'],
})
export class ViewLayoutComponent implements OnInit {
  //Variables
  restaurantData: any;
  loading: boolean = false;
  searchValue: string = '';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurantDetails();
  }

  //Search Function
  searchBy(event: any) {
    console.log(event);
  }

  //API Calls
  getRestaurantDetails() {
    this.restaurantService.getRestaurantDetails().subscribe(
      (res: any) => {
        this.restaurantData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
