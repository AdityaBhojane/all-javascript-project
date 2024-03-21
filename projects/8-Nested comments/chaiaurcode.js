const reply = document.querySelector(".btn-add")
const nestedComment = document.querySelector(".comment")
const userInput = document.querySelector(".input")


let comments = function (){
    let ulList = document.createElement("ul")
    let newComment = document.createElement("li")
    let newDiv = document.createElement("div")
    let para = document.createElement("p")
    let btnDiv = document.createElement("div")
    let btnOne = document.createElement("button")
    let btnThree = document.createElement("button")
    // adding content in 'p' tag
    para.innerHTML = userInput.value
    newComment.setAttribute('class',"comment")
    newDiv.setAttribute('class','comment-content')
    btnDiv.setAttribute('class','comment-actions')
    btnOne.setAttribute('class','btn-reply')
    btnThree.setAttribute('class','btn-remove')
    ulList.setAttribute('class','nested-comments')
    // adding content in html buttons
    btnOne.innerHTML = 'Reply'
    btnThree.innerHTML = "Remove Comment"
    // adding li tag inside nestedComment that is ul tag 
    ulList.appendChild(newComment)
    nestedComment.appendChild(ulList)
    // adding 1st div section of div
    newComment.appendChild(newDiv)
    newDiv.appendChild(para)
    // adding 2nd section of div
    newComment.appendChild(btnDiv)
    btnDiv.appendChild(btnOne)
    btnDiv.appendChild(btnThree)

    // new nested reply black box
   function nestedBtn(){
       let nestedUl = document.createElement("ul")
       let newComment = document.createElement("li")
       let newDiv = document.createElement("div")
       let para = document.createElement("p")
       let btnDiv = document.createElement("div")
       let btnOne = document.createElement("button")
       let btnThree = document.createElement("button")
       // adding content in 'p' tag
       para.innerHTML = userInput.value
       newComment.setAttribute('class',"comment")
       newDiv.setAttribute('class','comment-content')
       btnDiv.setAttribute('class','comment-actions')
       btnOne.setAttribute('class','btn-reply')
       btnThree.setAttribute('class','btn-remove')
       ulList.setAttribute('class','nested-comments')
       // adding content in html buttons
       btnOne.innerHTML = 'Reply'
       btnThree.innerHTML = "Remove Comment"
       // adding li tag inside nestedComment that is ul tag 
       ulList.appendChild(nestedUl)
       nestedUl.appendChild(newComment)
       // adding 1st div section of div
       newComment.appendChild(newDiv)
       newDiv.appendChild(para)
       // adding 2nd section of div
       newComment.appendChild(btnDiv)
       btnDiv.appendChild(btnOne)
       btnDiv.appendChild(btnThree)
   
       btnOne.addEventListener("click",nestedBtn)
   }
    btnOne.addEventListener("click",nestedBtn)
} 


reply.addEventListener("click",comments)

