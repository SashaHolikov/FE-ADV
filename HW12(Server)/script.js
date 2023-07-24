const base = 'https://swapi.dev/api/'
let film = document.getElementById('numberFilm')
document.getElementById('getInfo').addEventListener('click', getInfo)
let section = document.querySelector('.section')
let characters = NaN;



// GET_INFO

async function getInfo() {
    section.innerHTML = '';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    await fetch(base+'films/'+film.value, {
    method: "GET"
}).then((reponse) => {
    return reponse.json()
})
    .then((data) => {
        characters = data.characters;
        console.log(characters)
    })

    for (let character of characters) {
        await fetch(character)
            .then((reponse) => {
            return reponse.json()
            })
            .then((data) => {
                character = data;
            return section.insertAdjacentHTML('afterbegin',
                `<div class = "cardInfo">
            <span class = "title">NAME</span>
            <span>${character.name}</span>
            <span class = "title">BIRTH YEAR</span>
            <span>${character.birth_year}</span>
            <span class = "title">GENDER</span>
            <span>${character.gender}</span>
            </div>`
            )
        })
    }
    document.getElementById('clean').style.display='inline'
}

// GET_PLANETS
let buttonNext = document.getElementById('next');
let buttonBack = document.getElementById('back');
let page = 1;
let planets = NaN;

buttonBack.addEventListener('click', getBack) 
buttonNext.addEventListener('click', getNext)

function getBack() {
    if (page <=1) {
        return page =1
    } else {
        page --
    }
    getPlanet()
    console.log(page)
}

function getNext() {
    if (page < 6) {
        page ++
    }
    getPlanet()
    console.log(page)
}
document.getElementById('getPlanets').addEventListener('click',getPlanet)

async function getPlanet() {
    section.innerHTML = '';
    document.getElementById('clean').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('next').style.display = 'inline';
    console.log('page: '+ page)
    await fetch(base + 'planets/?page=' + page , {
    method: "GET"
}).then((reponse) => {
    return reponse.json()
})
        .then((data) => {   
        planets = data.results
        console.log(planets)
        });
        for (let planet of planets) {
        section.insertAdjacentHTML('afterbegin', '<span>' + planet.name+ '</span>')
    }  


}

// GET_CLEAN

document.getElementById('clean').addEventListener('click', () => {
    section.innerHTML = '';
    document.getElementById('clean').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'none';
})