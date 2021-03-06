import React from "react";
import axios from "axios";

const SingleRecipe = (props) => {
  const { recipeId, resetRecipeId } = props;

  return (
    <div>
      <h3>
        Recipe <small onClick={resetRecipeId}>Back</small>
      </h3>
      <h4>{recipe.title}</h4>
      <iframe
        width="560"
        height="315"
        src={recipe.videoUrl}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p>{recipe.note}</p>
    </div>
  );
};

export default SingleRecipe;
