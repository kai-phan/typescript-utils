import { IsTypeEqual, typeAssert } from 'src/type-assertions';

export namespace Arrays {
  export type Map<T> = { [key: string]: T };
}

type A = IsTypeEqual<12, 213>;

// @ts-expect-error
typeAssert<IsTypeEqual<A, false>>();
