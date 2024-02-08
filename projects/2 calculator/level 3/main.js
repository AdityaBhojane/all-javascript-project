const inputValue = document.querySelector("#value")
const calculator = document.querySelector("#calculator")

calculator.addEventListener("click",(e)=>{
    let Input = e.target.innerHTML
    console.log(typeof Input)
    switch (Input) {
        case "1":
        inputValue.value = 1
            break;
        case "2":
        inputValue.value = 2
            break;
        case "3":
        inputValue.value = 3
            break;
        case "4":
        inputValue.value = 4
            break;
        case "5":
        inputValue.value = 5
            break;
        case "6":
        inputValue.value = 6
            break;
        case "7":
        inputValue.value = 7
            break;
        case "8":
        inputValue.value = 8
            break;
        case "9":
        inputValue.value = 9    
            break;
        case "C":
        inputValue.value = "C"
            break;
        case "%":
        inputValue.value ="%"
            break;
        case "back":
        inputValue.value = "b"
            break;
        case "/":
        inputValue.value = "/"
            break;
        case "*":
        inputValue.value = "*"
            break;
        case "-":
            inputValue.value = "-"
            break;
        case "+":
            inputValue.value = "+"
            break;
        case ".":
            inputValue.value = "."
            break;
        case "0":
            inputValue.value = "0"
            break;
        case "00":
            inputValue.value = "00"
            break;
        case "submit":
            inputValue.value = "submit"
            break;
    }
})