// ==UserScript==
// @name         Adjust horizontal webpage margins with keyboard
// @namespace    https://www.github.com/sjain882
// @version      0.1.0
// @description  Keyboard shortcuts to move the entire webpage left/right independently of the window dimensions - useful for oddly angled monitors, etc.
// @author       sjain882
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant           GM_addStyle
// @homepageURL     https://github.com/sjain882/Userscripts
// @supportURL      https://github.com/sjain882/Userscripts/issues
// @updateURL       https://raw.githubusercontent.com/sjain882/Userscripts/main/WebpageMarginsKeyboard.user.js
// @downloadURL     https://raw.githubusercontent.com/sjain882/Userscripts/main/WebpageMarginsKeyboard.user.js
// ==/UserScript==

var horizontalMargin = 0;
var adjustStep = 50;

window.addEventListener('keydown', function(e) {

    // Shift page contents right
    if (e.ctrlKey && e.key == 'F12') {
        horizontalMargin = horizontalMargin + adjustStep;
        GM_addStyle("html{margin-left:" + horizontalMargin + "px}");

    // Shift page contents left
    } else if (e.ctrlKey && e.key == 'F11') {
        horizontalMargin = horizontalMargin - adjustStep;
        GM_addStyle("html{margin-left:" + horizontalMargin + "px}");

    // Reset
    } else if (e.ctrlKey && e.key == 'F9') {
        horizontalMargin = 0;
        GM_addStyle("html{margin-left: 0px}");
    }

}, true);
