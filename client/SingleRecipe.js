import React from "react";

const SingleRecipe = (props) => {
  const { recipe, deSelectRecipe } = props;
  return (
    <div>
      <h3>
        Recipe <small onClick={deSelectRecipe}>Back</small>
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
