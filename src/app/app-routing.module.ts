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
  {
    path: 'caminho-um-dois',
    loadChildren: () => import('./caminho-um-dois/caminho-um-dois.module').then( m => m.CaminhoUmDoisPageModule)
  },
  {
    path: 'caminho-um-dois-dois',
    loadChildren: () => import('./caminho-um-dois-dois/caminho-um-dois-dois.module').then( m => m.CaminhoUmDoisDoisPageModule)
  },
  {
    path: 'caminho-um-dois-dois-um',
    loadChildren: () => import('./caminho-um-dois-dois-um/caminho-um-dois-dois-um.module').then( m => m.CaminhoUmDoisDoisUmPageModule)
  },
  {
    path: 'caminho-um-um',
    loadChildren: () => import('./caminho-um-um/caminho-um-um.module').then( m => m.CaminhoUmUmPageModule)
  },
  {
    path: 'caminho-um-dois-um',
    loadChildren: () => import('./caminho-um-dois-um/caminho-um-dois-um.module').then( m => m.CaminhoUmDoisUmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
