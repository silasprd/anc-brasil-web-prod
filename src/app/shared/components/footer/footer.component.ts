import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ancLogo = 'assets/anc-brasil-logo.jpg'

  fbHref = 'https://www.facebook.com/profile.php?id=100080789555081'

}
