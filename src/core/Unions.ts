export namespace Unions {
  export type Map<T> = { [key: string]: T };
}

type A = {
  a: string;
  b: number;
};

type B = {
  a1: string;
};

type C = keyof A | keyof B;
