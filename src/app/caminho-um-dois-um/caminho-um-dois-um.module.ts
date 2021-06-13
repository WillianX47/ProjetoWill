import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisUmPageRoutingModule } from './caminho-um-dois-um-routing.module';

import { CaminhoUmDoisUmPage } from './caminho-um-dois-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmDoisUmPageRoutingModule
  ],
  declarations: [CaminhoUmDoisUmPage]
})
export class CaminhoUmDoisUmPageModule {}
