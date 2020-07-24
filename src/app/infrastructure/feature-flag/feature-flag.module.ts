// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { FeatureFlagService } from './services/feature-flag.service';
// Directives
import { FeatureFlagDirective } from './directives/feature-flag.directive';

@NgModule({
  declarations: [FeatureFlagDirective],
  imports: [CommonModule],
  exports: [FeatureFlagDirective],
})
export class FeatureFlagModule {
  static forRoot(): ModuleWithProviders<FeatureFlagModule> {
    return {
      ngModule: FeatureFlagModule,
      providers: [FeatureFlagService],
    };
  }
}
