import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      recipes: (await axios.get("/api/recipes")).data,
      loading: false,
    });
  }

  render() {
    const { recipes, loaing } = this.state;
    if (loading) {
      return "....loading";
    }
    return (
      <div>
        <h3>Recipes ( {recipes.length} )</h3>
        <ul>
          {recipes.map((recipe) => {
            return <li key={recipe.id}>{recipe.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
