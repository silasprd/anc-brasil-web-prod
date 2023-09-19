import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel.component';
import { ListSocialActionComponent } from './components/list-social-action/list-social-action.component';
import { AddSocialActionComponent } from './components/add-social-action/add-social-action.component';

const routes: Routes = [
  {
    path: 'painel',
    component: PainelComponent,
    children: [
      {
        path: 'acao-social',
        component: ListSocialActionComponent
      },
      {
        path: 'cursos',
        component: AddSocialActionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
