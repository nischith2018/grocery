import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './../validation/password.validation';

@Component({
  selector : 'register-app',
  template : `
    <div class="card">
      <div class="card-header">
        <h5>Register to Shoppee Kart</h5>
      </div>
      <div class="card-body">
        <form [formGroup]="registerForm" (ngSubmit)="sendDetails()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input 
                class="form-control"
                placeholder="First Name" 
                formControlName="firstName"
                type="text"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.firstName.status == 'INVALID' && (registerForm.controls.firstName.dirty || registerForm.controls.firstName.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.firstName.status == 'INVALID' && (registerForm.controls.firstName.dirty || registerForm.controls.firstName.touched)" >
                <div *ngIf="f.firstName.errors.required">First Name is required</div>                
              </div>             
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input 
                class="form-control"
                placeholder="Last Name" 
                formControlName="lastName"
                type="text"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.lastName.status == 'INVALID' && (registerForm.controls.lastName.dirty || registerForm.controls.lastName.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.lastName.status == 'INVALID' && (registerForm.controls.lastName.dirty || registerForm.controls.lastName.touched)" >
                <div *ngIf="f.lastName.errors.required">Last Name is required</div>                
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email ID</label>
              <input 
                class="form-control"
                placeholder="mail@domain.com" 
                formControlName="email"
                type="text"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.email.status == 'INVALID' && (registerForm.controls.email.dirty || registerForm.controls.email.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.email.status == 'INVALID' && (registerForm.controls.email.dirty || registerForm.controls.email.touched)" >
                <div *ngIf="f.email.errors.required">Email is required</div>
                <div *ngIf="f.email.errors.email">Email must be a valid email address</div>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="mobile">Mobile</label>
              <input 
                class="form-control"
                placeholder="1234567890" 
                formControlName="mobile"
                type="number"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.mobile.status == 'INVALID' && (registerForm.controls.mobile.dirty || registerForm.controls.mobile.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.mobile.status == 'INVALID' && (registerForm.controls.mobile.dirty || registerForm.controls.mobile.touched)" >
                <div *ngIf="f.mobile.errors.required">Mobile number is required</div>
                <div *ngIf="f.mobile.errors.minLength">Mobile number must be atleast 10 characters</div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="userID">User ID</label>
              <input 
                class="form-control"
                placeholder="User ID" 
                formControlName="userID"
                type="text"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.userID.status == 'INVALID' && (registerForm.controls.userID.dirty || registerForm.controls.userID.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.userID.status == 'INVALID' && (registerForm.controls.userID.dirty || registerForm.controls.userID.touched)" >
                <div *ngIf="f.userID.errors.required">User ID is required</div>
                <div *ngIf="f.userID.errors.userIDVal">Mobile number must be atleast 10 characters</div>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="city">City</label>
              <input 
                class="form-control"
                placeholder="City" 
                formControlName="city"
                type="text"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.city.status == 'INVALID' && (registerForm.controls.city.dirty || registerForm.controls.city.touched) }"
              />
            </div>
            <div class="invalid-feedback" *ngIf = "registerForm.controls.city.status == 'INVALID' && (registerForm.controls.city.dirty || registerForm.controls.city.touched)" >
                <div *ngIf="f.city.errors.required">City is required</div>                
              </div>           
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="password">Password</label>
              <input                 
                class="form-control"
                placeholder="Password" 
                formControlName="password"
                type="password"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.password.status == 'INVALID' && (registerForm.controls.password.dirty || registerForm.controls.password.touched) }"
              />
              <div class="invalid-feedback" *ngIf = "registerForm.controls.password.status == 'INVALID' && (registerForm.controls.password.dirty || registerForm.controls.password.touched)" >
                <div *ngIf="f.password.errors.required">Password is required</div>               
                <div *ngIf="f.password.errors.minLength">Password must be atleast 6 characters in length</div>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="confirmPass">Confirm Password</label>
              <input                 
                class="form-control"
                placeholder="Confirm Password" 
                formControlName="confirmPass"
                type="password"
                [ngClass] = "{ 'is-invalid' : registerForm.controls.confirmPass.status == 'INVALID' && (registerForm.controls.confirmPass.dirty || registerForm.controls.confirmPass.touched) }"
              />
            </div>
            <div class="invalid-feedback" *ngIf = "registerForm.controls.confirmPass.status == 'INVALID' && (registerForm.controls.confirmPass.dirty || registerForm.controls.confirmPass.touched)" >
                <div *ngIf="f.confirmPass.errors.required">Confirm password is required</div>               
                <div *ngIf="f.confirmPass.errors.mustMatch">Passwords must match</div>
              </div>
          </div>
          <div class="form-row">
            <button 
              class="btn btn-outline-info"
              (click)="sendDetails()"
              [disabled]="!registerForm.valid"
            >Sign Up</button>
          </div>
        </form>
      </div>
    </div>       
  `,
  styles : [`

  `]
})

export class RegisterComponent{
  public registerForm : any;
  public passwordGroup : any;
  constructor(
    public fb : FormBuilder
  ){  }
  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
    this.passwordGroup = this.fb.group({
      
    },{
      validator : MyValidator.passwordMatch.bind(this)
    })
    this.registerForm = this.fb.group({
      firstName : [ '', [ Validators.required ] ],
      lastName : [ '', [ Validators.required ] ],
      email : [ '', [ Validators.required, Validators.email ] ],
      mobile : [ '', [ Validators.required ] ],
      userID : [ '', [ Validators.required ] ],
      city : [ '', [ Validators.required ] ],
      password : [ '', [ Validators.required, Validators.minLength(6) ] ],
      confirmPass : [ '', [ Validators.required ] ]    
    },{
      validator : MyValidator.passwordMatch('password', 'confirmPass')
    });
  }
  get f() { return this.registerForm.controls; }
  sendDetails(){
    console.log(this.registerForm.value);
  }
}