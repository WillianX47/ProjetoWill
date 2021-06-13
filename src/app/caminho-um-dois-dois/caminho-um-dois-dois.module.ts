import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisDoisPageRoutingModule } from './caminho-um-dois-dois-routing.module';

import { CaminhoUmDoisDoisPage } from './caminho-um-dois-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmDoisDoisPageRoutingModule
  ],
  declarations: [CaminhoUmDoisDoisPage]
})
export class CaminhoUmDoisDoisPageModule {}
