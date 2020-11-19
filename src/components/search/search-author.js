import React, { Component } from "react";
import "./search.css";
export default class SearchAuthor extends Component {
  onSearchChange = (e) => {
    const term = e.target.value;
    const { onSearchChange } = this.props;
    onSearchChange(term);
  };

  render() {
    return (
      <th>
        <input placeholder="Автор" type="text" onChange={this.onSearchChange} />
      </th>
    );
  }
}
