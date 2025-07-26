// declare btn

// click main button, go to success card.show and go to main.card.hide
//click subsribce, vice versa/
// check transition

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


function InputResult() {
    const email = emailInput.value.trim();
    
    if (email === '' ) {
        console.log("empty");
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
});