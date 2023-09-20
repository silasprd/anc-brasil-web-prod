import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { ClassesCardComponent } from './components/classes-card/classes-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialCardComponent,
    ClassesCardComponent,
    SocialCardComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SocialCardComponent,
    ClassesCardComponent,
    SocialCardComponent,
    ContentCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
