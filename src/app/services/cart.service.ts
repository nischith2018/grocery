import { Injectable } from '@angular/core';
import { BrowserStorageServices } from './storage.service';
import { productsModel } from './../model/products.model';

@Injectable()

export class CartServices {
  public cartData: any = {};
  public cartDetailsArray: any = [];
  public dataModel: any;
  public products: any = {};
  constructor(
    public storage: BrowserStorageServices
  ) {
    this.load();
    this.loadProduct();
  }
  loadProduct() {
    for (let item of productsModel) {
      this.products[item.uid] = item;
    }    
  }
  load() {    
    let temp = this.storage.get('cart');
    if (temp == undefined || temp == '' || temp == null) {
      this.cartData = {};
    } else {
      this.cartData = temp;
    }
  }
  add(key) {
    this.cartData[key] = this.cartData[key] == undefined ? 1 : this.cartData[key] + 1;
    this.storage.set({ cart: this.cartData });
  }
  delete(key) {
    if(this.cartData[key] == 1){
      delete this.cartData[key];
    }else{
      this.cartData[key] -= 1;
    }    
    this.storage.set({ cart: this.cartData });
  }
  viewCart() {    
    let tempArray = [];    
    for (let key of Object.keys(this.cartData)) {      
      let jsonData = {};
      jsonData['id'] = this.products[key].uid;
      jsonData['qty'] = this.cartData[key];
      jsonData['name'] = this.products[key].header;
      jsonData['price'] = this.products[key].amount;
      tempArray.push(jsonData);
    }
    return tempArray;
  }
  findTotal(){
    let cartItems = this.viewCart();
    let total = 0;
    for(let item of cartItems){     
      total += (item.qty * item.price)
    }
    return total;
  }
}