const cardPerso = document.querySelector(".perso__cards");
const containerNames = document.querySelector(".perso__names");

let urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/character/?page=2", "https://rickandmortyapi.com/api/character/?page=3"];
for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
}
Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all(resp.map(r => r.json())))

    .then(function (data) {

        // let tabData = [data.results];
        console.log(data)
        let tabData = data[0].results.concat(data[1].results, data[2].results);
        console.log(tabData)
    

        let tabSpecies = document.getElementsByClassName('species');
        for (let i = 0; i < tabSpecies.length; i++) {
            console.log(tabSpecies);
            tabSpecies[i].addEventListener('click', () => {
                cardPerso.innerHTML = "";

                for (let perso = 0; perso < tabData.length; perso++) {


                    if (tabData[perso].species == "Human" && i == 0) {
                        imgCard(tabData[perso]);

                    } else if (tabData[perso].species === "Alien" && i == 1) {

                        imgCard(tabData[perso]);

                    } else if (tabData[perso].species != "Human" && tabData[perso].species != "Alien" && i == 2) {
                        imgCard(tabData[perso])
                    }
                }
            })
        }

    
    })



function imgCard(results) {
    cardPerso.innerHTML +=
        `<div class="container__img--perso"><img class="avatar" src="${results.image}"></div>
        <div class="container__button">
        <button class="button__perso">${results.name}</button></div>
        <div class="perso__text">
        <span>Status : ${results.status}</span>
        <span>Espèce : ${results.species}</span>
        <span>Type : ${results.type}</span>
        <span>Genre : ${results.gender}</span>
        <span>Origine : ${results.origin.name}</span>
        <span>Dernier lieu : ${results.location.name}</span>
        </div>`
};