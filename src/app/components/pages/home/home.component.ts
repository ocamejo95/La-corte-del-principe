import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Footer style
  classname = "ct-footer footer-dark";
  ftlogo = "assets/img/img-usar/logo/logo-blanco.webp"
  constructor() { }

  ngOnInit(): void {
  }

}
