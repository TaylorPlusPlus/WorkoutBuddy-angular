import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.css']
})
export class CardCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addButtonClicked(nameInput :any,
                    typeInput:any,
                    costInput:any,
                    toughnessInput:any,
                    pathInput:any)
                    {
              console.log(nameInput.value + typeInput.value + " " + costInput.value + " " + toughnessInput.value + " " + pathInput.value );
  }

}
