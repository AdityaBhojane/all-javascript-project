// selecting button
const colorChangerBtn = document.getElementById("btnColorChanger")
// selecting span element
const addColorCode = document.querySelector("span")

// added event lister for btn
colorChangerBtn.addEventListener("click",()=>{
    // generating three number values form 0 to 255
    const colorOne = Math.round(Math.random()*255)
    const colorTwo = Math.round(Math.random()*255)
    const colorThree = Math.round(Math.random()*255)
    // combining color values into rbg format using string interpolation
    const generatedColor = `rgb(${colorOne},${colorTwo},${colorThree})`
    // pushing that rgb color and changing style
    document.body.style.backgroundColor = generatedColor
    // pushing rbg code in span 
    addColorCode.innerHTML = generatedColor
})