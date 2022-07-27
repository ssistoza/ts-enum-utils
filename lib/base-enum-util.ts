import { Object } from 'ts-toolbelt';

type SwitchObject<
  TEnumValues extends string | number,
  ReturnVal
> = Object.Record<TEnumValues, ReturnVal, ['?', 'R']> & {
  default: ReturnVal;
};

/**
 * A really simple utility class for building utlities based on enum.
 *
 * @example
 * enum TestEnum {
 *   One='one', Two='two'
 * }
 *
 * type TestEnumValues = `${TestEnum}`
 *
 * class TestEnumUtil extends BaseEnumUtil<TestEnum> {
 *   getLabel = this.produceFn<string>({
 *     [TestEnum.One]: 'First',
 *     default: 'Last',
 *   })
 * }
 */
export abstract class BaseEnumUtil<
  Enum extends string | number,
  TEnumValues extends string = `${Enum}`
> {
  protected switch<ReturnVal>(
    spt: Enum,
    switchFns: SwitchObject<Enum | TEnumValues, ReturnVal>
  ) {
    if (spt in switchFns) {
      return switchFns[spt];
    }

    return switchFns.default;
  }

  protected produceFn<ReturnVal>(
    switchFns: SwitchObject<TEnumValues, ReturnVal>
  ) {
    /* IMO the key  should strictly be Enum but as a precaution i am widen the values. */
    return (key: Enum | TEnumValues) => {
      return this.switch(key as Enum, switchFns);
    };
  }
}
