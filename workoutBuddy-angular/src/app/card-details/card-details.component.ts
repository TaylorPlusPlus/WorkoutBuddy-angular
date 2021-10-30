import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input('details') details :
  { name: string; cardType: string; manaCost: string; powerToughness: string; imagePath: string; }
  = {name : '', cardType : '', manaCost: '', powerToughness: '', imagePath: ''};

  constructor() { }

  ngOnInit(): void {


    console.warn(this.details);
  }

}
