import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStorageServices } from './../services/storage.service';

@Component({
  selector : 'login-app',
  template : `
  <form [formGroup]="loginForm" (ngSubmit)="sendDetails()">
    <div class="text-center mb-4">
      <img class="mb-4" src="https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg" width="72" height="72"/>
      <h1 class="h4 mb-3 font-weight-normal">Sign-In to Shoppee Kart</h1>
    </div>
    <div class="form-group w-50 position-relative" style="margin-left:25%">
      <label>Email</label>
      <input 
        class="form-control" 
        formControlName="email" 
        type="text"
        [ngClass]=" { 'is-invalid' : loginForm.controls.email.status == 'INVALID' && ( loginForm.controls.email.dirty || loginForm.controls.email.touched ) }"
      />
      <div class=" invalid-feedback position-relative" *ngIf=" loginForm.controls.email.status == 'INVALID' && ( loginForm.controls.email.dirty || loginForm.controls.email.touched )">
        <div *ngIf="f.email.errors.required">Email is required</div>
      </div>
    </div>
    <div class="form-group w-50 position-relative" style="margin-left:25%">
      <label>Password</label>
      <input 
        class="form-control" 
        formControlName="password" 
        type="password"
        [ngClass]=" { 'is-invalid' : loginForm.controls.password.status == 'INVALID' && (loginForm.controls.password.dirty || loginForm.controls.password.touched ) }"
      />
      <div class="invalid-feedback position-relative" *ngIf=" loginForm.controls.password.status == 'INVALID' && ( loginForm.controls.password.dirty || loginForm.controls.password.touched ) ">
        <div *ngIf="f.password.errors.required">Password is required</div>
      </div>
    </div>
    <button class="btn btn-outline-info btn-lg btn-block w-50 position-relative" style="margin-left:25%" [disabled]="!loginForm.valid">Login</button> 
    <p class="mt-5 mb-3 text-muted text-center">Don't have an account? <a routerLink="/register">Sign-Up  here</a></p>
  </form>
`
})

export class LoginComponent{
  public loginForm : any;
  constructor(
    public fb : FormBuilder,        
    public router : Router
  ){}
  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
    this.loginForm = this.fb.group({
      email : [ '', [ Validators.required ] ],
      password : [ '', [ Validators.required ] ]
    });
  }
  get f(){
    return this.loginForm.controls;
  }
  sendDetails(){
    if(this.loginForm.valid){
    }
  }
}