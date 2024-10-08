import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';
import { makeBindingParser } from '@angular/compiler';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() total: number = 0;
  private totalSubscription : Subscription | undefined;


  constructor(private readonly greenGrocersService: GreengrocersService) { }
  
  
  ngOnInit() {
    this.totalSubscription = this.greenGrocersService.total$.subscribe(total => {
      this.total = Number(total);
      console.log("Inside total component: ", this.total);
    });
  }
}


