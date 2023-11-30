import { defineUserConfig } from 'vuepress'

import plugins from './config/plugins'
import theme from "./config/theme";
import head from "./config/head";

const config = {
    lang: 'zh-CN',
    title: '进击的小码哥',
    description: 'welcome to yourbusiness blog %&',
    head,
    theme,
    plugins
}

export default defineUserConfig(config)