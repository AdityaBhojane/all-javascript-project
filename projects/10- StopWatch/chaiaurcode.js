
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const countdown = document.querySelector(".count")
const display = document.querySelector(".display")

let timerFnc;

let hrs = 0;
let min = 0;
let sec = 0;

let startPermission = 0;
let countPermission = 0;

start.addEventListener("click",()=>{
    if(startPermission == 0){
        timerFnc = setInterval(() => {
            if(sec == 60){
                min++
                sec = 0 
            }
            if(min == 60){
                hrs++
                min = 0
            }
            sec++
            display.innerHTML = `${hrs}:${min}:${sec}`
        }, 1000);
        
        startPermission = 1;

        stop.addEventListener("click",()=>{
            startPermission = 0
            clearInterval(timerFnc)
        })
    }
})

reset.addEventListener("click",()=>{
    hrs = 0;
    min = 0;
    sec = 0;
    display.innerHTML = `${hrs}:${min}:${sec}`
    clearInterval(timerFnc)
    startPermission = 0
})

countdown.addEventListener("click",()=>{
   if(countPermission == 0){
    const input = document.querySelector("input")
    let timer = input.value
    min = timer
    let countFnc = setInterval(() => {
        if(min>0 &&sec == 0){
            sec = 60 
            min--
        }
        if(min == 0 && sec == 1){
            Stop() 
        }
        sec--
        display.innerHTML = `${hrs}:${min}:${sec}`
        console.log(min,sec)
    }, 1000);
    input.value = ''
    countPermission = 1

    stop.addEventListener("click",()=>{
        Stop()
        countPermission = 0 
    })
    function Stop(){
        clearInterval(countFnc)
    }
   }
})  