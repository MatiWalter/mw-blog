---
  title: 'Typescript basics'
  date: '2021-08-21'
---

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

## Defining types

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

For example, to create an object with an inferred type which includes name: string and id: number, you can write:

```ts
  const user = {
    name: 'Matias',
    id: 0,
  }
```

You can explicitly describe this object’s shape using an interface declaration:

```ts
  export interface User {
    name: string;
    id: number;
  }
```

You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:

```ts
  const user: User = {
    name: 'Matias',
    id: 0,
  }
```

## Composing types

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with Unions, and with Generics.

### Unions

With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

```ts
  type myBool = true | false;
```

A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

```ts
  type WindowStates = "open" | "closed" | "minimized";
  type LockStates = "locked" | "unlocked";
  type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

```ts
  function getLength(obj: string | string[]) {
    return obj.length;
  }
```

### Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```ts
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{ name: string }>;
```

You can declare your own types that use generics:

```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
'Argument of type 'number' is not assignable to parameter of type 'string'.'
```
