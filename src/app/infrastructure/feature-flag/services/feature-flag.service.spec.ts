// Angular
import { TestBed } from '@angular/core/testing';
// Service
import { FeatureFlagService } from './feature-flag.service';
// Models
import { StringTMap } from '@shared/models/t-map';

describe('FeatureFlagService', () => {
  let service: FeatureFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureFlagService],
    });
    service = TestBed.inject(FeatureFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('with no feature flags', () => {
    it('should return false when looking for a top level key', () => {
      const result = service.featureFlagEnabled({}, 'admin');
      expect(result).toBeFalsy();
    });

    it('should return false when looking for an undefined top level key', () => {
      const result = service.featureFlagEnabled({}, undefined);
      expect(result).toBeFalsy();
    });

    it('should return false when looking for a sub level key as an array', () => {
      const result = service.featureFlagEnabled({}, 'admin', ['admin1']);
      expect(result).toBeFalsy();
    });

    it('should return false when looking for a sub level key as a string', () => {
      const result = service.featureFlagEnabled({}, 'admin', 'admin1');
      expect(result).toBeFalsy();
    });
  });

  describe('with feature flags', () => {
    const featureFlags: StringTMap<string[]> = {
      admin: ['admin1', 'admin2'],
      settings: ['dimensions', 'workflow'],
    };

    describe('when checking top level key', () => {
      it('should return true when looking for a key that exists', () => {
        const result = service.featureFlagEnabled(featureFlags, 'admin');
        expect(result).toBeTruthy();
      });

      it('should return false when looking for a key that does not exist', () => {
        const result = service.featureFlagEnabled(featureFlags, 'admin+1');
        expect(result).toBeFalsy();
      });

      it('should return false when looking for undefined', () => {
        const result = service.featureFlagEnabled(featureFlags, undefined);
        expect(result).toBeFalsy();
      });
    });

    describe('when checking sub level key', () => {
      it('should return true when looking for a key that exists', () => {
        const result = service.featureFlagEnabled(
          featureFlags,
          'admin',
          'admin1',
        );
        expect(result).toBeTruthy();
      });

      it('should return true when looking for a key that exists as an array', () => {
        const result = service.featureFlagEnabled(featureFlags, 'admin', [
          'admin1',
        ]);
        expect(result).toBeTruthy();
      });

      it('should return true when looking for a key that does exist and undefined sub level keys', () => {
        const result = service.featureFlagEnabled(
          featureFlags,
          'admin',
          undefined,
        );
        expect(result).toBeTruthy();
      });

      it('should return true when looking for a key that does exist and an empty array for sub level keys', () => {
        const result = service.featureFlagEnabled(featureFlags, 'admin', []);
        expect(result).toBeTruthy();
      });

      it('should return false when looking for a key that does not exist', () => {
        const result = service.featureFlagEnabled(
          featureFlags,
          'admin',
          'admin9999+1',
        );
        expect(result).toBeFalsy();
      });
    });
  });
});
