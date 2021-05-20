import { Injectable } from '@angular/core';

@Injectable()

export class BrowserStorageServices{
  public dbName : string = "myAppEC";
  public data : any;
  constructor(){    
    this.load();
  }
  load(){
    let temp = localStorage.getItem(this.dbName);    
    if(temp == undefined || temp == null || temp == ''){
      this.data = {};
    }else{
      try{
        this.data = JSON.parse(temp);
      }catch(err){
        this.data = {};
      }
    }
  }
  get(key=''){           
    return key == '' ? this.data : this.data[key];
  }
  set(obj){
    for(let key in obj){
      this.data[key] = obj[key];
    }
    this.synch();
  }
  synch(){
    localStorage.setItem(this.dbName,JSON.stringify(this.data));
  }
  remove(key){
    delete this.data[key];
    this.synch();
  }
  removeAll(){
    this.data = {};
    this.synch();
  }
}