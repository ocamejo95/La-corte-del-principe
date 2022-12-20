import { Component, OnInit } from '@angular/core';
import cartitem from '../../../data/cartlist.json';

@Component({
  selector: 'app-headerinner',
  templateUrl: './headerinner.component.html',
  styleUrls: ['./headerinner.component.css']
})
export class HeaderinnerComponent implements OnInit {

  constructor() { }
  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Cart
  cartmethod: boolean = true;
  cartToggle() {
    this.cartmethod = !this.cartmethod;
  }
  // Search
  searchmethod: boolean = true;
  searchToggle() {
    this.searchmethod = !this.searchmethod;
  }
  // Cart
  public cart: { id: number}[] = cartitem;

  ngOnInit(): void {
  }

}
