import { scrollLeft, scrollRight } from "./scrollingFunctions.js";

const reviewsContainer = document.querySelector(".reviews-container");
const rightArrow = document.querySelector(".reviews-button-right");
const leftArrow = document.querySelector(".reviews-button-left");
let scrollEnd = true;
let scrollsList = [];

function reviewSection() {
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
            scrollRight(reviewsContainer);
            scrollEnd = false;
            scrollsList.shift();
        }
    });
  
  
    leftArrow.addEventListener("click", () => {
        scrollsList.push(scrollLeft);
        if (scrollEnd) {
            scrollLeft(reviewsContainer);
            scrollEnd = false;
            scrollsList.shift();
        }
    });
}

export default reviewSection;