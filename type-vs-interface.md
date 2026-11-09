# Type Aliases vs Interfaces in TypeScript

## Introduction

In TypeScript, both type aliases and interfaces are used to define types. They help us describe the structure of data and make our code easier to understand and maintain. However, they have some differences in how they work and when we should use them.

## Type Aliases

A type alias actually gives a name to a type. It can mainly describe the following types:

1. Object types
2. Union types
3. Primitive types
4. Tuples

**Example:**

```ts
type Status = "active" | "inactive";
```

Here, we have used a union type with a type alias called `Status`.

## Interfaces

An interface mainly describes the structure of an object. It defines the properties and their respective types.

**Example:**

```ts
interface User {
    id: number;
    name: string;
}
```

## Core Differences Between Type Aliases and Interfaces

**1. Union Types**

```ts
type Role = "admin" | "member";

interface User {
    name: string;
    id: number;
    role: Role;
}
```

We can create union types using type aliases, but we cannot directly define a union type using an interface. However, we can use a type alias inside an interface.

**2. Extending and Reusing Properties**

An interface can extend another interface using the `extends` keyword.

```ts
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}
```

Type aliases can achieve similar functionality using intersection types (`&`).

```ts
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};
```

**3. Declaration Merging**

Interfaces support declaration merging. If we declare two interfaces with the same name, TypeScript combines their properties.

```ts
interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}
```

However, type aliases do not support declaration merging. Declaring another type alias with the same name will cause an error.

## Conclusion

Overall, the main concern is understanding when to use type aliases and when to use interfaces. When we need union types, primitive types, or tuples, type aliases are useful. On the other hand, when we mainly work with object structures, inheritance, and declaration merging, interfaces are a good choice. Both are useful, and the choice depends on the requirements of the project.