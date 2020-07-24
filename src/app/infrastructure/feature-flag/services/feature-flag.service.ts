import { environment } from 'src/environments/environment';
// Angular
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, of } from 'rxjs';
// Models
import { StringTMap } from '@shared';
// Data
import { FeatureFlagData } from './feature-flag.data';

@Injectable()
export class FeatureFlagService {
  constructor() {}

  getFeatureFlags(): Observable<StringTMap<string[]>> {
    if (environment.production) {
      return of(FeatureFlagData.prodFlags);
    }

    return of(FeatureFlagData.devFlags);
  }

  /**
   * Returns whether the featureFlags collection contains both the topLevelKeys and the, optional, subLevelKeys.
   * @param featureFlags The collection of feature flags that are being searched.
   * @param topLevelKey The top level key that is being searched for.
   * @param subLevelKeys an optional array of subLevelKeys to is being searched for.
   * @returns if the featureFlags collection contains both the topLevelKey and the, optional, subLevelKeys.
   */
  featureFlagEnabled(
    featureFlags: StringTMap<string[]>,
    topLevelKey: string,
    subLevelKeys?: string | string[],
  ): boolean {
    if (!subLevelKeys) {
      return this.containsTopLevelKey(featureFlags, topLevelKey);
    }

    const subLevelKeysAsArray = this.toArray(subLevelKeys);
    const subLevelAccess = this.findSubLevelKeys(featureFlags, topLevelKey);

    return subLevelKeysAsArray.every((key) => subLevelAccess.includes(key));
  }

  /**
   * Returns whether the featureFlags collection contains the topLevelKey.
   * @param featureFlags The collection of feature flags that are being searched.
   * @param topLevelKey The top level key that is being searched for.
   * @returns if the featureFlags collection contain the topLevelKey.
   */
  private containsTopLevelKey(
    featureFlags: StringTMap<string[]>,
    topLevelKey: string,
  ): boolean {
    return !featureFlags
      ? false
      : Object.keys(featureFlags).includes(topLevelKey);
  }

  /**
   * Transforms a string into an array to ensure type integrity.
   * @param items Either a string or an array.
   * @returns an array.
   */
  private toArray(items: string | string[]): string[] {
    if (Array.isArray(items)) {
      return items;
    } else if (typeof items === 'string') {
      return [items];
    } else {
      throw new Error('sub level key must be an array of strings or a string');
    }
  }

  /**
   * Returns an array of subLevelKeys for a specific topLevelKey within a collection of featureFlags.
   * @param featureFlags The collection of feature flags that we are filtering.
   * @param topLevelKey The top level key that is being searched for.
   * @returns an array of sub level keys, an empty array if there is no top level key.
   */
  private findSubLevelKeys(
    featureFlags: StringTMap<string[]>,
    topLevelKey: string,
  ): string[] {
    return !featureFlags || !featureFlags[topLevelKey]
      ? []
      : featureFlags[topLevelKey];
  }
}
