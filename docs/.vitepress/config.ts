import { defineConfig } from 'vitepress'
// import pkg from 'vitepress/package.json'
// import { createRequire } from 'module'

export default defineConfig({
  lang: 'zh-CN',
  base: '/learn-doc',
  title: '前端知识汇总',
  description: 'Vite & Vue powered static site generator.',
  appearance: true, // If the option is set to true, the default theme will be determined by the user's preferred color scheme.
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/frontend/': sidebarFrontend(),
      // '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  }


})
function nav() {
  return [
    { text: '前端基础', link: '/frontend/index', activeMatch: '/frontend' },
  ]
}


function sidebarFrontend() {
  return [
    {
      text: 'HTML',
      collapse: false,
      items: [
        { text: 'HTML基础', link: '/frontend/html/index' },
      ]
    },
    {
      text: 'JavaScript',
      collapse: false,
      items: [
        { text: 'JavaScript基础', link: '/frontend/javascript/index' },
      ]
    },
    {
      text: 'CSS',
      collapse: false,
      items: [
        { text: 'CSS基础', link: '/frontend/css/index' },
      ]
    }
  ]
}