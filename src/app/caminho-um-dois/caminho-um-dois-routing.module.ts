import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmDoisPage } from './caminho-um-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmDoisPageRoutingModule {}
