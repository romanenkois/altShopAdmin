import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const BACK_BASE_URL = 'https://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${BACK_BASE_URL}/products`
    )
  }
}
