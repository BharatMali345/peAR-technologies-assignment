import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLayoutComponent } from './core/layout/view-layout/view-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant-view',
    pathMatch: 'full',
  },
  {
    path: 'restaurant-view',
    component: ViewLayoutComponent,
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
