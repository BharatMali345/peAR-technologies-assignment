import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { RouterModule } from '@angular/router';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantMealComponent } from './restaurant-meal/restaurant-meal.component';
import { RestaurantHelpComponent } from './restaurant-help/restaurant-help.component';
import { RestaurantCustomizationComponent } from './restaurant-customization/restaurant-customization.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestaurantMenuComponent,
    RestaurantMealComponent,
    RestaurantHelpComponent,
    RestaurantCustomizationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/restaurant-view/menu',
        pathMatch: 'full',
      },
      {
        path: 'menu',
        component: RestaurantMenuComponent,
      },
      {
        path: 'cart',
        component: RestaurantMealComponent,
      },
      {
        path: 'help',
        component: RestaurantHelpComponent,
      },
    ]),
  ],
})
export class RestaurantViewModule {}
