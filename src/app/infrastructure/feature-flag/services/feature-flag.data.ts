import { StringTMap } from '@shared';

export class FeatureFlagData {
  static get devFlags(): StringTMap<string[]> {
    return {};
  }

  static get prodFlags(): StringTMap<string[]> {
    return {};
  }
}
