import { Component } from '@angular/core';
import { BrowserStorageServices } from './../../services/storage.service';

@Component({
  template : `
    <billing-layout>
      <ng-container navbar>
        <navbar></navbar>
      </ng-container>
      <billing-form></billing-form>
      <cart-app></cart-app>
    </billing-layout>    
  `
})

export class BillingPage{
  result : any;
  constructor(
    public storage : BrowserStorageServices
  ){}
}