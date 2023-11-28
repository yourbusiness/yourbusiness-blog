---
title: yourbusiness
author: marcus
date: '2023-11-07'
---
## Frontmatter

### 所有页面

本章节中的 Frontmatter 会在所有类型的页面中生效。

#### externalLinkIcon

* 类型： `boolean`
* 详情：
  由@vuepress/plugin-external-link-icon 提供。
* 参考：
  默认主题 > 配置 > themePlugins.externalLinkIcon

#### navbar

* 类型： boolean
* 详情：
  是否在当前页面展示导航栏。
  如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。
* 参考：
  默认主题 > 配置 > navbar

#### pageClass
* 类型： string
* 详情：
  为当前页面添加额外的类名。
* 示例：
```md
---
pageClass: custom-page-class
---
```
然后你可以在 `.vuepress/styles/index.scss` 文件中为这个页面添加自定义样式：
```scss
.theme-container.custom-page-class {
  /* 页面样式 */
}
```
* 参考：
  默认主题 > 样式 > Style 文件


