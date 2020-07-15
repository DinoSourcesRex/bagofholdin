// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '**', redirectTo: 'landing', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ErrorRoutingModule {
  constructor() {}
}
