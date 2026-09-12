import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { execSync } from "node:child_process";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

const siteUrl = "https://slang-l.github.io/raw-bits/";
const siteBase = process.env.VITEPRESS_BASE ?? new URL(siteUrl).pathname;
const githubRepo = "slang-l/raw-bits";

function canUseGit() {
  try {
    execSync("git --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// VitePress 的 lastUpdated 依赖本机 git 命令。
// 本地没有安装 git 时自动关闭，避免 dev server 出现 spawn git ENOENT。
// GitHub Actions 环境自带 git，线上构建仍会展示最后更新时间。
const enableLastUpdated = canUseGit();

const teekConfig = defineTeekConfig({
  teekTheme: true,
  // Front Guide 是知识库站点，保留 VitePress 首页结构，关闭 Teek 博客式首页。
  teekHome: false,
  vpHome: true,
  pageStyle: "card-nav",
  themeSize: "default",
  anchorScroll: true,
  sidebarTrigger: true,
  breadcrumb: {
    enabled: true,
    showCurrentName: true,
    separator: "/",
  },
  backTop: {
    enabled: true,
    content: "progress",
  },
  toComment: {
    enabled: false,
  },
  themeEnhance: {
    enabled: true,
    position: "top",
    layoutSwitch: {
      defaultMode: "original",
      defaultDocMaxWidth: 90,
      defaultPageMaxWidth: 95,
    },
    themeColor: {
      defaultColorName: "vp-default",
      defaultSpread: false,
    },
    spotlight: {
      defaultValue: false,
    },
  },
  articleAnalyze: {
    showInfo: false,
    showUpdateDate: false,
  },
  articleShare: {
    enabled: true,
  },
  articleUpdate: {
    enabled: true,
    limit: 4,
  },
  codeBlock: {
    enabled: true,
    collapseHeight: 720,
    overlay: false,
    langTextTransform: "none",
  },
  windowTransition: false,
  loading: false,
});

export default defineConfig({
  ...teekConfig,
  title: "Front Guide",
  description: "一份现代前端开发者的系统学习指南",
  lang: "zh-CN",
  base: siteBase,
  sitemap: {
    hostname: siteUrl,
  },
  cleanUrls: true,
  lastUpdated: enableLastUpdated,

  head: [
    ...(teekConfig.head ?? []),
    ["meta", { name: "theme-color", content: "#2563eb" }],
    ["link", { rel: "icon", href: `${siteBase}logo.svg` }],
  ],

  themeConfig: {
    ...(teekConfig.themeConfig ?? {}),
    logo: `${siteBase}logo.svg`,
    nav,
    sidebar,

    socialLinks: [{ icon: "github", link: `https://github.com/${githubRepo}` }],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清空搜索",
            backButtonTitle: "关闭搜索",
            noResultsText: "没有找到相关内容",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: "本页目录",
    },

    editLink: {
      pattern: `https://github.com/${githubRepo}/edit/main/docs/:path`,
      text: "在 GitHub 上编辑此页",
    },

    ...(enableLastUpdated
      ? {
          lastUpdated: {
            text: "最后更新",
            formatOptions: {
              dateStyle: "medium",
              timeStyle: "short",
            },
          },
        }
      : {}),

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 Front Guide",
    },
  },
});
