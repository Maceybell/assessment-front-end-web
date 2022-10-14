let eatBtn = document.getElementById("eatBtn")

let oremRestaurants = ["Beto's","Midici's Pizza","Texas Roadhouse","Chili's","Sushi-ya","Pizzeria 712"]

let randomNumber = Math.floor(Math.random() * oremRestaurants.length)

let randomRestaurant = oremRestaurants[randomNumber]


function whereEat (){
    alert(`Tonight you should try eating at ${randomRestaurant}`)
}


eatBtn.addEventListener('click', whereEat)