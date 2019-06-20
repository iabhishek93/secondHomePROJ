import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchTerm:string;

  places=[
    'Kundanahalli Gate',
    'Marathalli',
    'Electronics City',
    'Madevpura',
    'Banashankari',
    'BTM Layout',
    'Banaswadi',
    'Agara',
    'HSR Layout',
    'Silk Board',
    'Koramangla'
  ]

}
