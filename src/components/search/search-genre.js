import React, { Component } from "react";

export default class SearchGenre extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <th>
        <input
          placeholder="Жанр"
          type="text"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </th>
    );
  }
}
