import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisDoisUmPageRoutingModule } from './caminho-um-dois-dois-um-routing.module';

import { CaminhoUmDoisDoisUmPage } from './caminho-um-dois-dois-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmDoisDoisUmPageRoutingModule
  ],
  declarations: [CaminhoUmDoisDoisUmPage]
})
export class CaminhoUmDoisDoisUmPageModule {}
