import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const BACK_BASE_URL = 'localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `https://fakestoreapi.com/products`
    )
  }

  getAllProductsString(): string {
    return this.httpClient.get(
      `${BACK_BASE_URL}/products`
    ).toString();
    
  }
}
