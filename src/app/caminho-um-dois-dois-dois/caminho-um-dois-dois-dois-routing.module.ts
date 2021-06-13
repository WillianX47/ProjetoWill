import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmDoisDoisDoisPage } from './caminho-um-dois-dois-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmDoisDoisDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmDoisDoisDoisPageRoutingModule {}
