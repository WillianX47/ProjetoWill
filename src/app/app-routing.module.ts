import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'caminho-um',
    loadChildren: () => import('./caminho-um/caminho-um.module').then( m => m.CaminhoUmPageModule)
  },
  {
    path: 'caminho-dois',
    loadChildren: () => import('./caminho-dois/caminho-dois.module').then( m => m.CaminhoDoisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
