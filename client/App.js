import axios from "axios";
import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      selectedRecipeId: undefined,
    };
    this.resetRecipeId = this.resetRecipeId.bind(this);
    this.setRecipeId = this.setRecipeId.bind(this);
  }

  async componentDidMount() {
    try {
      const allrecipes = (await axios.get("/api/recipes")).data;
      this.setState({ recipes: allrecipes });
    } catch (ex) {
      console.log(ex);
    }
  }

  setRecipeId(id) {
    this.setState({ selectedRecipeId: id });
  }

  resetRecipeId() {
    this.setState({ selectedRecipe: undefined });
  }

  render() {
    const { recipes, selectedRecipeId } = this.state;
    if (selectedRecipeId) {
      console.log("SingleRecipe selected:");
      return (
        <SingleRecipe
          recipe={recipes[selectedRecipeId - 1]}
          resetRecipeId={this.resetRecipeId}
        />
      );
    } else {
      console.log("All Recipes:");
      return (
        <div>
          <h3>Total Recipes ( {recipes.length} )</h3>
          <ul>
            {recipes.map((recipe) => {
              return (
                <li key={recipe.id} onClick={() => this.setRecipeId(recipe.id)}>
                  {recipe.title}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
