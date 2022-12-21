// ==UserScript==
// @name         Simplify Bilibili
// @namespace    https://github.com/KeyuanHuang/Simplify-Bilibili/raw/main/main.user.js
// @version      0.1
// @description  try to take over the world!
// @author       Keyuan Huang
// @run-at       document-start
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
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
}
`

GM_addStyle(css)
