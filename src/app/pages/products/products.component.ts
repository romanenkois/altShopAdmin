import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BridgeService } from 'src/app/services/bridge.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  constructor(private bridgeService: BridgeService) { }

  products: Array<Product> | undefined;

  getProducts(): void {
    this.bridgeService.getAllProducts()
      .subscribe((_products) => {
        this.products = _products;
      })
  }

  ngOnInit(): void {

  }
}
