import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'nudo',
        loadChildren: () => import('./nudo/nudo.module').then(m => m.NudoPageModule),
      },
      {
        path: 'finisg',
        loadChildren: () => import('./finisg/finisg.module').then(m => m.FinisgPageModule),
      },
      {
        path: '', // Redirige a la página 'inicio' por defecto cuando se accede a '/tabs'
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ],
  },
  {
    path: '', // Redirige a '/tabs' por defecto cuando se accede al enlace raíz
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  // Otras rutas si las tienes...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
