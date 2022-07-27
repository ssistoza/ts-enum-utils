# TS Enum Utilities

A small helpful library for extending your typescript enums!

## Getting Started

At the moment this library can only be consumed as an ES Module.

Using yarn:

```
yarn add @ssistoza/ts-enum-utils
```

Using npm:

```
npm i @ssistoza/ts-enum-utils
```

### Usage

Using `BaseEnumUtil`:

```ts
import { BaseEnumUtil } from 'ts-enum-utils';

export enum Role {
  Admin,
  Editor,
  Viewer,
  Creator,
}

type RoleValues = `${Role}`;

class BaseRoleUtil extends BaseEnumUtil<Role> {
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

export const RoleUtil = new BaseRoleUtil();
```
