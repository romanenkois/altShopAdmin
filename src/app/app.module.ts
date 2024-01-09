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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { OrderBoxComponent } from './components/order-box/order-box.component';
import { UserBoxComponent } from './components/user-box/user-box.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

registerLocaleData(uk);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ImagesPageComponent,
    HeaderComponent,
    ProductBoxComponent,
    OrdersPageComponent,
    ImageBoxComponent,
    OrderBoxComponent,
    UserBoxComponent,
    Error404PageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: uk_UA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
