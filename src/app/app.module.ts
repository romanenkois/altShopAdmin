import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductBoxComponent } from './components/product-box/product-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ImagesPageComponent,
    HeaderComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
