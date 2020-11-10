import React, { Component } from "react";
import ReactDOM from "react-dom";

import BookListItem from "./components/book-list-item/book-list-item";
import "./index.css";
import SearchTitle from "./components/search/search-title";
import SearchAuthor from "./components/search/search-author";
import SearchGenre from "./components/search/search-genre";
import dataTest from "./services/dummy-bookstore-service";

const AppHeader = () => {
  return <h1>My Book List</h1>;
};

export default class App extends Component {
  state = {
    termTitle: "",
    termAuthor: "",
    termGenre: "",
  };

  search(items, termTitle, termAuthor, termGenre) {
    if (
      termTitle.length === 0 &&
      termAuthor.length === 0 &&
      termGenre.length === 0
    ) {
      return items;
    } else {
      items = items.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(termTitle.toLowerCase()) > -1 &&
          item.author.toLowerCase().indexOf(termAuthor.toLowerCase()) > -1 &&
          item.genre.toLowerCase().indexOf(termGenre.toLowerCase()) > -1
        );
      });
      return items;
    }
  }

  onSearchChangeTitle = (termTitle) => {
    this.setState({ termTitle });
  };
  onSearchChangeAuthor = (termAuthor) => {
    this.setState({ termAuthor });
  };
  onSearchChangeGenre = (termGenre) => {
    this.setState({ termGenre });
  };

  render() {
    const visibleItems = this.search(
      dataTest,
      this.state.termTitle,
      this.state.termAuthor,
      this.state.termGenre
    );
    console.log("visibleItems", visibleItems);
    return (
      <div>
        <AppHeader />
        <table>
          <tbody>
            <tr>
              <th rowSpan="2">Обложка</th>
              <th>Название</th>
              <th>Автор</th>
              <th>Жанр</th>
            </tr>
            <tr>
              <SearchTitle onSearchChange={this.onSearchChangeTitle} />
              <SearchAuthor onSearchChange={this.onSearchChangeAuthor} />
              <SearchGenre onSearchChange={this.onSearchChangeGenre} />
            </tr>

            {visibleItems.map((items) => {
              return (
                <tr key={items.id}>
                  <BookListItem book={items} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
