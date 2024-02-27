const header = document.querySelector(".key_name")
const key = document.querySelector(".key")
const code = document.querySelector(".code")

window.addEventListener("keydown",(e)=>{
    console.log(e.key)
    key.innerHTML = `${e.key}` 
    code.innerHTML = `${e.code}`
})
