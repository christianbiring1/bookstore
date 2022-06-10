import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, id, RemoveBook,
}) => (
  <>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={() => RemoveBook(id)}>Remove</button>
    <button type="button">Edit</button>

  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  RemoveBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
