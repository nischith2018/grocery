import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector : 'add-products-dir',
    template : `
    <div class="card">
        <div class="card-header">
            Add Products to Shoppee Kart
        </div>
        <div class="card-body">
            <form [formGroup]="addProductsForm" (ngSubmit)="sendDetails()">
                <div class="form-group">
                    <label>Product Title</label>
                    <input
                        class="form-control"
                        placeholder="Product Title"
                        formControlName="pTitle"
                        [ngClass]=" { 'is-invalid' : addProductsForm.controls.pTitle.status == 'INVALID' && ( addProductsForm.controls.pTitle.dirty || addProductsForm.controls.pTitle.touched ) }"
                    />
                    <div class=" invalid-feedback" *ngIf=" addProductsForm.controls.pTitle.status == 'INVALID' && ( addProductsForm.controls.pTitle.dirty || addProductsForm.controls.pTitle.touched ) ">
                        <div *ngIf="f.pTitle.errors.required">Product Title is required</div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Product Quantity</label>
                    <input
                        class="form-control"
                        placeholder="Product Quantity"                        
                        formControlName="pQuantity"
                        [ngClass]=" { 'is-invalid' : addProductsForm.controls.pQuantity.status == 'INVALID' && ( addProductsForm.controls.pQuantity.dirty || addProductsForm.controls.pQuantity.touched ) }"
                    />
                    <div class=" invalid-feedback position-relative" *ngIf=" addProductsForm.controls.pQuantity.status == 'INVALID' && ( addProductsForm.controls.pQuantity.dirty || addProductsForm.controls.pQuantity.touched ) ">
                        <div *ngIf="f.pQuantity.errors.required">Product Quantity is required</div>
                    </div>                    
                </div>
                <div class="form-group">
                    <label>Product Image URL</label>
                    <input
                        class="form-control"
                        placeholder="http://somedomain.something.com/resource"
                        formControlName="pUrl"
                        [ngClass]=" { 'is-invalid' : addProductsForm.controls.pUrl.status == 'INVALID' && ( addProductsForm.controls.pUrl.dirty || addProductsForm.controls.pUrl.touched ) }"
                    />
                    <div class=" invalid-feedback position-relative" *ngIf=" addProductsForm.controls.pUrl.status == 'INVALID' && ( addProductsForm.controls.pUrl.dirty || addProductsForm.controls.pUrl.touched ) ">
                        <div *ngIf="f.pUrl.errors.required">Product URL is required</div>
                    </div>                    
                </div>
                <div class="form-group">
                    <label>Product Amount</label>
                    <input
                        type="number"
                        class="form-control"
                        placeholder="1234"
                        formControlName="pAmount"
                        [ngClass]=" { 'is-invalid' : addProductsForm.controls.pAmount.status == 'INVALID' && ( addProductsForm.controls.pAmount.dirty || addProductsForm.controls.pAmount.touched ) }"
                    />
                    <div class=" invalid-feedback position-relative" *ngIf=" addProductsForm.controls.pAmount.status == 'INVALID' && ( addProductsForm.controls.pAmount.dirty || addProductsForm.controls.pAmount.touched ) ">
                        <div *ngIf="f.pAmount.errors.required">Product Amount is required</div>
                    </div>                    
                </div>
                <div class="form-group">
                    <label>Product UID</label>
                    <input
                        class="form-control"
                        placeholder="product1"
                        formControlName="pUid"
                        [ngClass]=" { 'is-invalid' : addProductsForm.controls.pUid.status == 'INVALID' && ( addProductsForm.controls.pUid.dirty || addProductsForm.controls.pUid.touched ) }"
                    />
                    <div class=" invalid-feedback" *ngIf=" addProductsForm.controls.pUid.status == 'INVALID' && ( addProductsForm.controls.pUid.dirty || addProductsForm.controls.pAmount.touched ) ">
                        <div *ngIf="f.pUid.errors.required">Product UID is required</div>
                    </div>                    
                </div>
                <button                     
                    class="btn btn-outline-info"
                    [disabled]="!addProductsForm.valid"
                >Add Product</button>
            </form>
        </div>
    </div>
    `
})

export class AddProductsComponent{
    public addProductsForm : any;
    constructor(
        public fb : FormBuilder,        
    ){}
    ngOnInit(){
        this.loadForm();
    }
    get f() { return this.addProductsForm.controls; }
    loadForm(){
        this.addProductsForm = this.fb.group({
            pTitle : [ '', [ Validators.required ] ],
            pQuantity : [ '', [ Validators.required ] ],
            pUrl : [ '', [ Validators.required ] ],
            pAmount : [ '', [ Validators.required ] ],
            pUid : [ '', [ Validators.required ] ]
        });
    }
    sendDetails(){
        if(this.addProductsForm.valid){
            console.log(this.addProductsForm.value)
        }
    }
} 