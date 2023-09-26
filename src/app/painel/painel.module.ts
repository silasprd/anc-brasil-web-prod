import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { PainelBarComponent } from './components/painel-bar/painel-bar.component';
import { AddSocialActionComponent } from './components/social-action/add-social-action/add-social-action.component';
import { ListSocialActionComponent } from './components/social-action/list-social-action/list-social-action.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { AddCoursesComponent } from './components/courses/add-courses/add-courses.component';


@NgModule({
  declarations: [
    PainelComponent,
    PainelBarComponent,
    AddSocialActionComponent,
    ListSocialActionComponent,
    ListCoursesComponent,
    AddCoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PainelRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PainelModule { }
