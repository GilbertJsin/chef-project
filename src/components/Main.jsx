import React from "react"

export default function Main(){

    const [ingredients, setIngredients] = React.useState(["Chicken","Orageno","Peas","onions"])
    const [isRecipeShown, setIsRecipeShown] = React.useState(false)

    const ingredientList = ingredients.map((ingredient, index) =>(
        <li key={index}>{ingredient}</li>
    ));
    

  function handleAddIngredientClick(formData){
    const newIngredient = formData.get("ingredient").toLowerCase().trim();
    console.log(ingredients);

    if (newIngredient.trim() !== "") {
        setIngredients((previngredients) => [...previngredients, newIngredient]);
    }
  }

  function handleClearIngredients() {
    setIngredients([]); 
  }

     return ( <main>
        <form className="add-ingredient-form" action={handleAddIngredientClick}>
            <input 
            id="ingredient-input"
            aria-label="Add ingredient"
            placeholder="e.g. peas"
            name="ingredient"
            type="text"
            />
            <button type="submit">Add Ingredient</button>
        </form>
        {ingredients.length > 0 && <h2 style={{ paddingLeft: "20px"}}>Ingredients on hand:</h2>
    }
        <ul>
            {ingredientList}
        </ul>
        {ingredients.length > 0 && (
        <button onClick={handleClearIngredients} style={{ marginTop: "1rem", marginLeft: "25px" }}>
            Clear Ingredients
        </button>
        )}

        {ingredients.length > 3 && ( <section>
            <div className="generate-recipe-container">
                <div className="generate-recipe-text">
                    <h3>Ready for a recipe?</h3>
                    <div>
                    <p className="get-recipe-p">Generate a recipe from your list of ingredients.</p>
                    </div>
                </div>
                <div>
                    <button className="get-recipe-bttn-container" onClick={() => setIsRecipeShown(prev => !prev)}>Get a recipe</button>
                </div>
            </div> 
        </section>)}
        {isRecipeShown && (<section className="main-recipe-container">
            <h2>Chef Munchie Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                <h3>Beef Bolognese Pasta</h3>
                <strong>Ingredients:</strong>
                <ul>
                    <li>1 lb. ground beef</li>
                    <li>1 onion, diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 tablespoons tomato paste</li>
                    <li>1 (28 oz) can crushed tomatoes</li>
                    <li>1 cup beef broth</li>
                    <li>1 teaspoon dried oregano</li>
                    <li>1 teaspoon dried basil</li>
                    <li>Salt and pepper to taste</li>
                    <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                </ul>
                <strong>Instructions:</strong>
                <ol>
                    <li>Bring a large pot of salted water to a boil for the pasta.</li>
                    <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                    <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                    <li>Stir in the tomato paste and cook for 1 minute.</li>
                    <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                    <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                    <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                    <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                    <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                </ol>
            </article>
        </section>)}

    </main>
    )
}

//8:04:58
