import { NewsSectionComponent } from './pages/home/news-section/news-section.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TopSectionComponent } from './pages/home/top-section/top-section.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { PartnersSectionComponent } from './pages/home/partners-section/partners-section.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialActionComponent } from './pages/social-action/social-action.component';
import { PainelModule } from './painel/painel.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    TopSectionComponent,
    AboutSectionComponent,
    NewsSectionComponent,
    SocialActionComponent,
    PartnersSectionComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PainelModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
