console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted sccuessfully');
}

function niceKitty(event) {
	
alert('You are a good human')
}



let form = document.querySelector('#contact');
let kitty = document.querySelector("#cat")

form.addEventListener('submit', handleSubmit);

kitty.addEventListener('mouseover', niceKitty)