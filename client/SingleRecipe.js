import React from "react";
import ReactPlayer from "react-player";

const SingleRecipe = (props) => {
  const { recipe, resetRecipeId } = props;

  return (
    <div>
      <h3>
        Recipe <button onClick={() => resetRecipeId()}>Back</button>
      </h3>
      <h4>{recipe.title}</h4>
      <ReactPlayer url={recipe.videourl} />
      <p>{recipe.note}</p>
    </div>
  );
};

export default SingleRecipe;
