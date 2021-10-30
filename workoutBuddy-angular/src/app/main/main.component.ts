import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetApiService } from '../get-api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title:string = '';

  constructor(private api:GetApiService)
  {

  }
    //Need to make a list of card items from the api call.

    //Need to make a list of card items from the api call.
    cards: { name: string; cardType: string; manaCost: string; powerToughness: string; imagePath: string; }[] = [];
    //Within the html, iterate through the list creating card-detail items for each member in the list
  ngOnInit(): void {
    this.api.apiCall().subscribe((data:any) => {
       this.title =  data[0]['name']

      for (let i = 0; i < data.length; i++)
      {
        this.cards.push(data[i]);
      }
    })
  }

}
