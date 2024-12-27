// ==UserScript==
// @name         Swansea University Open Timetable System Auto Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the "View timetable" button on compact mobile layouts for the Swansea University open timetables system
// @author       sjain
// @match       https://mytimetable.swan.ac.uk/timetables*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

var intervalId = window.setInterval(function(){ document.querySelectorAll("[class*='view-timetable']")[0].click(); }, 500);
