const addColorBtn = document.querySelector("#btn")
const userColorInput = document.querySelector("#input")
const body = document.querySelector("body")

addColorBtn.addEventListener("click",()=>{
    // taking input form user
    let colorValue = userColorInput.value
    if(checker(colorValue)){
        body.style.backgroundColor = colorValue
    }else{
        alert("Color is not valid ... please provide valid input")
    }
    console.log(body)
    // console.log(body.style.backgroundColor !== '')
})

// checking if the input is valid or not
function checker(colorValue){
    // this line create an element to check the value of styling is correct or not
    // why did't use body ?
    // body is not temporary element if we use it then checker only work 2st time
    // and in 2nd time just there is changed in bgc of body then always true 
    const tempElement = document.createElement("div")
    tempElement.style.backgroundColor = colorValue
    // this line check if the color is valid then like if we do clg 
    // body.style.backgroundColor then it provide use color name if its
    // invalid then value is empty thats why we checking than in next line
    return tempElement.style.backgroundColor !== ""
}



