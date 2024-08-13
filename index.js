const styles = document.querySelectorAll('.styles-imgs > img');
const arrivalCards = document.querySelectorAll('.arrival-card');
const sellingCards = document.querySelectorAll('.selling-card');

styles.forEach((style) => {
  style.addEventListener('mouseover', (event) => addGrowEffect(event));
  style.addEventListener('mouseout', (event) => removeGrowEffect(event));
});

const arrivalsButton = document.querySelector('.arrivals-button');
const arrivalsContainer = document.querySelector('.arrivals-container');
arrivalsButton.addEventListener('click', () => {
  viewAll(arrivalCards, arrivalsContainer, arrivalsButton);
});

const sellingButton = document.querySelector('.selling-button');
const sellingContainer = document.querySelector('.selling-container');
sellingButton.addEventListener('click', () => {
  viewAll(sellingCards, sellingContainer, sellingButton);
});

function viewAll(cards, parentNode, button) {
  cards.forEach((card) => {
    parentNode.appendChild(card.cloneNode(true));
  });
  button.remove();
}

// const mainElementWidth = document.querySelector('.main').getAttribute('width');
// let reviewsContainer = document.querySelector('.reviews-container');
// carouselSetup();

// setInterval(carousel, 15000);

// function carousel() {
//   reviewsContainer.remove();
//   reviewsContainer = document.querySelector('.reviews-container');
//   carouselSetup();
// }

// function carouselSetup() {
//   reviewsDiv.appendChild(reviewsContainer.cloneNode(true));
// }

// arrivalCards.forEach((card) => {
//   card.addEventListener('mouseover', (event) => addGrowEffect(event));
//   card.addEventListener('mouseout', (event) => removeGrowEffect(event));
// });

function addGrowEffect({ target }) {
  target.classList.add('grow');
}

function removeGrowEffect({ target }) {
  target.classList.remove('grow');
}
