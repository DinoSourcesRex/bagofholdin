// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CenteredContainerComponent } from './../../core/containers/centered-container/centered-container.component';

export const ROUTES: Routes = [
  {
    path: 'landing',
    component: CenteredContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'select-pocket',
        pathMatch: 'full',
      },
      {
        path: 'select-pocket',
        loadChildren: () =>
          import('./parent/select-pocket/select-pocket.module').then(
            (mod) => mod.SelectPocketModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class LandingModule {}
