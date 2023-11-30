---
title: yourbusiness
author: marcus
date: '2023-11-07'
---
## 默认的页面路由
此处我们把 `docs` 目录作为 `targetDir` （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：
```json
{
    "scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
    }
}
```
对于上述的目录结构，默认页面路由地址如下：

|      文件的相对路径	       |     页面路由地址      |
|:-------------------:|:---------------:|
|    `/README.md`     |       `/`       |
| `/guide/README.md`  |    `/guide/`    |
|    `/config.md`     | `/config.html`  |

>**注意**
>
>当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html) (opens new window)来修改，否则可能会导致构建出错。


## 默认的页面路由22

此处我们把 `docs` 目录作为 `targetDir` （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：
```json
{
    "scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
    }
}
```
对于上述的目录结构，默认页面路由地址如下：

|      文件的相对路径	       |     页面路由地址      |
|:-------------------:|:---------------:|
|    `/README.md`     |       `/`       |
| `/guide/README.md`  |    `/guide/`    |
|    `/config.md`     | `/config.html`  |

>**注意**
>
>当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html) (opens new window)来修改，否则可能会导致构建出错。
