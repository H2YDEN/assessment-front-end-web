const colorButton = document.querySelector('#color');
function displayColor() {
    alert("My favorite color is purple!");
}
colorButton.addEventListener('click', displayColor);

const placeButton = document.querySelector('#place');
function displayPlace() {
    alert("My favorite place is Japan!");
}
placeButton.addEventListener('click', displayPlace);

const ritualButton = document.querySelector('#ritual');
function displayRitual() {
    alert("My favorite ritual is drinking a cup of water in the morning!");
}
ritualButton.addEventListener('click', displayRitual);