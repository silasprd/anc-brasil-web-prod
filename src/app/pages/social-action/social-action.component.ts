import { SocialAction } from 'src/app/models/SocialAction';
import { SocialActionService } from './../../service/social-action.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-action',
  templateUrl: './social-action.component.html',
  styleUrls: ['./social-action.component.scss']
})
export class SocialActionComponent implements OnInit {

  socialActions: SocialAction[] = []

  constructor(
    private socialActionService: SocialActionService
  ) { }

  ngOnInit() {
    this.getSocialActions()
  }

  getSocialActions(): void{
    this.socialActionService.findAll().subscribe({
      next: (response) => {
        console.log(response)
        this.socialActions = response
      }
    })
  }

}
