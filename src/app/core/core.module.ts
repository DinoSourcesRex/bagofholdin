import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { CONTAINER_COMPONENTS } from './containers/index';
// Utilities
import { LoadModuleOnce } from './utilities/load-module-once';

@NgModule({
  declarations: [...CONTAINER_COMPONENTS],
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
})
export class CoreModule extends LoadModuleOnce {}
