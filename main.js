const biscoitoUnlocked = document.querySelector("#biscoitoLocked")
const body =  document.querySelector('html')
let listaDeFrases = document.querySelectorAll('#frasesMotivacionais')

let randomBiscoito = listaDeFrases[Math.floor(Math.random()*listaDeFrases.length)]
randomBiscoito.classList.toggle('hide')

//Funções call-back
function unlocked (event) {
    document.querySelector(".biscoitoLocked").classList.add('hide')
    document.querySelector(".biscoitoUnlocked").classList.remove('hide')
}

function handleClickReset (e) {
    document.querySelector('.biscoitoUnlocked').classList.add('hide')
    document.querySelector(".biscoitoLocked").classList.remove('hide')
    
}

//Eventos
const btnReset = document.querySelector('#btnReset')

btnReset.addEventListener('click', handleClickReset)
biscoitoUnlocked.addEventListener('click', unlocked)

body.onkeypress = function (e) {
    if (e.code == 'Enter') {      
    document.querySelector(".biscoitoLocked").classList.add('hide')
    document.querySelector(".biscoitoUnlocked").classList.remove('hide')
}

btnReset.onkeypress = function (e) {
    if (e.code == 'Enter') {
        document.querySelector('.biscoitoUnlocked').classList.add('hide')
        document.querySelector(".biscoitoLocked").classList.remove('hide')
    }
}
}



