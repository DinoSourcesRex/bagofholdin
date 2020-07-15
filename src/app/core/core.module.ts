import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { CONTAINER_COMPONENTS } from './containers/index';
// Utilities
import { LoadModuleOnce } from './utilities/load-module-once';

@NgModule({
  declarations: [...CONTAINER_COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class CoreModule extends LoadModuleOnce {}
