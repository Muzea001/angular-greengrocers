import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../models/item';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;    
  @Input() itemName : string | null = null;
  @Input() itemId : number | null = null;
  @Output() addToCart : EventEmitter<void> = new EventEmitter<void>();


}
