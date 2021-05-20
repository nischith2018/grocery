import { AbstractControl } from '@angular/forms';

export class BillingFormValidation{
  static required(control : AbstractControl):{[key:string]:boolean} | null{        
    if(
      control.value != null &&
      control.value != '' &&
      control.value != 0
    ){
      return null      
    }else{
      return {
        'required' : true
      }      
    }
  }
  static minLength(length:number){
    return function(control:AbstractControl):{[key:string]:boolean}|null{      
      if(control.value.toString().length != length){        
        return {
          'minLength':true
        }
      }else{
        return null
      }
    }
  }

}