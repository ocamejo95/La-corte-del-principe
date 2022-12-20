import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.css']
})
export class InfographicsComponent implements OnInit {

  constructor() {
  }

  successpost = [
    {
      icon: 'flaticon-pizza-slice',
      count: 24934,
      title: 'Italiana'
    },
    {
      icon: 'flaticon-meat',
      count: 65317,
      title: 'Mediterránea'
    },
    {
      icon: 'flaticon-cheese',
      count: 4658,
      title: 'Europea'
    }
  ];

  ngOnInit(): void {
  }

}
