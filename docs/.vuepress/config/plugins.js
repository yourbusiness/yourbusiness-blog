const plugins = [
    [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    ]
]

export default plugins