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
  pageComponentVisibility = {
    customize: false,
    edit: false,
  };
  editingData: any;

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
    this.closeAllComponents();
    if (data.Customisation.length > 0) {
      this.isCustomizable = true;
      this.customizationData = data;
      this.pageComponentVisibility.customize = true;
    } else {
      this.isCustomizable = false;
      this.restaurantService.cart.push(data);
      this.restaurantService.notify(`${data.Name} added to order!`);
      console.log('Add to cart!');
    }
  }

  edit(data: any) {
    this.closeAllComponents();
    this.isCustomizable = true;
    this.pageComponentVisibility.edit = true;
    this.editingData = data;
  }

  btnClick(event: string) {
    this.closeAllComponents();
    if (event == 'customize') {
      this.restaurantService.notify(`Edited Successfully!`);
    } else {
      this.restaurantService.cart.push(this.customizationData);
      this.restaurantService.notify(
        `${this.customizationData.Name} added to order!`
      );
    }

    this.isCustomizable = false;
  }

  closeAllComponents() {
    this.pageComponentVisibility.edit = false;
    this.pageComponentVisibility.customize = false;
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
