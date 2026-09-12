---
title: 文章写作指南
description: Front Guide 新增文章、维护侧边栏和发布部署的统一规范
outline: deep
---

# 文章写作指南

Front Guide 的核心目标是让写文章变得简单。新增内容时，优先保持目录清晰、标题稳定、结构统一。

## 新增文章步骤

1. 在对应目录中新建 `xxx.md`。
2. 写入 frontmatter。
3. 按统一结构编写正文。
4. 在 `docs/.vitepress/sidebar.ts` 中添加菜单。
5. 提交到 GitHub。
6. GitHub Actions 自动构建并部署。

## Frontmatter 模板

```md
---
title: Flex 布局
description: 系统学习 CSS Flex 布局的核心概念和常见用法
outline: deep
---
```

推荐字段：

| 字段          | 说明                                |
| ------------- | ----------------------------------- |
| `title`       | 文章标题，会用于页面标题和搜索结果  |
| `description` | 简短说明文章解决什么问题            |
| `outline`     | 推荐使用 `deep`，显示二级和三级标题 |

## 正文模板

```md
---
title: 文章标题
description: 一句话说明文章内容
outline: deep
---

# 文章标题

## 背景

说明这个知识点解决什么问题。

## 核心概念

用清晰的语言解释关键概念。

## 常见用法

给出真实代码示例，并说明适用场景。

## 面试角度

整理常见提问方式和回答重点。

## 总结

用三到五句话收束文章。
```

## 侧边栏维护

侧边栏统一维护在 `docs/.vitepress/sidebar.ts`。新增文章后，找到对应分类并追加链接：

```ts
{
  text: 'CSS',
  collapsed: false,
  items: [
    { text: 'Flex 布局', link: '/basic/css/flex' }
  ]
}
```

路径不需要写 `.md` 后缀。`cleanUrls` 已开启，最终 URL 会更加简洁。

## GitHub Pages 部署

仓库 Settings -> Pages 中选择 GitHub Actions。推送到 `main` 分支后会执行：

```bash
npm install
npm run docs:build
```

如果部署到 `https://用户名.github.io/raw-bits/`，保持 `docs/.vitepress/config.mts` 中的默认配置：

```ts
const siteBase = process.env.VITEPRESS_BASE ?? "/raw-bits/";
```

如果使用自定义域名，可以设置为 `/`。
