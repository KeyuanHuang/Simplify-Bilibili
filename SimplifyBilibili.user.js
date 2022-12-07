// ==UserScript==
// @name         Bilibili界面精简
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bilibili界面精简
// @author       Keyuan Huang
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const globalBlockList = [
        ".download-client-trigger.download-entry", //客户端下载标签
        //".mini-header__title", //首页标签
        //".default-entry", //顶栏左侧除首页外的所有标签
        ".recommend-list-v1", //侧边栏相关视频推荐
        ".ad-floor-exp.ad-report", //视频播放界面的广告
        ".part-undefined.report-scroll-module.report-wrap-module.pop-live-small-mode", //视频播放页面的直播推荐
        ".trending", //热搜
    ];

    // 动态页面屏蔽元素
    const tBlockList = [
        ".left",
        ".right", //左右侧边栏
        ".bili-dyn-up-list", //上方up主列表
        ".bili-dyn-publishing", //动态发布输入栏
    ];

    function update() {
        for (const i of globalBlockList) {
            let element = document.querySelector(i);
            if (element) {
                element.remove()
            }
        }

        let regex = /t.bilibili.com/g;
        if (regex.test(location.href)) {
            for (const i of tBlockList) {
                let element = document.querySelector(i);
                if (element) {
                    element.style.display = "none";
                }
            }
        }
    };

    document.addEventListener("DOMContentLoaded", update);
    setInterval(update, 200);
})();
