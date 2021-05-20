import { Component } from '@angular/core';

@Component({
  template : `
    <checkout-layout>
      <ng-container navbar>
        <navbar></navbar>
      </ng-container>      
      <checkout-dir
        *ngIf="checkoutFlag"
      ></checkout-dir>
    </checkout-layout>
  `
})

export class CheckoutPage{
  public checkoutFlag : boolean = true;
}