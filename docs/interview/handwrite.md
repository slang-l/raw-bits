---
title: 前端高频手写题
description: 防抖、节流、深拷贝、instanceof 和 Promise.all 的简易实现
outline: deep
---

# 前端高频手写题

手写题考察的不只是记忆代码，更重要的是边界意识、执行顺序和表达能力。建议先说思路，再写代码，最后补充限制。

## 防抖

防抖的含义是：事件连续触发时，只在最后一次触发后的指定时间执行。

适用场景：

- 搜索框输入联想。
- 窗口 resize 后重新计算布局。
- 表单提交按钮防重复点击。

```js
function debounce(fn, delay = 300) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

使用示例：

```js
const onInput = debounce(function (event) {
  console.log(event.target.value);
}, 300);

document.querySelector("input").addEventListener("input", onInput);
```

面试补充：防抖的关键是通过闭包保存同一个定时器，并在新事件到来时取消上一次计划。

## 节流

节流的含义是：事件连续触发时，在固定时间间隔内最多执行一次。

适用场景：

- 滚动监听。
- 鼠标移动。
- 高频按钮点击。

```js
function throttle(fn, delay = 300) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

如果希望最后一次触发也能执行，可以结合定时器实现更完整版本。

```js
function throttleWithTrailing(fn, delay = 300) {
  let lastTime = 0;
  let timer = null;

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    clearTimeout(timer);

    if (remaining <= 0) {
      lastTime = now;
      fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        lastTime = Date.now();
        fn.apply(this, args);
      }, remaining);
    }
  };
}
```

## 深拷贝

深拷贝需要递归复制对象内部的嵌套结构。简单版本可以处理对象和数组。

```js
function deepClone(value, cache = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  const result = Array.isArray(value) ? [] : {};
  cache.set(value, result);

  Reflect.ownKeys(value).forEach((key) => {
    result[key] = deepClone(value[key], cache);
  });

  return result;
}
```

这个版本支持循环引用：

```js
const source = { name: "raw-bits" };
source.self = source;

const cloned = deepClone(source);
console.log(cloned.self === cloned); // true
```

面试补充：完整深拷贝还要考虑 `Date`、`RegExp`、`Map`、`Set`、函数、原型和属性描述符。

## instanceof

`instanceof` 用于判断构造函数的 `prototype` 是否出现在对象的原型链上。

```js
function myInstanceof(value, target) {
  if (
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  ) {
    return false;
  }

  let proto = Object.getPrototypeOf(value);
  const prototype = target.prototype;

  while (proto) {
    if (proto === prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
```

测试：

```js
myInstanceof([], Array); // true
myInstanceof({}, Array); // false
myInstanceof(() => {}, Function); // true
```

面试补充：`instanceof` 和 `typeof` 的判断维度不同，前者关注原型链，后者关注基础类型标签。

## Promise.all 简易实现

`Promise.all` 接收一组 Promise，全部成功时按原顺序返回结果；只要有一个失败，整体失败。

```js
function promiseAll(list) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;

    if (list.length === 0) {
      resolve(result);
      return;
    }

    list.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          result[index] = value;
          count++;

          if (count === list.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}
```

测试：

```js
promiseAll([
  Promise.resolve(1),
  2,
  new Promise((resolve) => setTimeout(() => resolve(3), 100)),
]).then((result) => {
  console.log(result); // [1, 2, 3]
});
```

实现重点：

- 保持结果顺序，而不是完成顺序。
- 非 Promise 值也要通过 `Promise.resolve` 包装。
- 空数组要立即 resolve。
- 任意一个 reject，整体 reject。

## 总结

手写题要先解释设计目标，再说明关键变量，最后补充边界。防抖和节流重点考闭包和定时器，深拷贝重点考递归和循环引用，`instanceof` 重点考原型链，`Promise.all` 重点考异步聚合和顺序保持。
