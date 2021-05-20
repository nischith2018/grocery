import { Component } from '@angular/core';
import { CartServices } from './../services/cart.service';
import { BrowserStorageServices } from './../services/storage.service';
import { companyModel } from './../model/company.model';

@Component({
  selector: 'checkout-dir',
  template: `
    <div 
      class="row" 
      *ngIf="cartFlag && billingFlag"
    >
      <div class="col-sm-12">        
        <div class="alert alert-success" role="alert">
          <h5 class="alert-heading">Dear FirstName LastName,</h5>
          <p>Thank you for your order. Your order has been placed successfully and will be delivered in <strong>3 working days</strong>.</p>
          <hr>
          <p class="mb-0">
            <button class="btn btn-primary btn-sm mx-1">Print Invoice</button>
            <button class="btn btn-primary btn-sm mx-1">Place New Order</button>
          </p>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <span><strong>Invoice Date: {{invoiceDate | date:"dd-MMM-yyyy"}}</strong></span>
          </div>
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-6 text-left">
                <img src="https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg" style="width:75px;height:75px"/>
              </div>
              <div class="col-sm-6 text-right">
                Invoice #
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">                
                  <div><span>From:</span></div>
                  <div><strong>{{company.name}}</strong></div>                
                  <div><span>{{company.address1}}</span></div>
                  <div><span>{{company.address2}}</span></div>
                  <div><span>{{company.city}} - {{company.pin}}</span></div>
                  <div><span>{{company.state}}</span></div>
                  <div><span>Mobile:{{company.mobile}}</span></div>
                  <div><span>Mail: {{company.mail}}</span></div>
              </div>
              <div class="col-sm-6">
                <div><span>To:</span></div>
                  <div><strong>{{billingDetails.firstName}} {{billingDetails.lastName}}</strong></div>     <div><span>{{billingDetails.address1}}</span></div>
                  <div><span>{{billingDetails.address2}}</span></div>
                  <div><span>{{billingDetails.city}} - {{billingDetails.pin}}</span></div>
                  <div><span>{{billingDetails.state}}</span></div>
                  <div><span>Mobile: {{billingDetails.mobile}}</span></div>
                  <div><span>Mail: {{billingDetails.eMail}}</span></div>
                  <div><span>Payment Method: {{billingDetails.paymentType}}</span></div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <div class = "table-responsive">
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
                    <tbody *ngFor = "let item of cart; let i = index">
                      <tr>
                        <th scope="row">{{i+1}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.qty * item.price}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>            
          </div>
          <div class="card-footer text-muted">
            <p class="text-right">Total: {{total}}</p>
          </div>
        </div>
      </div>
    </div>    
  `
})

export class CheckoutComponent {
  public company : any;
  public total : number;
  public invoiceDate: any = new Date();
  public cart: any = {};
  public billingDetails: any = {};
  public cartFlag: boolean = false;
  public billingFlag: boolean = false;
  constructor(
    public cartService: CartServices,
    public browserService : BrowserStorageServices
  ) {
    this.load();
    this.company = companyModel;
  }
  load() {
    this.cart = this.cartService.viewCart();
    this.billingDetails = this.browserService.get("billing");
    this.total = this.cartService.findTotal();
    if (this.cart == undefined) {
      this.cart = {}
    }
    if (this.billingDetails == undefined) {
      this.billingDetails = {}
    }
    this.cartFlag = Object.getOwnPropertyNames(this.cart).length > 0 ? true : false;
    this.billingFlag = Object.getOwnPropertyNames(this.billingDetails).length > 0 ? true : false;
  }
}