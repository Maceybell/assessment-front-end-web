let color = document.getElementById('color')
let place = document.getElementById('place')
let ritual = document.getElementById('ritual')

function pressColor (){
    alert('My favorite color lately is lavendar')
}

function pressPlace (){
    alert('My favorite place is home')
}

function pressRitual(){
    alert('My favorite ritual is my skincare routine, but maybe I should adopt some new great rituals because that seems so boring')
}

color.addEventListener('click', pressColor)
place.addEventListener('click', pressPlace)
ritual.addEventListener('click', pressRitual)