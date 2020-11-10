import React, { Component } from "react";

export default class SearchAuthor extends Component {
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
          placeholder="Автор"
          type="text"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </th>
    );
  }
}
