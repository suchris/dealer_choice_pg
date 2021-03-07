import React from "react";

const AllRecipes = (props) => {
  const { recipes, setRecipeId } = props;

  return (
    <div>
      <h3>Total Recipes ( {recipes.length} )</h3>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id} onClick={() => setRecipeId(recipe.id)}>
              {recipe.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllRecipes;
