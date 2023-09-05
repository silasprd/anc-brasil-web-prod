import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'assets/ARMOND.png',
    'assets/BASTIL.png',
    'assets/BOLEIR.png',
    'assets/ECOCODE.png',
    'assets/FIFTHFLOUR.png',
    'assets/GEO.png',
    'assets/MADRIN.png'
  ]
}
