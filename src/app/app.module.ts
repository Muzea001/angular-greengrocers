import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { StoreComponent } from './store/store.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, CartComponent, ItemComponent, StoreComponent, TotalComponent],
  imports: [BrowserModule, CommonModule ,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
