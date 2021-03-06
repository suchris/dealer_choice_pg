import axios from "axios";
import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      loading: false,
      selectedRecipe: {},
    };
    this.deSelectRecipe = this.deSelectRecipe.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  async componentDidMount() {
    this.setState({
      recipes: (await axios.get("/api/recipes")).data,
      loading: false,
    });
  }

  async getRecipe(id) {
    try {
      this.state.selectedRecipe = (await axios.get(`/api/recipes/${id}`)).data;
      console.log(this.state.selectedRecipe);
    } catch (ex) {
      console.log(ex);
    }
  }

  deSelectRecipe() {
    this.setState.selectedRecipe = {};
  }

  render() {
    const { recipes, loading, selectedRecipe } = this.state;
    if (loading) {
      return "....loading";
    }

    if (Object.keys(selectedRecipe) > 0) {
      return (
        <SingleRecipe recipe={selectedRecipe} deSelectRecipe={deSelectRecipe} />
      );
    } else {
      return (
        <div>
          <h3>Total Recipes ( {recipes.length} )</h3>
          <ul>
            {recipes.map((recipe) => {
              return (
                <li key={recipe.id} onClick={getRecipe(recipe.id)}>
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
