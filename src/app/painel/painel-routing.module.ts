import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel.component';
import { ListSocialActionComponent } from './components/social-action/list-social-action/list-social-action.component';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    children: [
      {
        path: 'acao-social',
        component: ListSocialActionComponent
      },
      {
        path: 'cursos',
        component: ListCoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
