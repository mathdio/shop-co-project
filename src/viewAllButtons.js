const arrivalCards = document.querySelectorAll(".arrival-card");
const sellingCards = document.querySelectorAll(".selling-card");

function viewAll(cards, parentNode, button) {
    cards.forEach((card) => {
        parentNode.appendChild(card.cloneNode(true));
    });
    button.remove();
    parentNode.scrollLeft += 200;
}

function viewAllButtons() {
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
}

export default viewAllButtons;
