export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"yourbusiness\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"yourbusiness\",\"author\":\"marcus\",\"date\":\"2023-11-07\"},\"headers\":[{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"link\":\"#frontmatter\",\"children\":[{\"level\":3,\"title\":\"所有页面\",\"slug\":\"所有页面\",\"link\":\"#所有页面\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
