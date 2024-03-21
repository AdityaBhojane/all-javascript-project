const get_meal = document.querySelector("#get_meal")
const main = document.querySelector(".main-div")



get_meal.addEventListener("click",()=>{
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(res => {
    mealsAPI = res.meals[0]
    createMeal()
    createCard()
  } )
})
// APi response and list variable
let mealsAPI = [] 

// making list of function list OF Ingredients

function listOFIngredients(){
  let Ingredients = "";
  for (let i = 1; i < 21; i++) {
      if(mealsAPI[`strIngredient${i}`]){
         Ingredients += `<li>${mealsAPI[`strIngredient${i}`]}</li>`
      }
    }
  return Ingredients
}

function createMeal(){
  console.log(mealsAPI)
}

function createCard(){
    main.innerHTML = `<div class="section-one">
    <img src="${mealsAPI.strMealThumb}" alt="">
    <div class="">
        <h1>${mealsAPI.strMeal}</h1>
        <p class="info">${mealsAPI.strInstructions}</p>
    </div>
  </div>
  <div class="place">
    <p><span>Category :</span>${mealsAPI.strCategory}</p>
    <p><span>Area :</span>${mealsAPI.strArea}</p>
  </div>
  <div class="parent">
  <div>
  <h3>Ingredients:</h3>
  <ul>
  ${listOFIngredients()}
  </ul>
</div>
<div>
  <iframe height="415" width="520" src="https://www.youtube.com/embed/${mealsAPI.strYoutube.slice(-11)}" frameborder="0"></iframe>
</div>
  </div>
 `
}