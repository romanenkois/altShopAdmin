import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  dataaa: string | undefined;

  productsSubscription: Subscription | undefined;

  printToConsole(): void {
    console.log(this.dataaa);
  }

  getProducts(): void {
    this.productsSubscription = this.bridgeService.getAllProducts()
      .subscribe((_prosucts) => {
        this.products = _prosucts;
      })
  }

  ngOnInit(): void {
    //this.getProducts();
    this.getProducts();
    console.log(this.dataaa, "i");
  }
}
