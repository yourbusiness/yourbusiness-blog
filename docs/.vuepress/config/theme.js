import {defaultTheme} from "vuepress";
import navbar from "./navbar";
import sidebar from "./sidebar";

const theme_config = {
    logo: '/img/logo.png',
    repo: 'https://github.com/yourbusiness/yourbusiness-blog',
    repoLabel: '项目地址',
    lastUpdatedText: '最近更新',
    editLinkText: '编辑此页',
    contributorsText: '贡献者',
    navbar,
    sidebar
}

const theme = defaultTheme(theme_config)


export {theme_config}
export default theme