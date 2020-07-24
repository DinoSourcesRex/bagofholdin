// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// Index.ts
import { SHARED_SERVICES } from './index';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SHARED_SERVICES],
    };
  }
}
