const reply = document.querySelector(".btn-reply")
const nestedComment = document.querySelector(".nested-comments")
const userInput = document.querySelector(".input")

let newComment = document.createElement("li")
let newDiv = document.createElement("div")
let para = document.createElement("p")
let btnDiv = document.createElement("div")
let btnOne = document.createElement("button")
let btnThree = document.createElement("button")

reply.addEventListener("click",()=>{
    // adding content in 'p' tag
    para.innerHTML = userInput.value
    newComment.setAttribute('class',"comment")
    newDiv.setAttribute('class','comment-content')
    btnDiv.setAttribute('class','comment-actions')
    btnOne.setAttribute('class','btn-reply')
    btnThree.setAttribute('class','btn-remove')
    // adding content in html buttons
    btnOne.innerHTML = 'Reply'
    btnThree.innerHTML = "Remove Comment"
    // adding li tag inside nestedComment that is ul tag 
    nestedComment.appendChild(newComment)
    // adding 1st div section of div
    newComment.appendChild(newDiv)
    newDiv.appendChild(para)
    // adding 2nd section of div
    newComment.appendChild(btnDiv)
    btnDiv.appendChild(btnOne)
    btnDiv.appendChild(btnThree)
})