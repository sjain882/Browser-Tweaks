// ==UserScript==
// @name         Dominos Customisation Clarity
// @namespace    https://github.com/sjain882
// @author       sjain882 / shanie
// @version      0.1.0
// @description  Prevents ruined pizza nights by significantly increasing visual clarity via red boxes for unselected/selected/extra states on size/crust/topping customisation cards on Dominos UK.
// @match        *://*.dominos.co.uk/*
// @match        *://dominos.co.uk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dominos.co.uk
// @homepageURL  https://www.github.com/sjain882/Browser-Tweaks/Userscripts
// @supportURL   https://www.github.com/sjain882/Browser-Tweaks/issues
// @downloadURL  https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/Dominos-Customisation-Clarity.user.js
// @updateURL    https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/Dominos-Customisation-Clarity.user.js
// ==/UserScript==

(function() {
    'use strict';

    // --- Utility: check if element's className contains ALL required pieces ---
    function hasAllClasses(el, pieces) {
        if (!el || !el.className) return false;
        return pieces.every(piece => new RegExp(`\\b${piece}\\b`).test(el.className));
    }

    // --- Apply outline styles ---
    function applyOutline(el, thickness) {
        el.style.outline = `red solid ${thickness}px`;
        el.style.outlineColor = "red";
        el.style.outlineOffset = "0px";
    }

    function clearOutline(el) {
        el.style.outline = "";
    }

    // --- Main scan function ---
    function scanAndHighlight() {
        // Grab all possible cards (topping, crust, size)
        const cards = document.querySelectorAll("div.base-topping-card, div.base-crust-card, div.base-size-card");

        cards.forEach(card => {
            // Reset first
            clearOutline(card);

            // Topping states
            if (hasAllClasses(card, ["base-topping-card", "base-topping-card--is-checked", "base-topping-card--extra-not-checked"])) {
                applyOutline(card, 5); // Selected
            } else if (hasAllClasses(card, ["base-topping-card", "base-topping-card--is-checked", "base-topping-card--has-extra"])) {
                applyOutline(card, 10); // Extra
            }

            // Crust states
            else if (hasAllClasses(card, ["base-crust-card", "base-crust-card--is-checked"])) {
                applyOutline(card, 5); // Selected crust
            }

            // Size states
            else if (hasAllClasses(card, ["base-size-card", "base-size-card--is-checked"])) {
                applyOutline(card, 5); // Selected size
            }
        });
    }

    // --- Reminder banner ---
    function injectReminder() {
        const container = document.querySelector("#app > div > main > div > section > section");
        if (container && !document.getElementById("topping-reminder")) {
            const reminder = document.createElement("div");
            reminder.id = "topping-reminder";
            reminder.textContent = "REMINDER: Double check toppings incase of accidental presses!";
            reminder.style.fontWeight = "bold";
            reminder.style.color = "red";
            reminder.style.margin = "10px 0";
            reminder.style.textAlign = "center";
            reminder.style.fontSize = "300%";
            container.prepend(reminder);
        }
    }

    // --- Run continuously ---
    setInterval(() => {
        scanAndHighlight();
        injectReminder();
    }, 500); // every half second

})();
