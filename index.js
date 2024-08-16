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

function addGrowEffect({ target }) {
  target.classList.add('grow');
}

function removeGrowEffect({ target }) {
  target.classList.remove('grow');
}
