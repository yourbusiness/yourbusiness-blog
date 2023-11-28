export const themeData = JSON.parse("{\"logo\":\"/img/logo.png\",\"repo\":\"https://github.com/yourbusiness/yourbusiness-blog\",\"repoLabel\":\"项目地址\",\"lastUpdatedText\":\"最近更新\",\"editLinkText\":\"编辑此页\",\"contributorsText\":\"贡献者\",\"navbar\":[{\"text\":\"组件\",\"link\":\"/components/\"},{\"text\":\"文档\",\"children\":[{\"text\":\"前端框架\",\"children\":[{\"text\":\"Vue\",\"link\":\"https://cn.vuejs.org/guide/introduction.html\"},{\"text\":\"React\",\"link\":\"https://react.nodejs.cn/learn\"},{\"text\":\"Svelte\",\"link\":\"https://www.svelte.cn/\"}]},{\"text\":\"前端打包工具\",\"children\":[{\"text\":\"Webpack\",\"link\":\"https://www.webpackjs.com/concepts/\"},{\"text\":\"Rollup\",\"link\":\"https://www.rollupjs.com/\"},{\"text\":\"Vite\",\"link\":\"https://cn.vitejs.dev/guide/why\"}]},{\"text\":\"前端UI库\",\"children\":[{\"text\":\"element-plus\",\"link\":\"https://element-plus.org/zh-CN/component/button.html\"},{\"text\":\"ant-design\",\"link\":\"https://ant-design.antgroup.com/components/overview-cn/\"}]},{\"text\":\"vue工具库\",\"children\":[{\"text\":\"VueUse\",\"link\":\"https://alfred-skyblue.gitee.io/\"}]},{\"text\":\"文档构建工具\",\"children\":[{\"text\":\"VuePress\",\"link\":\"https://vuepress.vuejs.org/zh/guide/\"}]}]},{\"text\":\"工具箱\",\"children\":[{\"text\":\"在线编辑\",\"children\":[{\"text\":\"图片压缩\",\"link\":\"https://tinypng.com/\"}]},{\"text\":\"在线服务\",\"children\":[{\"text\":\"阿里云\",\"link\":\"https://www.aliyun.com/\"},{\"text\":\"腾讯云\",\"link\":\"https://cloud.tencent.com/\"}]},{\"text\":\"博客指南\",\"children\":[{\"text\":\"掘金\",\"link\":\"https://juejin.im/\"},{\"text\":\"CSDN\",\"link\":\"https://blog.csdn.net/\"}]}]},{\"text\":\"掘金\",\"link\":\"https://juejin.cn/user/185130928311661/posts\"}],\"sidebar\":[{\"text\":\"通用\",\"collapsable\":true,\"children\":[{\"text\":\"Button 按钮\",\"link\":\"/components/pages/Button\"}]},{\"text\":\"数据录入\",\"collapsable\":true,\"children\":[{\"text\":\"Slider 滑动组件\",\"link\":\"/components/pages/Slider\"}]},{\"text\":\"数字输入框\",\"collapsable\":true,\"children\":[{\"text\":\"InputNumber 数字输入框\",\"link\":\"/components/pages/InputNumber\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
