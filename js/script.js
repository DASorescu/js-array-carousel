// creiamo un array che contanga tutte le immagini 



const sources = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg"];
console.log(sources)

// definire la variabile per contenere le immagini 
let slider = "<ul>"

// cislo for
for(let i = 0; i < sources.length ; i++){
    slider += `<li><img src="${sources[i]}"></li>`
}

const arrayContainer = document.getElementById("img-container");


slider += "</ul>";
console.log(slider);
arrayContainer.innerHTML = slider;
