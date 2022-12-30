// ==UserScript==
// @name         Simplify Bilibili
// @namespace    https://github.com/KeyuanHuang/Simplify-Bilibili/raw/main/main.user.js
// @version      0.1
// @description  Simplify UI of bibibili.com
// @author       Keyuan Huang
// @run-at       document-start
// @match        *://*.bilibili.com/*
// @grant        GM_addStyle
// ==/UserScript==

const css = `
/* 广告 */
.scroll-sticky.right-container-inner>.ad-floor-exp.ad-report,
.part-undefined.report-scroll-module.report-wrap-module.pop-live-small-mode,

/* 热搜 */
.trending,

/* 下载客户端按键 */
.download-client-trigger.download-entry,
.download-client-trigger.link,

/* 播放页面右侧推荐视频 */
.recommend-list-v1,

/* 播放结束后推荐视频 */
.bpx-player-ending-related,

/* 动态页面左右侧边栏 */
.right, .left,

/* 发布动态的输入框 */
.bili-dyn-publishing,

[foo=bar] {
  display: none !important
},
`
GM_addStyle(css)

// 移除搜索框中预设的热词
setInterval(() => {
  document.querySelector('input.nav-search-input')?.removeAttribute('placeholder')
}, 10)
