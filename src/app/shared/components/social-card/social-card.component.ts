import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {

  @Input()
  img!: string;

  @Input()
  title!: string;

  @Input()
  name!: string;

  @Input()
  local!: string;

  @Input()
  date!: string;

  @Input()
  describe!: string;


  constructor() { }

  ngOnInit() {
  }

}
