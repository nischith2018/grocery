import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { uiLoaderModule } from './ngx-ui-loader.config';
import { layoutConfig } from './layouts.config';
import { dirDeclarations, services } from './dir.config';
import { RouterConfig,RouterDeclaration  } from './router.config';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterConfig, uiLoaderModule ],
  declarations: [ AppComponent, dirDeclarations, RouterDeclaration, layoutConfig  ],
  providers : [ services ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
