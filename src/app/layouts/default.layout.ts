import { Component } from '@angular/core';

@Component({
    selector : 'default-layout',
    template : `
    <div class="d-flex flex-column">
        <div class="py-2 px-3 flex-fill">
            <ng-content select="[navbar]"></ng-content>
        </div>
    </div>
    <div class="container">                
        <div class="d-md-flex flex-md-row">
            <div class="p-2 flex-grow-1">
                <ng-content select="search-app"></ng-content>
            </div>
            <div class="p-2">
                <ng-content select="sort-app"></ng-content>
            </div>
        </div>
        <div class="d-md-flex justify-content-between flex-md-row">
            <div class="mt-2 p-2">
                <ng-content select="product-list"></ng-content>                
            </div>
            <div class="mt-2 flex-grow-0 p-2">
                <ng-content select="cart-app"></ng-content>
            </div>
        </div>        
    </div>    
    `,
    styles : [`
    
    `]
})

export class DefaultLayoutComponent{

}