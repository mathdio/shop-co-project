const styles = document.querySelectorAll('.styles-imgs > img');
const arrivalCards = document.querySelectorAll('.arrival-card');
const sellingCards = document.querySelectorAll('.selling-card');
const closeButton = document.querySelector('.close-button');
const mainElement = document.querySelector('.main');
// const reviewsContainer = document.querySelector('.reviews-container');
// const rightArrow = document.querySelector('.reviews-button-right');
// const leftArrow = document.querySelector('.reviews-button-left');

closeButton.addEventListener('click', () => {
  document.querySelector('.header > span').remove();
  mainElement.style.marginTop = "90px";
})

function addGrowEffect({ target }) {
  target.classList.add('grow');
}

function removeGrowEffect({ target }) {
  target.classList.remove('grow');
}

styles.forEach((style) => {
  style.addEventListener('mouseover', (event) => addGrowEffect(event));
  style.addEventListener('mouseout', (event) => removeGrowEffect(event));
});

function viewAll(cards, parentNode, button) {
  cards.forEach((card) => {
    parentNode.appendChild(card.cloneNode(true));
  });
  button.remove();
}

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
