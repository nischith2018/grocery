import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'search-app',
  template : `
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="products-search-field">Search</span>
      </div>
      <input 
        type="text" 
        class="form-control" 
        aria-describedby="products-search-field"
        (keyup)="send($event.target.value)" 
      >
    </div>
  `,
  styles : [`
  
  `]
})

export class SearchComponent{
  @Output() searchKey : EventEmitter<string> = new EventEmitter();
  send(arg : string){
    this.searchKey.emit(arg);
  }
 }