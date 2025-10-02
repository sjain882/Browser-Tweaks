// ==UserScript==
// @name         Old Reddit - Add Embed, Download and Undelete buttons to all posts
// @namespace    https://github.com/sjain882
// @author       TheoriticalZero
// @author       sjain882 / shanie
// @version      0.1.0
// @description  Adds vxreddit, rxddit, rapidsave, reveddit shortcuts to each post on old.reddit.com. Thanks to TheoriticalZero for base userscript - modified by sjain882 to add some QoL features.
// @match        https://old.reddit.com/*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png
// @homepageURL  https://github.com/sjain882/Browser-Tweaks/tree/main/Userscripts
// @supportURL   https://www.github.com/sjain882/Browser-Tweaks/issues
// @downloadURL  https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/OldReddit-EmbedAndDownload-ForEachPost.user.js
// @updateURL    https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/OldReddit-EmbedAndDownload-ForEachPost.user.js
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

  // --- Toast helper ---
  function showCopiedToast(x, y) {
    const toast = document.createElement("div");
    toast.textContent = "Copied!";
    toast.style.position = "fixed";
    toast.style.left = (x - 27) + "px";
    toast.style.top = (y - 30) + "px"; // above cursor
    toast.style.background = "rgba(0,0,0,0.8)";
    toast.style.color = "white";
    toast.style.padding = "4px 8px";
    toast.style.borderRadius = "4px";
    toast.style.fontSize = "12px";
    toast.style.zIndex = 9999;
    toast.style.pointerEvents = "none";
    toast.style.opacity = "1";
    toast.style.transition = "opacity 0.5s ease";

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 1000);
  }

  // --- Mutation observer to catch new posts ---
  const setupMorePostsObserver = (functionTocall) => {
    const postBottomBarObserver = new MutationObserver((mutations) => {
      const hasAddedNodes = mutations.some((mutation) => {
        return (
          mutation.addedNodes.length > 0 &&
          ($(mutation.addedNodes[0]).is(".thing.link") ||
            $(mutation.addedNodes[0]).is(".sitetable"))
        );
      });
      if (hasAddedNodes) {
        functionTocall();
      }
    });

    postBottomBarObserver.observe(document, {
      childList: true,
      subtree: true,
    });
  };

  // --- Add buttons ---
  const addXRedditButtons = () => {
    const thingLinks = $(".thing.link").not(".xreddit-modified");

    thingLinks.each((index, element) => {
      $(element).addClass("xreddit-modified");

      const thingLinkHref = $(element).attr("data-permalink");
      const fullRedditUrl = `https://www.reddit.com${thingLinkHref}`;
      const buttonList = $(element).find(".flat-list.buttons");

      // vxreddit button (copy)
      const vxredditButton = $(
        `<li><a href="javascript:;" class="xreddit-button">vxreddit</a></li>`
      );
      vxredditButton.on("click", (e) => {
        const vxredditLink = `https://www.vxreddit.com${thingLinkHref}`;
        navigator.clipboard.writeText(vxredditLink).then(() => {
          showCopiedToast(e.clientX, e.clientY);
        });
      });

      // rxddit button (copy)
      const rxdditButton = $(
        `<li><a href="javascript:;" class="xreddit-button">rxddit</a></li>`
      );
      rxdditButton.on("click", (e) => {
        const rxdditLink = `https://www.rxddit.com${thingLinkHref}`;
        navigator.clipboard.writeText(rxdditLink).then(() => {
          showCopiedToast(e.clientX, e.clientY);
        });
      });

      // rapidsave button (open in new tab, correct format)
      const rapidsaveButton = $(
        `<li><a href="javascript:;" class="xreddit-button">rapidsave</a></li>`
      );
      rapidsaveButton.on("click", () => {
        const path = fullRedditUrl.replace("https://www.reddit.com", "");
        const rapidsaveLink = `https://rapidsave.com/info?url=${path}`;
        window.open(rapidsaveLink, "_blank");
      });

      // reveddit button (open in new tab)
      const revedditButton = $(
        `<li><a href="javascript:;" class="xreddit-button">reveddit</a></li>`
      );
      revedditButton.on("click", () => {
        const revedditLink = fullRedditUrl.replace("www.reddit.com", "www.reveddit.com");
        window.open(revedditLink, "_blank");
      });

      // Append in desired order
      buttonList.append(vxredditButton);
      buttonList.append(rxdditButton);
      buttonList.append(rapidsaveButton);
      buttonList.append(revedditButton);
    });
  };

  // initial call
  addXRedditButtons();
  setupMorePostsObserver(() => {
    addXRedditButtons();
  });

})();