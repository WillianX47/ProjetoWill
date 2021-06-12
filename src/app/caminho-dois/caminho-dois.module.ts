import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoDoisPageRoutingModule } from './caminho-dois-routing.module';

import { CaminhoDoisPage } from './caminho-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoDoisPageRoutingModule
  ],
  declarations: [CaminhoDoisPage]
})
export class CaminhoDoisPageModule {}
