"use strict";

/**
 * Import Modules
 */
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Tooltip } from "./components/Tooltip.js";

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) window.addEventListener("scroll", () => $fixedScrolling.forEach($elem => FixedScrolling($elem)));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));