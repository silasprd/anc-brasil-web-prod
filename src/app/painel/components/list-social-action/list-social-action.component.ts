import { Component, OnInit } from '@angular/core';
import { SocialAction } from 'src/app/models/SocialAction';
import { SocialActionService } from 'src/app/service/social-action.service';

@Component({
  selector: 'app-list-social-action',
  templateUrl: './list-social-action.component.html',
  styleUrls: ['./list-social-action.component.scss']
})
export class ListSocialActionComponent implements OnInit {

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
