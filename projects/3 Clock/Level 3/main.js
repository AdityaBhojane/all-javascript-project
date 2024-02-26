const hr = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")

function clock(){
let currentDate = new Date()
let hours = currentDate.getHours() - 12
let minutes = currentDate.getMinutes()
let second = currentDate.getSeconds()
    hr.style.rotate = `${(hours*30)+ minutes/2}deg`
    min.style.rotate = `${(minutes*6)}deg`
    sec.style.rotate = `${second*6}deg`
    console.log((hours*6) + minutes/2)
    // console.log((minutes*6) + second/2)
}

setInterval(clock,1000)