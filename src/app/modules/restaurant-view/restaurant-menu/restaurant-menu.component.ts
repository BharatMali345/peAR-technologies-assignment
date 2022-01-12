import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from 'src/app/shared/_http/restaurant.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
})
export class RestaurantMenuComponent implements OnInit {
  //Variables
  categoryItems: any = [];
  restaurantId: string | number = '';
  panelOpenState: boolean = false;
  isCustomizable: boolean = false;
  customizationData: any;
  searchValue: string = '';
  resetCategoryItems: any;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getMenuItemsById(this.restaurantId);
  }

  //Search Function
  searchBy(event?: any) {
    this.isCustomizable = false;
    if (this.searchValue) {
      this.categoryItems = this.resetCategoryItems.filter((item: any) =>
        JSON.stringify(item)
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      );
    } else {
      this.categoryItems = this.resetCategoryItems;
    }
  }

  addToCart(data: any) {
    if (data.Customisation.length > 0) {
      this.isCustomizable = true;
      this.customizationData = data;
    } else {
      this.isCustomizable = false;
      this.restaurantService.cart.push(data);
      this.restaurantService.notify(`${data.Name} added to cart!`);
      console.log('Add to cart!');
    }
  }

  btnClick(event: string) {
    this.restaurantService.cart.push(this.customizationData);
    this.restaurantService.notify(
      `${this.customizationData.Name} added to cart!`
    );

    this.isCustomizable = false;
  }

  //API Calls
  getMenuItemsById(id: string | number) {
    this.restaurantService.getRestaurantDetails().subscribe(
      (res: any) => {
        this.categoryItems = res.Categories;
        this.resetCategoryItems = res.Categories;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
