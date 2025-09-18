// ==UserScript==
// @name        Large sliders for Met Office Weather Maps
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       *://weather.metoffice.gov.uk/maps-and-charts/*
// @grant       GM_addStyle
// @version     0.1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=metoffice.gov.uk
// @description Makes the date + time sliders taller on all met office weather maps, and stops the green box + arrow from blocking drag events. Especially useful on mobile.
// @homepageURL https://www.github.com/sjain882/Browser-Tweaks/Userscripts
// @homepageURL https://greasyfork.org/en/scripts/548480-large-sliders-for-met-office-weather-maps
// @supportURL  https://www.github.com/sjain882/Browser-Tweaks/issues
// @downloadURL https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/MetOfficeWeatherMaps-LargeSliders.user.js
// @updateURL   https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/MetOfficeWeatherMaps-LargeSliders.user.js
// @license MIT
// ==/UserScript==

GM_addStyle(".ms-slide { min-height: 72px !important; }");
GM_addStyle("#lower-controls > div > span { top: 80px !important; pointer-events: none !important }");