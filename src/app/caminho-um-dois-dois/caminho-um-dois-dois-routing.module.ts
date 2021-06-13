import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmDoisDoisPage } from './caminho-um-dois-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmDoisDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmDoisDoisPageRoutingModule {}
