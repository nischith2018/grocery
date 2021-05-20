import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'navbar',
  template : `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" routerLink = "/products">
        <img src = 'https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg' style="width:50px;height:50px"/>
        Shoppee Kart
      </a>            
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink = "/products">Products <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink = "/billing">Billing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink = "/checkout" (click)="sendFlag()">Checkout</a>
        </li>          
      </ul>
      <ul class="navbar-nav">          
        <li>
          <a routerLink = "/login" title="Sign-In"><span style="font-size: 24px;color: black;"><i class="fas fa-sign-in-alt"></i></span></a>
        </li>
      </ul>      
    </nav>
  `
})

export class NavBarComponent{
  @Output() checkoutFlag : EventEmitter<boolean> = new EventEmitter;

  sendFlag(){
    this.checkoutFlag.emit(false);
    setTimeout( ()=>{ this.checkoutFlag.emit(true) } );
  }
}