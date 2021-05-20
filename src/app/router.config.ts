import { RouterModule, Routes } from '@angular/router';

import { ProductsPage } from './pages/products/products.page';
import { BillingPage } from './pages/billing/billing.page';
import { CheckoutPage } from './pages/checkout/checkout.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const appRoutes : Routes = [
  { path : 'products', component : ProductsPage },
  { path : 'billing', component : BillingPage },
  { path : 'checkout', component : CheckoutPage },
  { path : 'login', component : LoginPage },
  { path : 'register', component : RegisterPage },
  { path : '', redirectTo : '/products', pathMatch : 'full'}
]

export const RouterConfig = RouterModule.forRoot(appRoutes,{});
export const RouterDeclaration = [ ProductsPage, BillingPage, CheckoutPage, LoginPage, RegisterPage ];