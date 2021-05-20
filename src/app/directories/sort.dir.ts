import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'sort-app',
  template : `
    <div class="form-group">
      <select #value (change)="send($event.target.value)" class="form-control">
        <option value="NameAsc">Sort By Name (A to Z)</option>
        <option value="NameDesc">Sort By Name (Z to A)</option>
        <option value="PriceDesc">Sort By Price (High to Low)</option>
        <option value="PriceAsc">Sort By Price (Low to High)</option>        
      </select>
    </div>
  `,
  styles : [`
  
  `]
})

export class SortComponent{
  @Output() sortType : EventEmitter<string> = new EventEmitter();
  send(arg : string){
    this.sortType.emit(arg)
  }
}