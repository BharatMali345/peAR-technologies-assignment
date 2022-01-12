import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantService } from 'src/app/shared/_http/restaurant.service';

@Component({
  selector: 'restaurant-customization',
  templateUrl: './restaurant-customization.component.html',
  styleUrls: ['./restaurant-customization.component.scss'],
})
export class RestaurantCustomizationComponent implements OnInit {
  //Input
  @Input() Data: any;

  //Outputs
  @Output() onBtnClicked: EventEmitter<any> = new EventEmitter();

  //Variables
  selectedOption: any;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {}

  ngOnChanges() {}

  addToCart() {
    let item: any = this.Data.Customisation[0].Options.find((item: any) => {
      if (item.Name == this.selectedOption.Name) {
        return item;
      }
    });
    if (item) {
      this.restaurantService.cart.push(item);
      this.restaurantService.notify(`${item.Name} added to order!`);
      this.onBtnClicked.emit('customized');
    }
  }
}
