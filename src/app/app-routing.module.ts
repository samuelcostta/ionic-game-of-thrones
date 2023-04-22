import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'apppagina',
    loadChildren: () => import('./apppagina/apppagina.module').then( m => m.ApppaginaPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },*/
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'list',
    loadChildren: () => import('./master/master.module').then( m => m.MasterPageModule)   
  },

  {
    path: 'list-continents',
    loadChildren: () => import('./continents/continents.module').then( m => m.ContinentsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
