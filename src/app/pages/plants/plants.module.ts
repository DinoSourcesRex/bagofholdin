import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
})
export class PlantsModule {}
