const arrivalsContainer = document.querySelector(".arrivals-container");
const sellingContainer = document.querySelector(".selling-container");
const reviewsContainer = document.querySelector(".reviews-container");


let isMoving = false;
let startPositionX;
let scrollingLeft;

function start(event, container) {
    isMoving = true;
    startPositionX = event.pageX || event.touches[0].pageX - arrivalsContainer.offsetLeft;    
    scrollingLeft = container.scrollLeft;
}

function move(event, container) {
    if (!isMoving) return;
    event.preventDefault();

    const finalPositionX = event.pageX || event.touches[0].pageX - arrivalsContainer.offsetLeft;
    const distance = (finalPositionX - startPositionX);
    container.scrollLeft = scrollingLeft - distance;
}

function end() {
    isMoving = false;
}

function sideScrolling() {
    [arrivalsContainer, sellingContainer, reviewsContainer].forEach((container) => {
        container.addEventListener("mousedown", (event) => start(event, container));
        container.addEventListener("mousemove", (event) => move(event, container));
        container.addEventListener("mouseup", end);
      
        container.addEventListener("touchstart", (event) => start(event, container));
        container.addEventListener("touchmove", (event) => move(event, container));
        container.addEventListener("touchend", end);
    });
}

export default sideScrolling;