import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmDoisUmPage } from './caminho-um-dois-um.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmDoisUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmDoisUmPageRoutingModule {}
