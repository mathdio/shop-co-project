const titleContainer = document.querySelector(".title-container");
const templates = document.getElementsByTagName("template");
const menuContent = templates[0].content.children[0].cloneNode(true);
const searchInputContent = templates[1].content.children[0].cloneNode(true);

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 1440) {
        titleContainer.insertAdjacentElement("afterend", menuContent);
        const navList = document.querySelector(".nav-list");
        navList.insertAdjacentElement("afterend", searchInputContent);
    }
});

const menuButton = document.querySelector(".menu-icon");
const asideElement = document.getElementsByTagName("aside")[0];
const closeSidebarButton = document.querySelector(".close-sidebar");

menuButton.addEventListener("click", () => {
    if (asideElement.children[0].localName !== "ul") {
        menuContent.classList.remove("nav-list");
        menuContent.classList.add("menu-list");
        closeSidebarButton.insertAdjacentElement("beforebegin", menuContent);
    }
    asideElement.classList.toggle("closed");
});

closeSidebarButton.addEventListener("click", () => {
    asideElement.classList.toggle("closed");
});

const searchMobile = document.querySelector(".search-input-mobile");
const navBar = document.querySelector(".nav-bar");
const mainElement = document.querySelector(".main");
let inputContainer;
    
searchMobile.addEventListener("click", () => {
    const header = document.getElementsByTagName("header")[0];
    if (header.lastElementChild.localName !== "div") {
        inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container", "hide");
        inputContainer.appendChild(searchInputContent);
        navBar.insertAdjacentElement("afterend", inputContainer);
        inputContainer.classList.toggle("hide");
        inputContainer.classList.toggle("hide");
    }
    mainElement.classList.toggle("main-larger-margin");
    inputContainer.classList.toggle("hide");
});

const styles = document.querySelectorAll(".styles-imgs > img");
const arrivalCards = document.querySelectorAll(".arrival-card");
const sellingCards = document.querySelectorAll(".selling-card");
const closeButton = document.querySelector(".close-button");

const newsletterButton = document.querySelector(".newsletter-button");
const newsletterInput = document.querySelector(".newsletter-input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

newsletterButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (emailRegex.test(newsletterInput.value)) {
        alert("Successfully subscribed!");
        newsletterInput.value = "";
    } else {
        alert("E-mail must be valid.");
    }
});

newsletterInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") event.preventDefault();
});

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
    parentNode.scrollLeft += 200;
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

[arrivalsContainer, sellingContainer, reviewsContainer].forEach((container) => {
    container.addEventListener("mousedown", (event) => start(event, container));
    container.addEventListener("mousemove", (event) => move(event, container));
    container.addEventListener("mouseup", end);
    
    container.addEventListener("touchstart", (event) => start(event, container));
    container.addEventListener("touchmove", (event) => move(event, container));
    container.addEventListener("touchend", end);
});