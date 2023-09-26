import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { ClassesCardComponent } from './components/classes-card/classes-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { InputButtonComponent } from './components/input-button/input-button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialCardComponent,
    ClassesCardComponent,
    SocialCardComponent,
    ContentCardComponent,
    InputFieldComponent,
    InputButtonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SocialCardComponent,
    ClassesCardComponent,
    SocialCardComponent,
    ContentCardComponent,
    InputFieldComponent,
    InputButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
