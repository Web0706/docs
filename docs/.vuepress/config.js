module.exports = {
  title: 'Wsz 的文档',
  description: '这是我的新文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Wsz 的文档',
      description: '这是我的新文档'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.webp',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '面试总结',
        link: '/guide/'
      },
      {
        text: '开发环境',
        link: '/dev/windows'
      },
      {
        text: '移动端适配',
        link: '/dev/mobile'
      }
    ],
    sidebar: {
      '/dev/': [
        'windows',
        'wt',
        'wsl2',
        'ubuntu',
        'docker',
        'powershell',
        'vscode',
        'git',
        'ssh',
        'mobile'
      ]
    },
    sidebarDepth: 2,
    activeHeaderLinks: false,
    lastUpdated: '上次更新',
    repo: 'Web0706/docs',
    docsRepo: 'Web0706/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
  markdown: {
    lineNumbers: true
  }
}
