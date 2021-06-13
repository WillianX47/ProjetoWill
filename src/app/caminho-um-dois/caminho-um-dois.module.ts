import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisPageRoutingModule } from './caminho-um-dois-routing.module';

import { CaminhoUmDoisPage } from './caminho-um-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmDoisPageRoutingModule
  ],
  declarations: [CaminhoUmDoisPage]
})
export class CaminhoUmDoisPageModule {}
