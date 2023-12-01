import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinisgPage } from './finisg.page';

const routes: Routes = [
  {
    path: '',
    component: FinisgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinisgPageRoutingModule {}
