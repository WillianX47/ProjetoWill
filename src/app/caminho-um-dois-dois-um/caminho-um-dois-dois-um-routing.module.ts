import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmDoisDoisUmPage } from './caminho-um-dois-dois-um.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmDoisDoisUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmDoisDoisUmPageRoutingModule {}
