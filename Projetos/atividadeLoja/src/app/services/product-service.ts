import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  buscarProdutoPorId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}