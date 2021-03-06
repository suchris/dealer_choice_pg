import React from "react";
import axios from "axios";

const SingleRecipe = (props) => {
  const { recipe, resetRecipeId } = props;

  return (
    <div>
      <h3>
        Recipe <button onClick={resetRecipeId}>Back</button>
      </h3>
      <h4>{recipe.title}</h4>
      <iframe
        width="560"
        height="315"
        src={recipe.videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{recipe.note}</p>
    </div>
  );
};

export default SingleRecipe;
