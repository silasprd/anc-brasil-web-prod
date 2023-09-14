import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './pages/classes/classes.component';
import { SocialActionComponent } from './pages/social-action/social-action.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: AboutComponent
  },
  {
    path: 'fale-conosco',
    component: ContactUsComponent
  },
  {
    path: 'area-social',
    component: SocialActionComponent
  },
  {
    path: 'cursos',
    component: ClassesComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
