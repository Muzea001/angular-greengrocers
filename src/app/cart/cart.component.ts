import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { GreengrocersService } from '../greengrocers.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$ = new Observable<Item[]>();
  constructor(
    private readonly greengrocerService: GreengrocersService,
  ) { }

  ngOnInit() {
    this.cartItems$ = this.greengrocerService.getCartItems();
  }

  addToCart(item: Item) {
    this.greengrocerService.addToCart(item);
  }

  removeItem(item : Item) {
    this.greengrocerService.removeItem(item);
  }
}
