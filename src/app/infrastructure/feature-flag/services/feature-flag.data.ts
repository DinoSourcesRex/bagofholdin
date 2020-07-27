import { StringTMap } from '@shared';

export class FeatureFlagData {
  static get devFlags(): StringTMap<string[]> {
    return {
      slurs: [],
    };
  }

  static get prodFlags(): StringTMap<string[]> {
    return {};
  }
}
