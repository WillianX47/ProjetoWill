import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisDoisDoisPageRoutingModule } from './caminho-um-dois-dois-dois-routing.module';

import { CaminhoUmDoisDoisDoisPage } from './caminho-um-dois-dois-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmDoisDoisDoisPageRoutingModule
  ],
  declarations: [CaminhoUmDoisDoisDoisPage]
})
export class CaminhoUmDoisDoisDoisPageModule {}
