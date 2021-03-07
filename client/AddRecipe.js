import React, { Component } from "react";
import axios from "axios";

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = { recipe: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postRecipe = this.postRecipe.bind(this);
  }

  async postRecipe() {
    try {
      debugger;
      const id = (await axios.post("/api/recipes", this.state.recipe)).data;
      const recipe = (await axios.get(`/api/recipes/${id}`)).data;
      this.setState({ recipe });
    } catch (ex) {
      console.log(ex);
    }
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.state.recipe[key] = value;
    console.log(this.state.recipe);
  }

  handleSubmit(event) {
    this.postRecipe();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Recipe Name:
          <br></br>
          <input
            type="text"
            name="title"
            size="80"
            required
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Youtube Video Link:
          <br></br>
          <input
            type="url"
            name="videourl"
            size="60"
            placeholder="https://www.youtube.com/watch?v=19ngAYMz7zk"
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Recipe Description:
          <br></br>
          <textarea
            name="note"
            placeholder="Ingredients/Cooking Method"
            rows="10"
            cols="80"
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddRecipe;
