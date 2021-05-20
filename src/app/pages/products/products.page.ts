import { Component } from '@angular/core';
import { productsModel } from './../../model/products.model';

@Component({
  template : `
  <default-layout>
    <ng-container navbar>
      <navbar></navbar>
    </ng-container>
    <sort-app (sortType)="sortTypeToPipe=$event"></sort-app>
    <search-app (searchKey)="searchKeyToPipe=$event"></search-app>
    <product-list
        [_data]="obj|search : searchKeyToPipe : sortTypeToPipe"
        (cartFlag)="cartFlag = $event"
    ></product-list>
    <cart-app *ngIf="cartFlag" ></cart-app>    
  </default-layout>
  `
})

export class ProductsPage{
  public obj : any;
  public searchKeyToPipe : string;
  public sortTypeToPipe : string;
  public cartFlag : boolean = true;
  constructor(){
    this.obj = productsModel;
  }
}