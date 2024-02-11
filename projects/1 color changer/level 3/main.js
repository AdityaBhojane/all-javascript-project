// selecting button
const colorChangerBtn = document.getElementById("btnColorChanger")
const Stop = document.getElementById("Stop")
// selecting span element
const addColorCode = document.querySelector("span")


// bar name
const Red = document.querySelector("#red")

// added event lister for btn
colorChangerBtn.addEventListener("click",()=>{
    const colorInterval =setInterval(() => {
        // generating three number values form 0 to 255
        let colorOne = Math.round(Math.random()*255);
        let colorTwo = Math.round(Math.random()*255)
        let colorThree = Math.round(Math.random()*255)
        // combining color values into rbg format using string interpolation
        const generatedColor = `rgb(${colorOne},${colorTwo},${colorThree})`
        // pushing that rgb color and changing style
        document.body.style.backgroundColor = generatedColor
        // pushing rbg code in span 
        addColorCode.innerHTML = generatedColor
    }, 1000);
    Stop.addEventListener("click",()=>{
        clearInterval(colorInterval)
    })
})
