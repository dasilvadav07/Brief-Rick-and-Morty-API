
/*
fetch("https://rickandmortyapi.com/api/episode")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {        
        console.log(data);
        */

        /*
        let select = document.querySelector("#season");
        let tabResult = data.results;
        const mainContainer = document.querySelector(".main");
            //console.log(select);
            select.addEventListener("change", (e) =>{
                let season = e.target.value;
                console.log(season);
                console.log(tabResult);
                mainContainer.innerHTML = "";
                for (let i = 0; i < tabResult.length; i++) {
                    //console.log(tabResult[i].episode);
                    let splitSeason = tabResult[i].episode.split("");
                    console.log(splitSeason[2]);
                    if (season == "s1" && splitSeason[2] == 1) {
                        addNewCard(tabResult[i]);
                    }
                    else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(tabResult[i]);
                    }
                }
                    //console.log(splitSeason);

            })

            */
     /*})
    
    .catch(function (error) {
        console.error(error);
    })  */

/*
fetch("https://rickandmortyapi.com/api/episode?page=2")
    .then(function (resp) {
        return resp.json();
    })
    .then(function(data2){
        console.log(data2);
    })
    */

    /*
let tabFetch = [fetch("https://rickandmortyapi.com/api/episode"), fetch("https://rickandmortyapi.com/api/episode?page=2"), fetch("https://rickandmortyapi.com/api/episode?page=3")]
for (let j = 0; j < tabFetch.length; j++) {
    tabFetch[j].then(function (res) {
        return res.json();
    })
    .then(function (data) {        
        let tabData = [data.results];
        //console.log(tabData[0]);
        for (let i = 0; i < tabData.length; i++) {
            //console.log(tabData[0]);
            for (let j = 0; j < tabData[i].length; j++) {
                //console.log(tabData[i][j]);
                let select = document.querySelector("#season");
                const mainContainer = document.querySelector(".main");
                let allDataResults = (tabData[i])[j];
                //console.log(allDataResults.episode);
                select.addEventListener("change", (e) =>{
                    let season = e.target.value;
                    let splitSeason = allDataResults.episode.split("");
                    //console.log(splitSeason[2]);
                    //mainContainer.innerHTML = "";
                    //console.log(splitSeason);
                    if (season == "s1" && splitSeason[2] == 1) {
                        //console.log(allDataResults);
                        addNewCard(allDataResults);
                    } else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(allDataResults);
                    } else if (season == "s3" && splitSeason[2] == 3) {
                        addNewCard(allDataResults);
                    } else if (season == "s4" && splitSeason[2] == 4) {
                        addNewCard(allDataResults);
                    } 
                })
            }
        }
        
     })
    .catch(function (error) {
        console.error(error);
    })
    
}
*/
let urls = ["https://rickandmortyapi.com/api/episode", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"];
for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
}
Promise.all(urls.map(url => fetch(url)))
    .then(resp => Promise.all( resp.map(r => r.json())))
    .then(function (data){
        //console.log(data);
        for (let j = 0; j < data.length; j++) {
            //console.log(data[j].results);
        }
        let tab = data[0].results.concat(data[1].results, data[2].results);
        console.log(tab);
        let select = document.querySelector("#season");
        const mainContainer = document.querySelector(".main");
            //console.log(select);
            select.addEventListener("change", (e) =>{
                let season = e.target.value;
                //console.log(season);
                mainContainer.innerHTML = "";
                for (let i = 0; i < tab.length; i++) {
                    //console.log(tabResult[i].episode);
                    let splitSeason = tab[i].episode.split("");
                    //console.log(splitSeason[2]);
                    if (season == "s1" && splitSeason[2] == 1) {
                        addNewCard(tab[i]);
                    }
                    else if (season == "s2" && splitSeason[2] == 2) {
                        addNewCard(tab[i]);
                    }
                    else if (season == "s3" && splitSeason[2] == 3) {
                        addNewCard(tab[i]);
                    } else if (season == "s4" && splitSeason[2] == 4) {
                        addNewCard(tab[i]);
                    } 
                    //let episodeName = document.querySelectorAll(".card--name");
                      //  console.log(episodeName);
                }
                    //console.log(splitSeason);

            })
    })



function addNewCard(episodes) {
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML +=
        `<div class="card">
    <span class="card--name">${episodes.name}</span>
    <button class="button">${episodes.episode}</button>
    </div>`
}

function cardDescription(episodes) {
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML +=
    `<div class="card--description">
    <div claas="card--perso">
    <img src="${episodes.characters}" alt="characters from rick and morty">
    </div>
    </div>`   
}
