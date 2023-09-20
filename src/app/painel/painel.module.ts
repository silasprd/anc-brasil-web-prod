import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { PainelBarComponent } from './painel-bar/painel-bar.component';
import { AddSocialActionComponent } from './components/add-social-action/add-social-action.component';
import { ListSocialActionComponent } from './components/list-social-action/list-social-action.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PainelComponent,
    PainelBarComponent,
    AddSocialActionComponent,
    ListSocialActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PainelRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PainelModule { }
