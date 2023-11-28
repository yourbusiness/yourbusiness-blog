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
        sidebarDepth: 2,
        repo: '',
        navbar,
        sidebar
    }),
})