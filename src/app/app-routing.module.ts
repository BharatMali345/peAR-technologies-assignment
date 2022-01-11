import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant-view',
    pathMatch: 'full',
  },
  {
    path: 'restaurant-view',
    loadChildren: () =>
      import('./modules/restaurant-view/restaurant-view.module').then(
        (m) => m.RestaurantViewModule
      ),
  },
  // Unmatched Route
  {
    path: '**',
    redirectTo: '/restaurant-view',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
