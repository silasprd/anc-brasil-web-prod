import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-card',
  templateUrl: './classes-card.component.html',
  styleUrls: ['./classes-card.component.scss']
})
export class ClassesCardComponent implements OnInit {

  @Input()
  img!: string;

  @Input()
  title!: string;

  @Input()
  className!: string;

  @Input()
  local!: string

  @Input()
  date!: string

  @Input()
  duration!: string

  @Input()
  vacancy!: string

  @Input()
  describe!: string

  constructor() { }

  ngOnInit() {
  }

}
