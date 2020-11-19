import React from "react";
import BookListItem from "../book-list-item/book-list-item";
import "./book-list.css";
const BookList = ({ book }) => {
  return (
    <React.Fragment>
      {book.map((items) => {
        return (
          <tr key={items.id} className="list">
            <BookListItem book={items} />
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default BookList;
