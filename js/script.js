// creiamo un array che contanga tutte le immagini 
const sources = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg"];
console.log(sources)

// definire la variabile per contenere le immagini 
let slider ="";

// ciclo for per riempire il contenitore delle immagini
for(let i = 0; i < sources.length ; i++){
    slider += (`<img src="${sources[i]}" alt="${sources[i]}">`);
}


// variabile per osservare l'immagine attiva

let currentActiveIndex = 0;

// recupero gli slider
const prevButton = document.getElementById("left-slider");
const nextButton = document.getElementById("right-slider");

// recupero dal dom il contenitore della gallery 

const arrayContainer = document.getElementById("img-container");
const thumbnails = document.getElementById("thumbnail")

// inserisco lo stringone all'interno della gallery

arrayContainer.innerHTML = slider;
thumbnails.innerHTML = slider;

// seleziono tutte le immagini create nel dom attraverso js

const images = document.querySelectorAll("#img-container img");
const thumbs = document.querySelectorAll("#thumbnail img");

// //Imposto la classe active ad una immagine a mia scelta 
images[currentActiveIndex].classList.add("active");
thumbs[currentActiveIndex].classList.add("active");

// logica slider forward

nextButton.addEventListener("click", function(){

    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");

    currentActiveIndex++

    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});

// logica slider backward

prevButton.addEventListener("click", function(){

    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");
    
    if(currentActiveIndex === 0){
        currentActiveIndex = images.length - 1;
    }
    currentActiveIndex--

    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});















