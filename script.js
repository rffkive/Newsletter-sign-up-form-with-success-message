const subsBtn = document.querySelector('.subscribe-button');

subsBtn.addEventListener ('click', (e) => 
 {
    e.preventDefault(); 
    console.log('share button 1');
    InputResult ();
 }
);

const emailInput = document.querySelector(".email-input");
const mainCard = document.querySelector(".main-card");
const successCard = document.querySelector(".success-card");
const errorMessage = document.querySelector("#error-message");

function InputResult() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || !emailPattern.test(email)) {
        console.log("empty");
        errorMessage.classList.toggle('show');
        emailInput.value = '';
        emailInput.focus();
        errorMessage.textContent = "Please insert a valid email";
    } else {
        console.log("next");
        mainCard.classList.toggle('hide');
        successCard.classList.toggle('show');
    }
}

const successBtn = document.querySelector(".success-button");

successBtn.addEventListener ('click', (e) => {
    e.preventDefault();
    console.log ("success button");
    mainCard.classList.remove('hide');
    successCard.classList.remove('show');
    emailInput.value = '';
    emailInput.focus ();
});