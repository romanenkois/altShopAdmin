import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'images',
    component: ImagesPageComponent
  },
  {
    path: 'orders',
    component: OrdersPageComponent
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
