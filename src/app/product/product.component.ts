import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  datas = [];
  cartproducts = [];
  cartitem: any=[];
  items:any=[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getdata().subscribe(data => {
      this.products = data;
      this.products.forEach(e => {
        this.datas.push(e);
        
      }) 
      console.log(this.datas);

    });

    this.items=this.service.getItems();
  }
  cart(id:any) {
    for(let i=0;i<this.datas.length;i++){
      if(this.datas[i].id === id){
this.cartitem=this.datas[i];
      }
    }
    this.service.addToCart(this.cartitem);
    console.log(this.cartitem);
    window.alert('Your Product has been added to Cart!');
  }

}

