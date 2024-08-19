const newsletterButton = document.querySelector(".newsletter-button");
const newsletterInput = document.querySelector(".newsletter-input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function subscribeSection() {
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
}

export default subscribeSection;