import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinisgPageRoutingModule } from './finisg-routing.module';

import { FinisgPage } from './finisg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinisgPageRoutingModule
  ],
  declarations: [FinisgPage]
})
export class FinisgPageModule {}
