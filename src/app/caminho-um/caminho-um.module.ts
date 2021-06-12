import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmPageRoutingModule } from './caminho-um-routing.module';

import { CaminhoUmPage } from './caminho-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmPageRoutingModule
  ],
  declarations: [CaminhoUmPage]
})
export class CaminhoUmPageModule {}
