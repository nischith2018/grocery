import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { CartServices } from './../services/cart.service';
import { BrowserStorageServices } from './../services/storage.service';

@Component({
  selector: 'cart-app',
  template: `
    <div class="modal" tabindex="-1" role="dialog" style="position: static !important; display: block !important;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-light">            
            <h5 class="modal-title">Your Cart Items</h5>              
            <div class="float-left">
              <button class="btn btn-outline-danger btn-sm m-1" *ngIf="total > 0" (click)="emptyCart()">Empty Cart</button>
              <button class="btn btn-outline-info btn-sm m-1">Total Items <span class="badge badge-light">{{count}}</span>
</button>
            </div>                    
          </div>
          <div class="modal-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr scope = "row" *ngFor = "let item of cartDetails;let i = index">                  
                    <th scope="row">{{i+1}} </th>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                      <div class="input-group" style="width:100px">
                        <div class="input-group-prepend">
                          <button 
                            class="btn btn-outline-info btn-sm" 
                            (click)="addProduct(item.id,i)"
                          >+</button>
                        </div>
                        <span class="form-control">{{item.qty}}</span>
                        <div class="input-group-append">
                          <button 
                            class="btn btn-outline-danger btn-sm" 
                            (click)="deleteProduct(item.id,i)"
                          >-</button>
                        </div>
                      </div>
                    </td>
                    <td>{{item.qty * item.price}}</td>                  
                </tr>                
              </tbody>
            </table></div>
            <div class="row">
              <button class="btn btn-outline-primary btn-sm m-auto" *ngIf="total > 0" (click)="route()">
                Checkout
              </button>
            </div>
          </div>
          <div class="modal-footer text-muted font-weight-bold bg-light"> 
            <p>Total: {{total}}</p>
          </div>
        </div>
      </div>
    </div>        
  `
})

export class CartComponent {
  public cartDetails : any = {}; 
  public count : number = 0; 
  public total : number = 0;   
  constructor(
    public cartService : CartServices,
    public router : Router,
    public storageService : BrowserStorageServices
  ){    
    this.load();
    this.count = Object.keys(this.cartDetails).length;
    this.findTotal();
  }
  load(){
    this.cartDetails = this.cartService.viewCart();    
  }
  findTotal(){
    this.total = this.cartService.findTotal();
    // for(let item of this.cartDetails){     
    //   this.total += (item.qty * item.price)
    // }
  }
  addProduct(pid,index){
    this.cartService.add(pid);
    this.cartDetails[index].qty += 1;
    this.findTotal();
  }
  deleteProduct(pid,index){
    this.cartService.delete(pid);
    this.cartDetails[index].qty -= 1;
    this.findTotal();
    this.cartDetails = this.cartService.viewCart();
    this.count = Object.keys(this.cartDetails).length;    
  }
  route(){
    this.router.navigate(['/','billing']);
  }
  emptyCart(){
    this.storageService.remove('cart');
  }
}