import React from "react"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])

    const ingredientList = ingredients.map((ingredient, index) =>(
        <li key={index}>{ingredient}</li>
    ));
    

  function handleAddIngredientClick(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient").toLowerCase().trim();
    console.log(ingredients);

    if (newIngredient.trim() !== "") {
        setIngredients((previngredients) => [...previngredients, newIngredient]);
      e.currentTarget.reset(); // optional: clears input
    }
  }

  function handleClearIngredients() {
    setIngredients([]); // 💥 clears the array
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
        {ingredients.length > 0 && (
        <button onClick={handleClearIngredients} style={{ marginTop: "1rem" }}>
            Clear Ingredients
        </button>
        )}
    </main>
    )
}
