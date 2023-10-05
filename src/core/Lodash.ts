export namespace Lodash {
  export type ZipWithArg<L extends [any[], ...any[]], O> = [
    ...L,
    zipper: (...arg: ZipperArg<L>) => O,
  ];

  // [number[], string[]] => [number, string]
  export type ZipperArg<L extends any[], R extends any[] = []> = L extends [
    infer FArray,
    ...infer RArray,
  ]
    ? FArray extends (infer F)[]
      ? ZipperArg<RArray, [...R, F]>
      : never
    : R;

  export declare function zipWith<List extends [any[], ...any[]], O>(
    ...arg: ZipWithArg<List, O>
  ): O[];
}

Lodash.zipWith([1, 2], ['a', 'b'], [true, true], (a, b, c) => c);
