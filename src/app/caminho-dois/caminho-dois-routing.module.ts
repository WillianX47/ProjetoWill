import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoDoisPage } from './caminho-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoDoisPageRoutingModule {}
