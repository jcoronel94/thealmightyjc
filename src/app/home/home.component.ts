import { Component, OnInit } from '@angular/core';
import { butterService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rendering!: any;


  constructor() { }

  async ngOnInit() {
      this.rendering =  (await this.getContent())?.data?.data || []
      console.log(this.rendering)
  }

  
  getContent() {
    return butterService.page.retrieve('*', 'home')
  }

}
