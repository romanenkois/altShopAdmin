import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GatewayComponent } from './pages/gateway/gateway.component';
import { ProductsComponent } from './pages/products/products.component';
import { ImagesComponent } from './pages/images/images.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'images',
  component: ImagesComponent
},
{
  path: 'gateway',
  component: GatewayComponent
},
{
  path: '',
  redirectTo: 'gateway',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
