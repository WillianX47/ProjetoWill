import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmUmPage } from './caminho-um-um.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmUmPageRoutingModule {}
