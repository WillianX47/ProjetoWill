import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoUmUmPageRoutingModule } from './caminho-um-um-routing.module';

import { CaminhoUmUmPage } from './caminho-um-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoUmUmPageRoutingModule
  ],
  declarations: [CaminhoUmUmPage]
})
export class CaminhoUmUmPageModule {}
