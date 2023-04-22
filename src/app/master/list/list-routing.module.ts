import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListPage } from './list.page';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve:{
      characteres: ResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
