import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input()
  cardTitle!: string;

  @Input()
  hasButton?: boolean

  @Input()
  textButton?: string

  @Input()
  textContent?: string

  @Input()
  cardWidth?: string

  @Input()
  cardHeight?: string

  constructor() { }

  ngOnInit() {
    this.setWidth()
  }

  setWidth(){

    let card = document.getElementById("card-box")

    if(card){
      if(this.cardWidth){
        card.style.width = this.cardWidth
      }
      if(this.cardHeight){
        card.style.height = this.cardHeight
      }
    }

  }

}
