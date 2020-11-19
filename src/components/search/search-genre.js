import React, { Component } from "react";
import "./search.css";
export default class SearchGenre extends Component {
  onSearchChange = (e) => {
    const term = e.target.value;
    const { onSearchChange } = this.props;
    onSearchChange(term);
  };

  render() {
    return (
      <th>
        <input placeholder="Жанр" type="text" onChange={this.onSearchChange} />
      </th>
    );
  }
}
