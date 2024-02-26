const digitalClock = document.querySelector("#clock")

setInterval(()=>{
    let currentDate = new Date();
    let hrs = currentDate.getHours()
    let min = currentDate.getMinutes()
    let sec = currentDate.getSeconds()
    let ms = Math.floor((currentDate.getMilliseconds())/100)
    digitalClock.innerHTML = `${hrs}:${min}:${sec}:${ms}`
},100)