// ==UserScript==
// @name        BeamNG Forums Full Width
// @namespace   https://github.com/stanleyqubit/drop-my-flickr-links
// @author      sjain882 / shanie
// @match       *://*.beamng.com/resources*
// @match       *://*.beamng.com/forums*
// @match       *://*.beamng.com/threads*
// @connect     www.beamng.com
// @grant       GM_addStyle
// @version     0.1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=beamng.com
// @description Makes the BeamNG forums fill 97% of the screen width, rather than the default 80%.
// @downloadURL https://update.greasyfork.org/scripts/493773/Drop%20My%20Flickr%20Links%21.user.js
// @updateURL https://update.greasyfork.org/scripts/493773/Drop%20My%20Flickr%20Links%21.meta.js
// ==/UserScript==

// To set a custom width, replace 97 with your desired page-width percentage.
GM_addStyle(".pageWidth { max-width: 97%; }");