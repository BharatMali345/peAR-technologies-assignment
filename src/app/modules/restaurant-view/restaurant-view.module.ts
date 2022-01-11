import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { RouterModule } from '@angular/router';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantMealComponent } from './restaurant-meal/restaurant-meal.component';
import { RestaurantHelpComponent } from './restaurant-help/restaurant-help.component';

@NgModule({
  declarations: [
    RestaurantMenuComponent,
    RestaurantMealComponent,
    RestaurantHelpComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
        path: 'meal',
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
