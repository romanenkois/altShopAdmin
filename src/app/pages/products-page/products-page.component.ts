import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
//import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-products-page',
  templateUrl: 'products-page.component.html',
  styles: [
  ]
})
export class ProductsPageComponent {
  productsData: any[] = [];
  columns: number = 3;

  constructor(private BridgeService: BridgeService) { }

  ngOnInit() {
    this.BridgeService.getProductsData().subscribe((data:any) => {
      
      this.productsData = data;
      //console.log(this.productsData)
    });
  }
}
