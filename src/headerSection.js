const closeButton = document.querySelector(".close-button");
const searchMobile = document.querySelector(".search-input-mobile");
const navBar = document.querySelector(".nav-bar");
const mainElement = document.querySelector(".main");
let inputContainer;
const titleContainer = document.querySelector(".title-container");
let searchInputContent;

function headerSection() {
    document.addEventListener("DOMContentLoaded", function() {
        const templates = document.getElementsByTagName("template");
        const menuContent = templates[0].content.children[0].cloneNode(true);
        searchInputContent = templates[1].content.children[0].cloneNode(true);
        if (window.innerWidth >= 1440) {
            titleContainer.insertAdjacentElement("afterend", menuContent);
            const navList = document.querySelector(".nav-list");
            navList.insertAdjacentElement("afterend", searchInputContent);
        }
    });

    closeButton.addEventListener("click", () => {
        document.querySelector(".header > span").remove();
        mainElement.style.marginTop = "90px";
    });
    
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
}

export default headerSection;