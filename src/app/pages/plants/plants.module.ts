import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { PLANT_GLOBAL_SERVICES } from './services/index';

export const ROUTES: Routes = [
  {
    path: 'plants',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main/main.module').then((mod) => mod.MainModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [...PLANT_GLOBAL_SERVICES],
})
export class PlantsModule {}
