import { FeatureFlagService } from './../services/feature-flag.service';
// Angular
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';
// Rxjs
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[dndFeatureFlag]',
})
export class FeatureFlagDirective implements OnInit, OnDestroy {
  @Input('dndFeatureFlag')
  topLevelKey: string;

  @Output()
  featureEnabled = new EventEmitter<boolean>();

  internalSubLevelKeys: string[] = undefined;

  get subLevelKeys(): string[] {
    return this.internalSubLevelKeys;
  }

  @Input('subLevelKeys')
  set subLevelKeys(value: string[]) {
    if (Array.isArray(value)) {
      this.internalSubLevelKeys = value as string[];
    } else if (typeof value === 'string') {
      this.internalSubLevelKeys = [value];
    } else {
      throw new Error('sub level key must be an array of strings or a string');
    }
  }

  private subscription = new Subscription();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private featureFlagService: FeatureFlagService,
  ) {}

  ngOnInit(): void {
    if (!this.topLevelKey) {
      return null;
    }

    this.subscription.add(
      this.featureFlagService
        .getFeatureFlags()
        .pipe(take(1))
        .subscribe((featureFlags) => {
          const containsKey = this.featureFlagService.featureFlagEnabled(
            featureFlags,
            this.topLevelKey,
            this.subLevelKeys,
          );

          this.featureEnabled.emit(containsKey);
          this.hideElement(containsKey);
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private hideElement(show: boolean): void {
    if (show) {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
