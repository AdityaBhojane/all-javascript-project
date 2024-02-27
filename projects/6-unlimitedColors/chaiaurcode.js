const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

function changeColor(){
    const colorOne = Math.round(Math.random()*255)
    const colorTwo = Math.round(Math.random()*255)
    const colorThree = Math.round(Math.random()*255)
    // combining color values into rbg format using string interpolation
    const generatedColor = `rgb(${colorOne},${colorTwo},${colorThree})` 
    document.body.style.backgroundColor = generatedColor
}
let interval;

function changer(){
    if(!interval){
        interval = setInterval(changeColor,1000)
    }
}
function clear(){
    clearInterval(interval)
    interval = null
}

start.addEventListener("click",changer)
stop.addEventListener("click",clear)

