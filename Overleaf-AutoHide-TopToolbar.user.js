// ==UserScript==
// @name        Overleaf Auto-Hide Top Toolbar
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       https://www.overleaf.com/project/*
// @grant       GM_addStyle
// @version     0.1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @description (Requires Tampermonkey Legacy / MV2!) Auto-hide top toolbar on overleaf to increase vertical space. Hover over that area to show it again. I combine this with a dedicated Cromite profile shortcut with -alt-high-dpi-setting=96 /high-dpi-support=1 /force-device-scale-factor=0.5 to maximise vertical space, as I only look at Overleaf in this profile (no need to access tab/URL bar). This effectively creates an almost-fullscreen dedicated Overleaf app - very useful for small laptop screens.
// @homepageURL https://www,github.com/sjain882/Browser-Tweaks
// @supportURL  https://www,github.com/sjain882/Browser-Tweaks/issues
// @downloadURL https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Overleaf-AutoHide-TopToolbar.user.js
// @updateURL   https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Overleaf-AutoHide-TopToolbar.user.js
// ==/UserScript==


(function() {
  'use strict';

  GM_addStyle(`
    nav.toolbar.toolbar-header {
      transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
      opacity: 1;
      z-index: 1000;
    }
    nav.toolbar.toolbar-header.toolbar-hidden {
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      position: absolute !important; /* take it out of flex flow */
      top: 0;
      left: 0;
      right: 0;
    }

    .ide-react-body {
      flex: 1 1 auto !important; /* always expand to fill */
      transition: all 0.25s ease-in-out;
    }
  `);

  function setupToolbarHider(toolbar) {
    if (!toolbar) return;

    let visible = false;

    // invisible hover zone at top
    const hoverZone = document.createElement('div');
    hoverZone.style.position = 'fixed';
    hoverZone.style.top = '0';
    hoverZone.style.left = '0';
    hoverZone.style.width = '100%';
    hoverZone.style.height = '8px';
    hoverZone.style.zIndex = '2000';
    hoverZone.style.background = 'transparent';
    document.body.appendChild(hoverZone);

    function showToolbar() {
      if (visible) return;
      toolbar.classList.remove('toolbar-hidden');
      toolbar.style.position = 'relative'; // put back into flex flow
      visible = true;
    }

    function hideToolbar() {
      if (!visible) return;
      toolbar.classList.add('toolbar-hidden');
      visible = false;
    }

    // start hidden
    hideToolbar();

    hoverZone.addEventListener('mouseenter', showToolbar);
    toolbar.addEventListener('mouseleave', (ev) => {
      const rt = ev.relatedTarget;
      if (rt && (rt === hoverZone || hoverZone.contains(rt))) return;
      hideToolbar();
    });
  }

  const observer = new MutationObserver((_, obs) => {
    const toolbar = document.querySelector('nav.toolbar.toolbar-header');
    if (toolbar) {
      setupToolbarHider(toolbar);
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
