import React, { Component } from "react";
import axios from "axios";

class AddRecipe extends Component {
  constructor() {
    super();
    this.state = { recipe: {}, isCreated: false };
  }

  async postRecipe() {
    try {
      const id = (await axios.post("/api/recipes", this.state.recipe)).data;
      const recipe = (await axios.get(`/api/recipes/${id}`)).data;
      this.setState({ recipe });
    } catch (ex) {
      console.log(ex);
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("handleChange:");
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit:");
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
            value={this.state.recipe.title}
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
            name="url"
            value={this.state.recipe.videourl}
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
            value={this.state.recipe.note}
            placeholder="Ingredients:"
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
