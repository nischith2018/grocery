import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CartServices } from './../services/cart.service';

@Component({
  selector : 'product-list',
  template : `
    <div class="row text-center">
    <div
      style="width: 11rem;"
      class = "card m-3"
      *ngFor = "let item of _data; let i = index;"
    >
      <img 
        src = {{item.image}}
        class = "card-img-top ml-5 mt-2"
      />
      <div class = "card-body">
        <h6 class="card-title" >{{item.header}}</h6>
        <p>
          <span class="float-left" >{{item.quantity}}</span>
          <span class="float-right">{{item.amount}}</span>
        </p><br>
        <button
          class="btn btn-outline-primary btn-sm mt-2"
          (click)="show(item.uid)"
        >Add to cart</button>
      </div>
    </div>
    </div>
  `,
  styles : [`    
    img{ width:80px; height:100px; }
  `]
})

export class ProductsListDirectory{
  @Input() _data : any = {};
  @Output() cartFlag : EventEmitter<boolean> = new EventEmitter();
  constructor(
    public cart : CartServices
  ){}

  show(uid){
    this.cart.add(uid);  
    this.cartFlag.emit(false);  
    setTimeout( () => { this.cartFlag.emit(true) });
  }    
}