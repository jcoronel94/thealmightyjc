import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transclusion',
  templateUrl: './transclusion.component.html',
  styleUrls: ['./transclusion.component.scss']
})
export class TransclusionComponent implements OnInit {


  @Input() mobile = "1 1 95%"
  @Input() desktop = "1 1 80%"

  constructor() { }

  ngOnInit(): void {
  }

}
