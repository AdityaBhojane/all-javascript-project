// selecting button
const colorChangerBtn = document.getElementById("btnColorChanger")
// selecting span element
const addColorCode = document.querySelector("span")

// intensity bar 
const five = document.querySelector("#five")
const twenty = document.querySelector("#twenty")
const forty = document.querySelector("#forty")
const sixty = document.querySelector("#sixty")
const eighty = document.querySelector("#eighty")
const full = document.querySelector("#full")

// bar name
const Red = document.querySelector("#red")

 // generating three number values form 0 to 255
let colorOne = Math.round(Math.random()*255);
let colorTwo = Math.round(Math.random()*255)
let colorThree = Math.round(Math.random()*255)

// added event lister for btn
colorChangerBtn.addEventListener("click",()=>{
    // combining color values into rbg format using string interpolation
    const generatedColor = `rgb(${colorOne},${colorTwo},${colorThree})`
    // pushing that rgb color and changing style
    document.body.style.backgroundColor = generatedColor
    // pushing rbg code in span 
    addColorCode.innerHTML = generatedColor
})

Red.addEventListener("click",(e)=>{
    if(e.target == twenty){
        five.style.width = 20+"%"
        colorOne = 51
    }else if(e.target == forty){
        five.style.width = 40+"%"
        colorOne = 102
    }else if(e.target == sixty){
        five.style.width = 60+"%"
        colorOne = 153
    }else if(e.target == eighty){
        five.style.width = 80+"%"
        colorOne = 204
    }else if(e.target == full){
        five.style.width = 100+"%"
        colorOne = 255
    }
    else{
        five.style.width = 5+"%"
        colorOne = 10
    }
})