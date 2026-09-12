# Front Guide

Front Guide 是一份现代前端开发者的系统学习指南，使用 VitePress 构建，适合长期维护 Markdown 技术文章、面试复习资料和学习路线。

## 技术栈

- VitePress
- TypeScript
- Markdown
- Vue
- GitHub Actions

## 本地开发

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## 目录说明

```txt
docs/
  .vitepress/        VitePress 配置、导航、侧边栏和主题样式
  basic/             HTML、CSS 等前端基础
  javascript/        JavaScript 核心与异步编程
  typescript/        TypeScript 类型系统
  vue/               Vue 知识体系
  react/             React 知识体系
  engineering/       工程化与构建部署
  browser/           浏览器原理
  backend/           Java、Spring、Spring Boot 等后端模块
  interview/         面试指南
  roadmap/           学习路线
```

## 新增文章

1. 在对应分类目录中新建 Markdown 文件。
2. 写入 `title`、`description`、`outline` 等 frontmatter。
3. 在 `docs/.vitepress/sidebar.ts` 中添加菜单项。
4. 提交到 GitHub。
5. GitHub Actions 自动构建并部署。

详细规范见 [写作指南](./docs/writing-guide.md)。

## GitHub Pages 部署

仓库 Settings -> Pages 中选择 GitHub Actions。推送到 `main` 分支后，`.github/workflows/deploy.yml` 会执行：

```bash
npm install
npm run docs:build
```

默认配置适合部署到：

```txt
https://用户名.github.io/raw-bits/
```

如果使用自定义域名，请把 `docs/.vitepress/config.mts` 中的 `siteBase` 改为 `/`，或在构建环境设置：

```bash
VITEPRESS_BASE=/
```
