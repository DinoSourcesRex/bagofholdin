import { RouterModule } from '@angular/router';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
// Components
import { SelectPocketComponent } from './select-pocket.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: SelectPocketComponent,
  },
];

@NgModule({
  declarations: [SelectPocketComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class SelectPocketModule {}
