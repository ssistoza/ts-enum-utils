import { describe, expect, test } from 'vitest';
import { BaseEnumUtil } from './base-enum-util';

describe('Base Enum Utils', () => {
  enum Role {
    Admin,
    Editor,
    Viewer,
    Creator,
  }

  type RoleValues = `${Role}`;

  class RoleUtil extends BaseEnumUtil<Role> {
    getShortLabel = this.produceFn({
      [Role.Admin]: 'Admin',
      [Role.Editor]: 'Editor',
      default: 'Viewer',
    });

    public getFullLabel(role: Role | RoleValues) {
      return this.switch(role as Role, {
        [Role.Admin]: 'Web Administrator',
        [Role.Editor]: 'Web Editor',
        [Role.Viewer]: 'Authenticated Web Viewer',
        default: 'Unauthenticated Web Viewer',
      });
    }
  }

  const util = new RoleUtil();

  describe('getShortLabel', () => {
    describe('when using the enums', () => {
      test('when is admin return Admin label', () => {
        expect(util.getShortLabel(Role.Admin)).toBe('Admin');
      });

      test('when is editor return Editor label', () => {
        expect(util.getShortLabel(Role.Editor)).toBe('Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getShortLabel(Role.Viewer)).toBe('Viewer');
      });

      test('when is creator return Viewer label', () => {
        expect(util.getShortLabel(Role.Creator)).toBe('Viewer');
      });
    });

    describe('when using strings', () => {
      test('when is admin return Admin label', () => {
        expect(util.getShortLabel('0')).toBe('Admin');
      });

      test('when is editor return Editor label', () => {
        expect(util.getShortLabel('1')).toBe('Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getShortLabel('2')).toBe('Viewer');
      });

      test('when is creator return Viewer label', () => {
        expect(util.getShortLabel('3')).toBe('Viewer');
      });
    });

    describe('when using numbers', () => {
      test('when is admin return Admin label', () => {
        expect(util.getShortLabel(0)).toBe('Admin');
      });

      test('when is editor return Editor label', () => {
        expect(util.getShortLabel(1)).toBe('Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getShortLabel(2)).toBe('Viewer');
      });

      test('when is creator return Viewer label', () => {
        expect(util.getShortLabel(3)).toBe('Viewer');
      });
    });
  });

  describe('getFullLabel', () => {
    describe('when using the enums', () => {
      test('when is admin return Admin label', () => {
        expect(util.getFullLabel(Role.Admin)).toBe('Web Administrator');
      });

      test('when is editor return Editor label', () => {
        expect(util.getFullLabel(Role.Editor)).toBe('Web Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getFullLabel(Role.Viewer)).toBe('Authenticated Web Viewer');
      });

      test('when is creator return Default label', () => {
        expect(util.getFullLabel(Role.Creator)).toBe(
          'Unauthenticated Web Viewer'
        );
      });
    });

    describe('when using strings', () => {
      test('when is admin return Admin label', () => {
        expect(util.getFullLabel('0')).toBe('Web Administrator');
      });

      test('when is editor return Editor label', () => {
        expect(util.getFullLabel('1')).toBe('Web Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getFullLabel('2')).toBe('Authenticated Web Viewer');
      });

      test('when is creator return Viewer label', () => {
        expect(util.getFullLabel('3')).toBe('Unauthenticated Web Viewer');
      });
    });

    describe('when using numbers', () => {
      test('when is admin return Admin label', () => {
        expect(util.getFullLabel(0)).toBe('Web Administrator');
      });

      test('when is editor return Editor label', () => {
        expect(util.getFullLabel(1)).toBe('Web Editor');
      });

      test('when is viewer return Viewer label', () => {
        expect(util.getFullLabel(2)).toBe('Authenticated Web Viewer');
      });

      test('when is creator return Viewer label', () => {
        expect(util.getFullLabel(3)).toBe('Unauthenticated Web Viewer');
      });
    });
  });
});
