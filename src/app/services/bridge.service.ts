import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  private API_BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProductsData(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/products/`);
  }

  getProductData(id: number): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/products/${id}`);
  }

  getAllImagesData(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/images/`);
  }

  getImageData(id: number): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/images/${id}`);
  }
}