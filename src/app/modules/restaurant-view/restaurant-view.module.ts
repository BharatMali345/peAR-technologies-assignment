import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { RouterModule } from '@angular/router';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantMealComponent } from './restaurant-meal/restaurant-meal.component';
import { RestaurantHelpComponent } from './restaurant-help/restaurant-help.component';
import { RestaurantCustomizationComponent } from './restaurant-customization/restaurant-customization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFoodItemComponent } from './edit-food-item/edit-food-item.component';

@NgModule({
  declarations: [
    RestaurantMenuComponent,
    RestaurantMealComponent,
    RestaurantHelpComponent,
    RestaurantCustomizationComponent,
    EditFoodItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
        path: 'order',
        component: RestaurantMealComponent,
      },
      {
        path: 'who-we-are',
        component: RestaurantHelpComponent,
      },
    ]),
  ],
})
export class RestaurantViewModule {}
