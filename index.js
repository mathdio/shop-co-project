const styles = document.querySelectorAll(".styles-imgs > img");
const arrivalCards = document.querySelectorAll(".arrival-card");
const sellingCards = document.querySelectorAll(".selling-card");
const closeButton = document.querySelector(".close-button");
const mainElement = document.querySelector(".main");
const reviewsContainer = document.querySelector(".reviews-container");
const rightArrow = document.querySelector(".reviews-button-right");
const leftArrow = document.querySelector(".reviews-button-left");
let scrollEnd = true;
let scrollsList = [];

function scrollRight() {
    reviewsContainer.scrollLeft += 400;
}

function scrollLeft() {
    reviewsContainer.scrollLeft -= 400;
}

reviewsContainer.onscrollend = () => {
    while (scrollsList.length > 0) {
        scrollsList[0]();
        scrollsList.shift();
    }
    if (scrollsList.length === 0) scrollEnd = true;
};

rightArrow.addEventListener("click", () => {
    scrollsList.push(scrollRight);
  
    if (scrollEnd) {
        scrollRight();
        scrollEnd = false;
        scrollsList.shift();
    }
});


leftArrow.addEventListener("click", () => {
    scrollsList.push(scrollLeft);

    if (scrollEnd) {
        scrollLeft();
        scrollEnd = false;
        scrollsList.shift();
    }
});

closeButton.addEventListener("click", () => {
    document.querySelector(".header > span").remove();
    mainElement.style.marginTop = "90px";
});

function addGrowEffect({ target }) {
    target.classList.add("grow");
}

function removeGrowEffect({ target }) {
    target.classList.remove("grow");
}

styles.forEach((style) => {
    style.addEventListener("mouseover", (event) => addGrowEffect(event));
    style.addEventListener("mouseout", (event) => removeGrowEffect(event));
});

function viewAll(cards, parentNode, button) {
    cards.forEach((card) => {
        parentNode.appendChild(card.cloneNode(true));
    });
    button.remove();
}

const arrivalsButton = document.querySelector(".arrivals-button");
const arrivalsContainer = document.querySelector(".arrivals-container");
arrivalsButton.addEventListener("click", () => {
    viewAll(arrivalCards, arrivalsContainer, arrivalsButton);
});

const sellingButton = document.querySelector(".selling-button");
const sellingContainer = document.querySelector(".selling-container");
sellingButton.addEventListener("click", () => {
    viewAll(sellingCards, sellingContainer, sellingButton);
});

let isMoving = false;
let startX;
let scrollingLeft;

function start(event, container) {
    isMoving = true;
    startX = event.pageX || event.touches[0].pageX - arrivalsContainer.offsetLeft;    
    scrollingLeft = container.scrollLeft;
}

function move(event, container) {
    if (!isMoving) return;
    event.preventDefault();

    const x = event.pageX || event.touches[0].pageX - arrivalsContainer.offsetLeft;
    const dist = (x - startX);
    container.scrollLeft = scrollingLeft - dist;
}

function end() {
    isMoving = false;
}

[arrivalsContainer, sellingContainer, reviewsContainer].forEach((container) => {
    container.addEventListener("mousedown", (event) => start(event, container));
    container.addEventListener("mousemove", (event) => move(event, container));
    container.addEventListener("mouseup", end);
});