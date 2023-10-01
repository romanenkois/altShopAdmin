import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GatewayComponent } from './pages/gateway/gateway.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { ImagesComponent } from './pages/images/images.component';
import { BridgeService } from './services/bridge.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GatewayComponent,
    HeaderComponent,
    ProductsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BridgeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
