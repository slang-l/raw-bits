---
title: TypeScript 泛型入门
description: 从泛型函数、泛型接口、泛型约束到真实业务案例理解 TypeScript 泛型
outline: deep
---

# TypeScript 泛型入门

泛型可以让类型像参数一样传入函数、接口或类中。它的核心价值是保留类型信息，同时让代码具备复用能力。

## 为什么需要泛型

如果不用泛型，我们可能会写出这样的函数：

```ts
function identity(value: any) {
  return value;
}

const result = identity("raw-bits");
```

`any` 会丢失类型信息，调用方无法获得准确提示。使用泛型后，输入和输出之间的关系可以被保留下来。

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity("raw-bits");
// result 的类型是 string
```

## 泛型函数

泛型函数适合表达参数和返回值之间的类型关系。

```ts
function first<T>(list: T[]): T | undefined {
  return list[0];
}

const numberItem = first([1, 2, 3]);
const stringItem = first(["vue", "react"]);
```

调用时 TypeScript 会自动推断 `T` 的类型。

## 泛型接口

泛型接口适合描述可复用的数据结构。

```ts
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

type UserResponse = ApiResponse<User>;
```

这样可以统一接口响应结构，同时保留不同业务数据的具体类型。

## 泛型约束

泛型默认可以是任何类型。如果函数内部需要访问某些属性，就要添加约束。

```ts
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello");
getLength([1, 2, 3]);
```

`T extends { length: number }` 表示传入的类型必须具有 `length` 属性。

## keyof 与泛型

`keyof` 可以和泛型一起表达对象属性访问关系。

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "Front Guide",
};

const name = getValue(user, "name");
```

如果传入不存在的 key，TypeScript 会直接报错。

## 实战案例：分页响应

分页接口通常有稳定的外层结构，但列表项类型不同。

```ts
interface PageResult<T> {
  page: number;
  pageSize: number;
  total: number;
  list: T[];
}

interface Article {
  id: number;
  title: string;
  createdAt: string;
}

async function fetchArticles(): Promise<PageResult<Article>> {
  const response = await fetch("/api/articles");
  return response.json();
}
```

组件中使用时，`list` 会被准确推断为 `Article[]`。

```ts
const result = await fetchArticles();

result.list.forEach((article) => {
  console.log(article.title);
});
```

## 常见误区

### 泛型不是 any

`any` 是放弃类型检查，泛型是把类型关系延后到调用时确定。

### 不要过度泛型化

如果一个函数只服务于单一业务类型，就没有必要引入泛型。泛型应该用于真实的复用关系。

### 泛型命名要清楚

简单函数可以使用 `T`、`K`、`V`，复杂业务类型建议使用 `TData`、`TItem`、`TResponse` 等更具体的名字。

## 面试角度

回答泛型时，可以按这个结构：

1. 泛型让类型参数化。
2. 它可以保留输入和输出之间的类型关系。
3. 它比 `any` 更安全。
4. 常见使用场景包括工具函数、接口响应、组件 props 和状态管理。

## 总结

泛型是 TypeScript 类型复用的基础。学习时先掌握泛型函数和泛型接口，再理解泛型约束、`keyof` 和索引访问类型。真实项目中，泛型最常用于封装接口响应、通用组件和工具函数。
