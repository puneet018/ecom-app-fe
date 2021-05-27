import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient : HttpClient) { }

  getProducts(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/product');
  }
}
