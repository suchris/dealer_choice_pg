import axios from "axios";
import React, { Component } from "react";
import AllRecipes from "./AllRecipes";
import SingleRecipe from "./SingleRecipe";
import AddRecipe from "./AddRecipe";

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
    this.setState({ selectedRecipeId: undefined });
  }

  render() {
    const { recipes, selectedRecipeId } = this.state;

    return (
      <div>
        {selectedRecipeId ? (
          <SingleRecipe
            recipe={recipes[selectedRecipeId - 1]}
            resetRecipeId={this.resetRecipeId}
          />
        ) : (
          <div>
            <h3>Add New Recipe:</h3>
            <AddRecipe />
            <hr></hr>
            <AllRecipes recipes={recipes} setRecipeId={this.setRecipeId} />
          </div>
        )}
      </div>
    );
  }
}
