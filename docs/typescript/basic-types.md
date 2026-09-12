---
title: 基础类型
description: TypeScript 常用基础类型和联合类型
outline: deep
---

# 基础类型

TypeScript 通过类型标注让变量、函数参数和返回值具有明确约束。

```ts
let username: string = "raw-bits";
let visible: boolean = true;
let count: number = 1;
```

## 联合类型

```ts
type Status = "idle" | "loading" | "success" | "error";

function setStatus(status: Status) {
  return status;
}
```

## 实践建议

不要为了类型而重复业务逻辑。好的类型应该帮助读者理解数据结构，而不是增加阅读成本。
