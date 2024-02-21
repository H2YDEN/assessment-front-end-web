console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form successfully submitted!");
}

const duck = document.querySelector('img[src="https://basilwoodfarm.com/cdn/shop/products/istockphoto-185590965-612x612_1024x1024.jpg?v=1648592027"]');

function displayCompliment() {
    alert("You're looking great today!");
}
duck.addEventListener('mouseover', displayCompliment);

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);