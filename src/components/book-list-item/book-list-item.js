import React from "react";
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, coverImage, genre } = book;
  return (
    <React.Fragment>
      <td>
        <img src={coverImage} alt="cover" className='smallImage'/>
      </td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
    </React.Fragment>
  );
};

export default BookListItem;
