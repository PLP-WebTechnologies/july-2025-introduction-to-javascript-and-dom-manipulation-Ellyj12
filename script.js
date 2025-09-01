// Variable declarations

const nameOutput = document.getElementById('Greet');
const ageOutput = document.getElementById('Age');
const subscription = document.getElementById('Subscription');
const greetBtn = document.getElementById('Greet_btn');


// loops 
let username;
do {
    username = window.prompt('Please enter your name:');
} while (!username);

let age;
do {
    age = parseInt(window.prompt('How old are you?'));
} while (isNaN(age) || age <= 0);

const ageresult = age >= 18;


// Custome functions
function greetUser(name) {
    return `Hello ${name} !!!!`;
}

function ageDescription(age) {
    return `You are ${age} years old`;


}
function checkSubscription(ageresult) {
    return ageresult ? 'You are old enough to subscribe!' : 'You are too young to subscribe.';
}

// DOM manipulation
greetBtn.onclick = function () {
    nameOutput.textContent = greetUser(username);
    ageOutput.textContent = ageDescription(age);
    subscription.textContent = checkSubscription(ageresult)

};
