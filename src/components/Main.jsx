import React from "react"

export default function Main(){

    const [ingredients, setingredients] = React.useState([])

    const ingredientList = ingredients.map((ingredient, index) =>(
        <li key={index}>{ingredient}</li>
    ));
    

  function handleAddIngredientClick(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient").toLowerCase().trim();
    console.log(ingredients);

    if (newIngredient.trim() !== "") {
        setingredients((previngredients) => [...previngredients, newIngredient]);
      e.currentTarget.reset(); // optional: clears input
    }

  }

     return ( <main>
        <form className="add-ingredient-form" onSubmit={handleAddIngredientClick}>
            <input 
            id="ingredient-input"
            aria-label="Add ingredient"
            placeholder="e.g. peas"
            name="ingredient"
            type="text"
            />
            <button type="submit">Add Ingredient</button>
        </form>
        <ul>
            {ingredientList}
        </ul>
    </main>
    )
}
