import React from "react";

const BookListItem = ({ book }) => {
  const { title, author, coverImage, genre } = book;
  return (
    <React.Fragment>
      <td>
        <img src={coverImage} alt="cover" />
      </td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
    </React.Fragment>
  );
};

export default BookListItem;
