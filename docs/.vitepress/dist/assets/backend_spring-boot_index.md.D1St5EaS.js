import {
  bV as a,
  aL as s,
  u as t,
  G as n,
} from "./chunks/framework.C5oj02QE.js";
const c = JSON.parse(
    '{"title":"Spring Boot 概览","description":"Spring Boot 模块学习入口，梳理自动配置、Starter、配置管理、Web、数据访问和 Actuator","frontmatter":{"title":"Spring Boot 概览","description":"Spring Boot 模块学习入口，梳理自动配置、Starter、配置管理、Web、数据访问和 Actuator","outline":"deep"},"headers":[],"relativePath":"backend/spring-boot/index.md","filePath":"backend/spring-boot/index.md","lastUpdated":1780922851000}',
  ),
  e = { name: "backend/spring-boot/index.md" };
function r(p, i, l, o, h, d) {
  return (
    s(),
    t("div", null, [
      ...(i[0] ||
        (i[0] = [
          n(
            `<h1 id="spring-boot-概览" tabindex="-1">Spring Boot 概览 <a class="header-anchor" href="#spring-boot-概览" aria-label="Permalink to &quot;Spring Boot 概览&quot;">​</a></h1><p>Spring Boot 建立在 Spring 之上，目标是减少配置成本，让后端项目可以更快启动、开发、测试和部署。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li><a href="/raw-bits/backend/spring-boot/auto-configuration">自动配置</a>：理解默认配置如何生效。</li><li><a href="/raw-bits/backend/spring-boot/starter">Starter</a>：理解依赖组合和功能引入方式。</li><li><a href="/raw-bits/backend/spring-boot/configuration">配置管理</a>：理解配置文件、多环境和敏感信息管理。</li><li><a href="/raw-bits/backend/spring-boot/web-api">Web 接口</a>：理解 REST 接口、参数校验和统一响应。</li><li><a href="/raw-bits/backend/spring-boot/data-access">数据访问</a>：理解数据库连接、ORM 和事务配合。</li><li><a href="/raw-bits/backend/spring-boot/actuator">Actuator</a>：理解健康检查、指标和运行状态。</li></ul><h2 id="启动入口" tabindex="-1">启动入口 <a class="header-anchor" href="#启动入口" aria-label="Permalink to &quot;启动入口&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BackendApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SpringApplication.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BackendApplication.class, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>@SpringBootApplication</code> 是组合注解，包含组件扫描、配置声明和自动配置能力。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Spring Boot 的重点不是少写配置，而是理解它如何通过 Starter、自动配置和配置属性把一个 Spring 应用组织成可交付的工程。</p>`,
            9,
          ),
        ])),
    ])
  );
}
const g = a(e, [["render", r]]);
export { c as __pageData, g as default };
