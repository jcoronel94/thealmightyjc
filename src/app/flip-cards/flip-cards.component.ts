import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.scss']
})
export class FlipCardsComponent implements OnInit {

  constructor() { }

  @Input() panelItems!:any

  ngOnInit(): void {
  }

}
