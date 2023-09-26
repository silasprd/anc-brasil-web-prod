import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-social-action',
  templateUrl: './add-social-action.component.html',
  styleUrls: ['./add-social-action.component.scss']
})
export class AddSocialActionComponent implements OnInit {

  socialActionForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  titleControl: FormControl = new FormControl("")
  localControl: FormControl = new FormControl("")
  dateControl: FormControl = new FormControl("")
  imgsControl: FormControl = new FormControl("")

  buildForm(): void {
    this.socialActionForm = this.formBuilder.group({
      title: this.titleControl.value,
      local: this.localControl.value,
      date: this.dateControl.value,
      imgs: this.imgsControl.value
    })
  }

  createSocialAction(){
    const socialAction = {
      title: this.titleControl.value,
      local: this.localControl.value,
      date: this.dateControl.value,
      imgs: this.imgsControl.value
    }
    console.log(socialAction)
  }

}
