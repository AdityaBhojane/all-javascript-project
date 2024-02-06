// form support submit event not click event 
const form = document.querySelector("form")
const Result = document.querySelector("#Result")


form.addEventListener("submit",(e)=>{
    // preventing default properties of form that is get post 
    e.preventDefault();  
    // this input we should write inside the event lister otherwise initial values are empty
    const userWeightInput = parseInt(document.querySelector("#weight_input").value)
    const userHeightInput = parseInt(document.querySelector("#height_input").value)   
    console.log(userHeightInput,userWeightInput)
    if(isNaN(userHeightInput) || userHeightInput < 0 || userHeightInput == ''){
        alert("please provide valid Height")
    }if(isNaN(userWeightInput)|| userWeightInput < 0 || userWeightInput == ''){
        alert("please provide valid Weight")

    }else{
        BMI(userHeightInput,userWeightInput)
    }
    function BMI(){
        let result = ((userWeightInput / (userHeightInput*userHeightInput/10000))).toFixed(2)
        return Result.innerHTML = result
    }
})
