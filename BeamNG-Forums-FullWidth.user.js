// ==UserScript==
// @name        BeamNG Forums Full Width
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       *://*.beamng.com/resources*
// @match       *://*.beamng.com/forums*
// @match       *://*.beamng.com/threads*
// @connect     www.beamng.com
// @grant       GM_addStyle
// @version     0.1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=beamng.com
// @description Makes the BeamNG forums fill 97% of the screen width, rather than the default 80%.
// @downloadURL https://raw.githubusercontent.com/sjain882/Userscripts/main/BeamNG-Forums-FullWidth.user.js
// @updateURL https://raw.githubusercontent.com/sjain882/Userscripts/main/BeamNG-Forums-FullWidth.user.js
// ==/UserScript==

// To set a custom width, replace 97 with your desired page-width percentage.
GM_addStyle(".pageWidth { max-width: 97%; }");


/* On the main forum homepages (/forums & /resources), make better use of the screen
 * by expanding the sidebar by 100px & shrinking the main content by 100px.
 * No, I didn't make this margin bodge, it was written like that on the original pages. */

function adjustPageLayout() {

// for /forums:
GM_addStyle(".sidebar { width: 350px !important; }");
GM_addStyle(".mainContent { margin-left: 362px !important; }");
GM_addStyle(".mainContent. { margin-left: 362px !important; }");

// for /resources:
GM_addStyle(".resourceListSidebar { width: 320px !important; }");
GM_addStyle(".resourceListMain { margin-left: 330px !important; }");

// Fix announcement panels.
// If this is broken, use CTRL + F5
GM_addStyle("li.panel:nth-child() { width: 1234px !important; }");

}


/* .mainContent's width is set in the BeamNG forums js as the page is loaded.
 * To override this, we must adjust the layout *after* the page has fully loaded. */
window.addEventListener('load', function() {
    adjustPageLayout();
}, false);


