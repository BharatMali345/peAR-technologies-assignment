import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantViewComponent } from './restaurant-view.component';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RestaurantViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestaurantViewComponent,
      },
    ]),
  ],
})
export class RestaurantViewModule {}
