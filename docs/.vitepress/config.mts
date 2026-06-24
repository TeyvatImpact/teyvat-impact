import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Teyvat Impact",
  description: "一个架空的原神提瓦特世界观设定",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "虚空终端网络", link: "/world/atn/intro" },
      { text: "联合提瓦特", link: "/world/union-teyvat" },
    ],
    sidebar: [
      {
        text: "虚空终端网络",
        items: [
          { text: "简介", link: "/world/atn/intro" },
          { text: "数字摩拉", link: "/world/atn/e-mora" },
        ],
      },
      {
        text: "联合提瓦特",
        items: [{ text: "简介", link: "/world/union-teyvat" }],
      },
      {
        text: "提瓦特交通系统",
        items: [
          { text: "概述", link: "/world/ttg/intro" },
          { text: "提瓦特铁路", link: "/world/ttg/tr" },
          { text: "线路", link: "/world/ttg/lines" },
        ],
      },
      // {
      //   text: "书籍",
      //   items: [
      //     { text: "《提瓦特七国行政架构的简要分析》", link: "/books/seven-nations-administration" },
      //   ],
      // },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/teyvatimpact/" }],
  },
  cleanUrls: true,
  markdown: {
    breaks: true,
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: Number(process.env.PORT) || 3000,
    },
  },
});
