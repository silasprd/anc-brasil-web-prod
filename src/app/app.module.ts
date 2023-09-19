import { NewsSectionComponent } from './pages/home/news-section/news-section.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContentCardComponent } from './shared/components/content-card/content-card.component';
import { TopSectionComponent } from './pages/home/top-section/top-section.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { PartnersSectionComponent } from './pages/home/partners-section/partners-section.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassesCardComponent } from './shared/components/classes-card/classes-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialActionComponent } from './pages/social-action/social-action.component';
import { SocialCardComponent } from './shared/components/social-card/social-card.component';
import { PainelModule } from './painel/painel.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ContentCardComponent,
    TopSectionComponent,
    AboutSectionComponent,
    NewsSectionComponent,
    PartnersSectionComponent,
    ClassesCardComponent,
    ClassesComponent,
    SocialCardComponent,
    SocialActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
