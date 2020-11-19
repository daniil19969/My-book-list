import React, { Component } from "react";
import BookList from "../book-list/book-list";
import SearchTitle from "../search/search-title";
import SearchAuthor from "../search/search-author";
import SearchGenre from "../search/search-genre";
import dataTest from "../../services/dummy-bookstore-service";
import BookstoreService from "../../services/bookstore-service";
import Header from "../header";
import "./app.css";

export default class App extends Component {
  
  bookService = new BookstoreService();

  state = {
    book: [],
    termTitle: "",
    termAuthor: "",
    termGenre: "",
  };

  componentDidMount() {
    this.bookService.getBooks().then((book) => {
      this.setState({ book });
    });
  }

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
          item.title.toLowerCase().includes(termTitle.toLowerCase()) == true &&
          item.author.toLowerCase().includes(termAuthor.toLowerCase()) ==
            true &&
          item.genre.toLowerCase().includes(termGenre.toLowerCase()) == true
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
      this.state.book,
      this.state.termTitle,
      this.state.termAuthor,
      this.state.termGenre
    );
    console.log("visibleItems", visibleItems);
    return (
      <div>
        <Header />
        <table className="table">
          <thead className="head">
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
          </thead>
          <tbody>
            <BookList book={visibleItems} />
          </tbody>
        </table>
      </div>
    );
  }
}
