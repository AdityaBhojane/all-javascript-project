const inputValue = document.querySelector("#value")
const calculator = document.querySelector("#calculator")

calculator.addEventListener("click",(e)=>{
    let Input;
    if (e.target.tagName === "BUTTON"){
        Input = e.target.innerText
        // console.log(Input)
        if(Input !== "submit" && Input !== "back" && Input !== "C"){
            inputValue.value +=`${Input}`
        }else if(Input == "C"){
            inputValue.value = ' '
        }else if(Input == "back"){
            let previousValue = inputValue.value.slice(0,-1)
            inputValue.value = previousValue
        }else{
            let finalValue = inputValue.value
            let result = eval(finalValue)
            inputValue.value = result
        }
    }
})
