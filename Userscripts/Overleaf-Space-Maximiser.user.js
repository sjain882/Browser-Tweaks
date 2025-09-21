// ==UserScript==
// @name        Overleaf Space Maximiser
// @namespace   https://www.github.com/sjain882
// @author      sjain882 / shanie
// @match       https://www.overleaf.com/project/*
// @version     0.2.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @description (Requires Tampermonkey Legacy / MV2!) Auto-hide Overleaf top toolbar to maximise vertical space. Hover over that area to show it again. To optionally maximise horizontal space, you can optimise file tree spacing and/or hide file outline to maximise horizontal space. Toggle with bools at top of code. I combine this with a dedicated Cromite profile shortcut with -alt-high-dpi-setting=96 /high-dpi-support=1 /force-device-scale-factor=0.5 to maximise vertical space, as I only look at Overleaf in this profile (no need to access tab/URL bar). This effectively creates an almost-fullscreen dedicated Overleaf app - very useful for small laptop screens.
// @homepageURL https://www.github.com/sjain882/Browser-Tweaks
// @supportURL  https://www.github.com/sjain882/Browser-Tweaks/issues
// @homepageURL https://www.github.com/sjain882/Browser-Tweaks/Userscripts
// @supportURL  https://www.github.com/sjain882/Browser-Tweaks/issues
// @downloadURL https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/Overleaf-Space-Maximiser.user.js
// @updateURL   https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/Overleaf-Space-Maximiser.user.js
// @license MIT
// ==/UserScript==

(function () {
  'use strict';

  var hideFileOutline = true;
  var optimiseFileTreeSpacing = true;

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


  if (optimiseFileTreeSpacing) {
    GM_addStyle(`
        #panel-file-tree > div > div.file-tree-inner {
          font-size: 8pt !important;
        }

        .item-name-button {
          padding-right: 0 !important;
        }
        `)
  }


  function collapsePanels() {
    const separator = document.querySelector('[role="separator"][aria-controls="panel-file-tree"]');
    if (!separator) return;

    // Force aria-valuenow to 0
    separator.setAttribute('aria-valuenow', '0');

    // Collapse the file tree panel
    const fileTreePanel = document.querySelector('#panel-file-tree');
    if (fileTreePanel) {
      fileTreePanel.style.flexBasis = '0px';
      fileTreePanel.style.height = '0px';
      fileTreePanel.style.minHeight = '0px';
      fileTreePanel.style.overflow = 'hidden';
    }

    // Expand remaining panels if needed
    const otherPanels = document.querySelectorAll('[data-panel-group-id=":r3:"] > div');
    otherPanels.forEach(panel => {
      if (panel !== separator && panel.id !== 'panel-file-tree') {
        panel.style.flexGrow = '1';
      }
    });
  }

  if (hideFileOutline) {
    GM_addStyle(`

          .outline-pane {
            position: absolute !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          .outline-container {
            position: absolute !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          #panel-sidebar > nav > div > div:nth-child(2) {
            position: absolute !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          .file-tree
          {
            height: 100% !important;
          }
          `)

    // Reapply every 500ms to override layout JS
    setInterval(collapsePanels, 500);
  }

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
