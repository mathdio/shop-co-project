import { addGrowEffect, removeGrowEffect } from "./growFunctions.js";

const styles = document.querySelectorAll(".styles-imgs > img");

function dressStyleFunction() {
    styles.forEach((style) => {
        style.addEventListener("mouseover", (event) => addGrowEffect(event));
        style.addEventListener("mouseout", (event) => removeGrowEffect(event));
    });
}

export default dressStyleFunction;