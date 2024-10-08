import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './models/item';
@Injectable({
  providedIn: 'root'
})
export class GreengrocersService {

  http = inject(HttpClient)
  total$ = new BehaviorSubject<Number>(0);
  cartItems$ = new BehaviorSubject<Item[]>([]);

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>("https://boolean-uk-api-server.fly.dev/groceries");
  }

  getCartItems(): Observable<Item[]>{ 
    return this.cartItems$.asObservable();
  }

  private calculateTotal(cartItems: Item[]): number {
    return cartItems.reduce((total, item) => total + (item.price* item.quantity),0);
  }

  setTotal(total:Number): void{
    this.total$.next(total);
  }

  updateTotal():void{
    const currentItems = this.cartItems$.getValue();
    const total = this.calculateTotal(currentItems);
    this.setTotal(total);
  }

  addToCart(item : Item){
    const currentItems = this.cartItems$.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);
    if(existingItem){
      existingItem.quantity++;
      this.cartItems$.next([...currentItems]);
    }
    else {
      this.cartItems$.next([...currentItems, {...item, quantity: 1}]);
    }

    this.updateTotal();
  }

  removeItem(item : Item){
    const currentItems = this.cartItems$.getValue();
    const updateItems = currentItems.map(cartItem => {
      if(cartItem.id == item.id){
        if(cartItem.quantity > 1) {
          cartItem.quantity--;
        }
        else {
          return null;
        }
      }
      return cartItem;
    }).filter(Boolean) as Item[];
    this.cartItems$.next(updateItems);
    this.updateTotal();
  }
}
