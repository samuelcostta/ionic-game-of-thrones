import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinentsPageRoutingModule } from './continents-routing.module';

import { DetailPageModule } from './detail/detail.module';
import { ListPageModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //DetailPageModule,
   // ListPageModule,
    ContinentsPageRoutingModule
  ],
  
})
export class ContinentsPageModule {}
