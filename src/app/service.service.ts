import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  items:any= [];

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    const url='http://localhost:3000/products';
    return this.http.get<any>(url);  
  }
  addToCart(product) {
    this.items.push(product);
    // console.log(this.items);

  }
  getItems() {
    console.log(this.items);
    return this.items;
    
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
}
