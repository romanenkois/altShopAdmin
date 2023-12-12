import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [{
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
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
