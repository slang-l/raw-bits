import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  { text: "前端基础", link: "/basic/" },
  { text: "JavaScript", link: "/javascript/" },
  { text: "TypeScript", link: "/typescript/" },
  {
    text: "Vue / React",
    items: [
      { text: "Vue", link: "/vue/" },
      { text: "React", link: "/react/" },
    ],
  },
  { text: "工程化", link: "/engineering/" },
  { text: "浏览器", link: "/browser/" },
  {
    text: "后端",
    items: [
      { text: "Java", link: "/backend/java/" },
      { text: "Spring", link: "/backend/spring/" },
      { text: "Spring Boot", link: "/backend/spring-boot/" },
    ],
  },
  { text: "面试指南", link: "/interview/" },
  { text: "学习路线", link: "/roadmap/" },
  { text: "GitHub", link: "https://github.com/your-name/raw-bits" },
];
