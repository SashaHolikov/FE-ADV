document.addEventListener('click', onAudio)
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup',keyUp)

function onAudio(el) {    
    const audio = new Audio(`./audio/${el.target.id}.mp3`)
    audio.play()    
}

function keyDown(el) {    
    const audio = new Audio(`./audio/${el.code}.mp3`)
    audio.play()
    document.getElementById(el.code).classList.add('keyClice')
}

function keyUp(el) {
    document.getElementById(el.code).classList.remove('keyClice')
}
