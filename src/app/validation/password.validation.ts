import { FormGroup } from '@angular/forms';

export class MyValidator{
  static passwordMatch(controlName : string, matchingControlName : string){
    return (formGroup : FormGroup) => {
      const password = formGroup.controls[controlName];
      const confirmPass = formGroup.controls[matchingControlName];
      if(confirmPass.errors && !confirmPass.errors.mustMatch){
        return;
      }
      if(password.value !== confirmPass.value){
        confirmPass.setErrors( { mustMatch : true } );
      }else{
        confirmPass.setErrors( null );
      }
    }
  }
}