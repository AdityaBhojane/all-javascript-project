const guessOld = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const inputField = document.querySelector(".guessField")
const btn = document.querySelector("#subt")
let guesses = 10;

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let randomNumber = Math.floor(Math.random()*30)+1
    if (inputField.value > 30 || inputField.value < 1 || isNaN(inputField.value)){
        alert("please provide valid input")
    }else{
        if(inputField.value == randomNumber ){
            alert('congrats you guess it right')
            guessOld.innerHTML = ""
        }else {
            guessOld.innerHTML += `${inputField.value} `
            if(guesses !== 0){
                remaining.innerHTML = guesses
            }else{
                alert("game is over please try again !")
                guessOld.innerHTML = ""
                remaining.innerHTML = ""
                guesses = 10
            }
        }
    }
    guesses --
})

