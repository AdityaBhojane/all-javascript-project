const guessOld = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const inputField = document.querySelector(".guessField")
const btn = document.querySelector("#subt")

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let randomNumber = Math.floor(Math.random()*20)+1
    if (inputField.value > 20 || inputField.value < 1 || isNaN(inputField.value)){
        alert("please provide valid input")
    }else{
        if(inputField.value == randomNumber ){
            alert('congrats you guess it right')
            guessOld.innerHTML = ""
        }else {
            guessOld.innerHTML += `${inputField.value} `
        }
    }
})

