const cardPerso = document.querySelector(".perso__cards");
const containerNames = document.querySelector(".perso__names");
const epPerso = document.querySelector(".perso__ep")

let urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/character/?page=2", "https://rickandmortyapi.com/api/character/?page=3"];
for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
}
Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all(resp.map(r => r.json())))

    .then(function (data) {
        let tabSpecies = document.getElementsByClassName('species');
        for (let i = 0; i < tabSpecies.length; i++) {
            // console.log(tabSpecies);
            tabSpecies[i].addEventListener('click', () => {

                let tabData = data[0].results.concat(data[1].results, data[2].results);
                cardPerso.innerHTML = "";
                for (let perso of tabData) {

                    if (perso.species == "Human" && i == 0) {
                        createCard(perso);
                        getCharacterDetails(perso);

                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    


                        getCharacterEpisodes(listUriCharacter, perso);

                    } else if (perso.species === "Alien" && i == 1) {
                        createCard(perso);
                        getCharacterDetails(perso);

                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    


                        getCharacterEpisodes(listUriCharacter, perso);
                    } else if (perso.species != "Human" && perso.species != "Alien" && i == 2) {
                        createCard(perso);
                        getCharacterDetails(perso);

                        let listUriCharacter = perso.episode;
                        // console.log(perso.episode)    


                        getCharacterEpisodes(listUriCharacter, perso);
                    }


                }
            })
        }

    })
    .catch((error) => {
        console.error(error);
    })


function createCard(character) {
    cardPerso.innerHTML += `<div class="perso__card id="perso-${character.id}"><div class="container__img--perso"><img class="avatar" src="${character.image}"></div>
                <div class="container__button">
                    <button class="button__perso">${character.name}</button>
                </div></div>`
}

function getCharacterDetails(results) {

    cardPerso.innerHTML += `<div class="perso__details hide"><span>Status : ${results.status}</span>
    <span>Espèce : ${results.species}</span>
    <span>Type : ${results.type}</span>
    <span>Genre : ${results.gender}</span>
    <span>Origine : ${results.origin.name}</span>
    <span>Dernier lieu : ${results.location.name}</span>
    <div id="ep-char-${results.id}" class="ep__number">Présent dans ${results.episode.length} épisode(s).</div><ul id="list-ep-${results.id}" class="listEp"></ul></div>`
}

function getCharacterEpisodes(listUriEpisode, results) {
    let reponse = [];

    for (const uri of listUriEpisode) {
        fetch(uri)
            .then((response) => {
                // console.log(response.json())           
                return response.json()
            }).then((ep) => {
                console.log(ep)
                // reponse.push(ep);
                let ulEp = document.getElementById(`list-ep-${results.id}`)
                ulEp.innerHTML += `<li class="elemList__ep">${ep.name}</li>`
            })
    }
}

