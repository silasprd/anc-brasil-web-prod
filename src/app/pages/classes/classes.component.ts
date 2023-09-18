import { ClassesService } from './../../service/classes.service';
import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/models/Classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes: Classes[] = []

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    this.getClasses()
  }

  getClasses(): void{
    this.classesService.findAll().subscribe({
      next: (response) => {
        console.log(response)
        this.classes = response
      }
    })
  }

}
