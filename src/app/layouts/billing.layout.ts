import { Component } from '@angular/core';

@Component({
    selector : 'billing-layout',
    template : `
    <div class="d-flex flex-column">
        <div class="py-2 px-3 flex-fill">
            <ng-content select="[navbar]"></ng-content>
        </div>
    </div>
    <div class="container">
        <div class="d-md-flex justify-content-between flex-md-row">
            <div class="p-2">
                <ng-content select="billing-form"></ng-content>
            </div>
            <div class="p-2">
                <ng-content select="cart-app"></ng-content>
            </div>
        </div>
    </div>
    `
})

export class BillingLayoutComponent{

}