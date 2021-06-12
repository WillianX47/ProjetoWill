import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhoUmPage } from './caminho-um.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhoUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhoUmPageRoutingModule {}
