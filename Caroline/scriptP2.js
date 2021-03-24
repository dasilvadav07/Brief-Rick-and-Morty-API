const cardContainer = document.querySelector(".container__infos--perso");
const cardPerso = document.querySelector(".perso__cards");


fetch("https://rickandmortyapi.com/api/character")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)
        let tabPerso = data.results;
        for(let perso of tabPerso){
            imgCard(perso)
        }
    })
    // .then(function (data) {
    //     console.log(data.results)
    //     let tabPerso = data.results;
    //     for(let perso of tabPerso){
    //         createCard(perso)
    //     }
    // })

    function imgCard(image) {
        cardPerso.innerHTML += 
        `<div class="container__img--perso"><img src="${image.url}"></div>`
    }

function createCard({ name, status, species, type, gender, origin, location, episode }) {
    cardContainer.innerHTML +=
    `<h4 class="perso__name">${name}</h4>
        <span>Status : ${status}</span>
        <span>Espèce : ${species}</span>
        <span>Type : ${type}</span>
        <span>Genre : ${gender}</span>
        <span>Origine : ${origin.name}</span>
        <span>Dernier lieu : ${location.name}</span>`
        // <ul>Episodes : <li>${episode}</li></ul>
}