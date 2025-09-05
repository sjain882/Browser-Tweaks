// ==UserScript==
// @name        BeamNG Forums Cleanup
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       *://*.beamng.com/*
// @match       *://beamng.com/*
// @exclude     *://*.beamng.com/game*
// @exclude     *://beamng.com/game*
// @exclude     *://documentation.beamng.com*
// @exclude     *://shop.beamng.com*
// @grant       GM_addStyle
// @version     0.1.1
// @icon        https://www.google.com/s2/favicons?sz=64&domain=beamng.com
// @description Hides various beginner-oriented elements that act as clutter to advanced users on the BeamNG Forums.
// @homepageURL https://www,github.com/sjain882/Browser-Tweaks
// @supportURL  https://www,github.com/sjain882/Browser-Tweaks/issues
// @downloadURL https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/BeamNG-Forums-Cleanup.user.js
// @updateURL   https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/BeamNG-Forum-Cleanup.user.js
// ==/UserScript==

// Hide "How to install mods" large banner that's easy to click accidentally.
GM_addStyle(".PanelScroller { display: none !important; }");