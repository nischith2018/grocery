import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BrowserStorageServices } from './../services/storage.service';
import { BillingFormValidation } from './../validation/billing.validation';

@Component({
  selector: 'billing-form',
  template: `
    <div class="card">
      <div class="card-header">
        <h5>Billing Information</h5>
      </div>
      <div class="card-body">
        <form [formGroup]="billingForm" (ngSubmit)="send()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input 
                type="text"                 
                class="form-control" 
                placeholder="First Name" 
                formControlName="firstName"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.firstName.status == 'INVALID' && (billingForm.controls.firstName.dirty || billingForm.controls.firstName.touched)"
              >Please enter a valid First Name</small>
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input 
                type="text"  
                class="form-control" 
                placeholder="Last Name"
                formControlName="lastName"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.lastName.status == 'INVALID' && (billingForm.controls.lastName.dirty || billingForm.controls.lastName.touched)"
              >Please enter a valid Last Name</small>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="eMail">E-Mail</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="mailid@domain.com" 
                formControlName="eMail"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.eMail.status == 'INVALID' && (billingForm.controls.eMail.dirty || billingForm.controls.eMail.touched)"
              >Please enter a valid eMail ID</small>
            </div>
            <div class="form-group col-md-6">
              <label for="mobile">Mobile</label>
              <input 
                 type="number" 
                 class="form-control" 
                 placeholder="1234567890"
                 formControlName="mobile"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.mobile.status == 'INVALID' && (billingForm.controls.mobile.dirty || billingForm.controls.mobile.touched)"
              >Please enter a valid Mobile number</small>
            </div> 
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="address">Address1</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="Address" 
                formControlName="address1"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.address1.status == 'INVALID' && (billingForm.controls.address1.dirty || billingForm.controls.address1.touched)"
              >Please enter a valid Address</small>
            </div>                                
            <div class="form-group col-md-6">
              <label for="address">Address2</label>
              <input 
                type="text"  
                class="form-control" 
                placeholder="Address" 
                formControlName="address2"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.address2.status == 'INVALID' && (billingForm.controls.address2.dirty || billingForm.controls.address2.touched)"
              >Please enter a valid Address</small>
            </div>                     
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="state">State</label>
              <select class="form-control" id="state" formControlName="state">                
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.state.status == 'INVALID' && (billingForm.controls.state.dirty || billingForm.controls.state.touched)"
              >Please enter a valid State</small>
            </div>
            <div class="form-group col-md-4">
              <label for="city">City</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="City"
                formControlName="city"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.city.status == 'INVALID' && (billingForm.controls.city.dirty || billingForm.controls.city.touched)"
              >Please enter a valid City</small>
            </div>          
            <div class="form-group col-md-4">
              <label for="pin">Pin code</label>
              <input 
                type="number" 
                class="form-control" 
                placeholder="123456"
                formControlName="pin"
              />
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.pin.status == 'INVALID' && (billingForm.controls.pin.dirty || billingForm.controls.pin.touched)"
              >Please enter a valid PinCode</small>
            </div>                      
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-3 pt-0">Payment Type</legend>
              <div class="col-sm-2">
                <div class="form-check form-check-inline">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="r3" 
                    name="paymentType" 
                    value="upi" 
                    formControlName="paymentType"
                  />
                  <label class="form-check-label" for="r3">UPI</label>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-check form-check-inline">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="r1" 
                    name="paymentType" 
                    value="netbanking" 
                    formControlName="paymentType"
                  />
                  <label class="form-check-label" for="r1">NetBanking</label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-check form-check-inline">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="r2" 
                    name="paymentType" 
                    value="card" 
                    formControlName="paymentType"
                  />
                  <label class="form-check-label" for="r2">Credit/Debit Card</label>
                </div>
              </div>
              <small
                class="form-text text-danger"
                *ngIf="billingForm.controls.paymentType.status == 'INVALID' && (billingForm.controls.paymentType.dirty || billingForm.controls.paymentType.touched)"
              >Please enter a valid Payment Type</small>              
            </div>
          </fieldset>
          <div class="row">
            <div class="col-sm-6">
              <button class="btn btn-outline-primary float-left" [disabled]="!billingForm.valid">Place Order</button>
            </div>
            <div class="col-sm-6">
              <button class="btn btn-outline-info float-right" (click)="route()">Continue Shopping</button>
            </div>
          </div>
        </form>
      </div>
    </div>   
    <hr>
    {{billingForm.valid}}     
  `,
  styles :[`
    form .ng-invalid.ng-touched{
      border-color : red;
    }
  `]
})

export class BillingFormcomponent {
  billingForm: any;
  constructor(
    public fb: FormBuilder,
    public services : BrowserStorageServices,
    public router : Router
  ) { }
  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.billingForm = this.fb.group({
      firstName: ['', [ Validators.required ] ],
      lastName: ['', [ Validators.required ] ],
      eMail: ['', [ Validators.required, Validators.email ] ],
      mobile: ['', [ BillingFormValidation.required, BillingFormValidation.minLength(10) ] ],
      address1: ['', [ Validators.required ] ],
      address2: ['', [ Validators.required ] ],
      state: ['', [ Validators.required ] ],
      city: ['', [ Validators.required ] ],
      pin: ['', [ Validators.required, BillingFormValidation.minLength(6) ] ],
      paymentType: ['', [ Validators.required ] ]
    });
  }
  send(){    
    this.services.set({"billing":this.billingForm.value});
    this.router.navigateByUrl('/checkout');
  }
  route(){
    this.router.navigateByUrl('/products');
  }
}