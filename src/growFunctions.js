function addGrowEffect({ target }) {
    target.classList.add("grow");
}

function removeGrowEffect({ target }) {
    target.classList.remove("grow");
}

export {
    addGrowEffect,
    removeGrowEffect
};