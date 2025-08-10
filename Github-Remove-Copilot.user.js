// ==UserScript==
// @name        Github Homepage - Remove Copilot
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       *://*.github.com/*
// @grant       GM_addStyle
// @version     0.1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=github.com
// @description Removes the entire Github Copilot box from the Github homepage / feedpage
// @homepageURL https://www.github.com/sjain882/Browser-Tweaks
// @supportURL  https://www.github.com/sjain882/Browser-Tweaks/issues
// @downloadURL https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Github-Remove-Copilot.user.js
// @updateURL   https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Github-Remove-Copilot.user.js
// ==/UserScript==

GM_addStyle(".copilotPreview__container { display: none !important; }");