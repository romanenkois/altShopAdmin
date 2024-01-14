import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
//import { HttpClient } from '@angular/common/http'
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-products-page',
  templateUrl: 'products-page.component.html',
  styles: [
  ]
})
export class ProductsPageComponent {
  productsData: any[] = [];
  columns: number = 3;
  screenHeight: number = 0;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor(private BridgeService: BridgeService) { this.onResize();}

  ngOnInit() {
    this.BridgeService.getProductsData().subscribe((data:any) => {  
      this.productsData = data;

      if (this.screenWidth < 768) {
        this.columns = 1;
      } else if (this.screenWidth < 992) {
        this.columns = 2;
      } else {
        this.columns = 3;
      }
    });
  }
}
