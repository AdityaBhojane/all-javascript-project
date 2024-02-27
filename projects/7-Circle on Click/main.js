
window.addEventListener("click",(e)=>{
    createCircle(e.x,e.y)
})

function createCircle(x,y){
    const container = document.createElement("div")
    container.style.left = x + "px"
    container.style.top = y + "px"
    document.body.appendChild(container)
}