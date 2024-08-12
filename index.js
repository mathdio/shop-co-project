const styles = document.querySelectorAll('.styles-imgs > img');
const arrivalCards = document.querySelectorAll('.arrival-card');

console.log(arrivalCards);

styles.forEach((style) => {
  style.addEventListener('mouseover', (event) => addGrowEffect(event));
  style.addEventListener('mouseout', (event) => removeGrowEffect(event));
});

arrivalCards.forEach((card) => {
  card.addEventListener('mouseover', (event) => addGrowEffect(event));
  card.addEventListener('mouseout', (event) => removeGrowEffect(event));
});

function addGrowEffect({ target }) {
  target.classList.add('grow');
}

function removeGrowEffect({ target }) {
  target.classList.remove('grow');
}
