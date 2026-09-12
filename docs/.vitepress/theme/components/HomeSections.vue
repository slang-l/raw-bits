<script setup lang="ts">
import { withBase } from "vitepress";

const mustReadItems = [
  {
    tag: "JavaScript",
    title: "深入理解闭包",
    desc: "作用域、变量生命周期和面试表达",
    link: "/javascript/closure",
    accent: "accent-blue",
  },
  {
    tag: "运行机制",
    title: "Event Loop 事件循环",
    desc: "同步任务、宏任务、微任务和 async/await",
    link: "/javascript/event-loop",
    accent: "accent-cyan",
  },
  {
    tag: "CSS",
    title: "Flex 布局完全指南",
    desc: "主轴、交叉轴、容器属性和项目属性",
    link: "/basic/css/flex",
    accent: "accent-indigo",
  },
  {
    tag: "Interview",
    title: "前端高频手写题",
    desc: "防抖、节流、深拷贝和 Promise.all",
    link: "/interview/handwrite",
    accent: "accent-slate",
  },
];

const roadmapItems = [
  { title: "前端基础", desc: "HTML、CSS、响应式与页面结构", link: "/basic/" },
  {
    title: "JavaScript 核心",
    desc: "语言机制、异步编程和对象模型",
    link: "/javascript/",
  },
  {
    title: "TypeScript",
    desc: "类型建模、泛型和工程约束",
    link: "/typescript/",
  },
  { title: "Vue / React", desc: "组件、状态、路由和性能优化", link: "/vue/" },
  { title: "工程化", desc: "构建、规范、CI/CD 和发布", link: "/engineering/" },
];

const reviewItems = [
  {
    title: "高频八股题",
    desc: "概念模型和回答结构",
    link: "/interview/questions",
  },
  {
    title: "浏览器渲染原理",
    desc: "DOM、CSSOM、布局和绘制",
    link: "/browser/render",
  },
  {
    title: "Vite 核心原理",
    desc: "ESM、预构建、HMR 和 Rollup",
    link: "/engineering/vite",
  },
  { title: "简历建议", desc: "项目亮点和结果表达", link: "/interview/resume" },
];
</script>

<template>
  <div class="fg-home">
    <section class="fg-section">
      <div class="fg-section-head">
        <p class="fg-kicker">Must Read</p>
        <h2>必读入口</h2>
        <p>像翻技术手册一样进入知识体系，先抓主线，再补细节。</p>
      </div>

      <div class="fg-link-grid">
        <a
          v-for="item in mustReadItems"
          :key="item.link"
          class="fg-link-card"
          :class="item.accent"
          :href="withBase(item.link)"
        >
          <span>{{ item.tag }}</span>
          <strong>{{ item.title }}</strong>
          <em>{{ item.desc }}</em>
        </a>
      </div>
    </section>

    <section class="fg-section fg-two-col">
      <div>
        <div class="fg-section-head compact">
          <p class="fg-kicker">Roadmap</p>
          <h2>学习路径</h2>
        </div>
        <ol class="fg-roadmap">
          <li v-for="item in roadmapItems" :key="item.link">
            <a :href="withBase(item.link)">{{ item.title }}</a>
            <span>{{ item.desc }}</span>
          </li>
        </ol>
      </div>

      <div>
        <div class="fg-section-head compact">
          <p class="fg-kicker">Review</p>
          <h2>面试复习</h2>
        </div>
        <div class="fg-review-list">
          <a
            v-for="item in reviewItems"
            :key="item.link"
            :href="withBase(item.link)"
          >
            {{ item.title }}
            <span>{{ item.desc }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="fg-section fg-footer-entry">
      <div>
        <p class="fg-kicker">Maintain</p>
        <h2>长期维护入口</h2>
        <p>新增文章时，优先保持目录稳定、标题清楚、侧边栏同步。</p>
      </div>
      <div class="fg-actions">
        <a :href="withBase('/writing-guide')">写作指南</a>
        <a href="https://github.com/your-name/raw-bits">GitHub 仓库</a>
      </div>
    </section>
  </div>
</template>
