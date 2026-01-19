"use strict";

export const Tooltip = ($element) => {
    let tooltip = new bootstrap.Tooltip($element);

    $element.addEventListener("click", () => tooltip.hide());
};