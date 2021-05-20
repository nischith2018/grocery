import { Component } from '@angular/core';

@Component({
    selector : 'checkout-layout',
    template : `
    <div class="d-flex flex-column">
        <div class="py-2 px-3 flex-fill">
            <ng-content select="[navbar]"></ng-content>
        </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="p-2">
            <ng-content select="checkout-dir"></ng-content>
            </div>
        </div>        
    </div>
    `
})

export class CheckoutLayoutComponent{

}