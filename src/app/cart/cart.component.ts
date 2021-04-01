import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() Product;
  items:any=[];


  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.items= this.service.getItems();
    console.log(this.items);
  }

}
