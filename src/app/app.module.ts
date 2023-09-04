import { NewsSectionComponent } from './pages/home/news-section/news-section.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContentCardComponent } from './shared/components/content-card/content-card.component';
import { TopSectionComponent } from './pages/home/top-section/top-section.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { NewsCardComponent } from './shared/components/news-card/news-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactUsComponent,
    ContentCardComponent,
    TopSectionComponent,
    AboutSectionComponent,
    NewsSectionComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
