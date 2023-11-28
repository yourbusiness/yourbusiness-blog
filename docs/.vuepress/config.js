import { defineUserConfig, defaultTheme } from 'vuepress'

import navbar from './config/navbar'
import sidebar from './config/sidebar'


export default defineUserConfig({
    lang: 'zh-CN',
    title: '进击的小码哥',
    description: 'welcome to yourbusiness blog %&',
    head: [['link', { rel: 'icon', href: '/img/logo.png' }]],
    theme: defaultTheme({
        logo: '/img/logo.png',
        repo: 'https://github.com/yourbusiness/yourbusiness-blog',
        repoLabel: '项目地址',
        lastUpdatedText: '最近更新',
        editLinkText: '编辑此页',
        contributorsText: '贡献者',
        navbar,
        sidebar
    }),
})