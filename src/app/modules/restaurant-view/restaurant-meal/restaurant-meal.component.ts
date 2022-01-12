import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/shared/_http/restaurant.service';

@Component({
  selector: 'app-restaurant-meal',
  templateUrl: './restaurant-meal.component.html',
  styleUrls: ['./restaurant-meal.component.scss'],
})
export class RestaurantMealComponent implements OnInit {
  //variables
  cartData: any = [];

  constructor(private restaurantService: RestaurantService) {
    this.cartData = restaurantService.cart;
  }

  ngOnInit(): void {}

  //getter
  public get totalValue() {
    let value: any = 0;
    this.cartData.forEach((element: any) => {
      value += element.Price;
    });
    return value;
  }

  delete(item: any) {
    this.restaurantService.cart = this.restaurantService.cart.filter(
      (cartItem: any) => cartItem.Name != item.Name
    );
    this.cartData = this.restaurantService.cart;
    this.restaurantService.notify(`${item.Name} removed from order!`);
  }

  checkout() {
    this.restaurantService.cart = [];
    this.cartData = [];
    this.restaurantService.notify(`Payment Done!`);
  }
}
