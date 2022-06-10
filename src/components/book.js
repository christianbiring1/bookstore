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
  title: PropTypes.string,
  author: PropTypes.string,
  RemoveBook: PropTypes.func,
  id: PropTypes.number,
};

Book.defaultProps = {
  title: '',
  author: '',
  RemoveBook: null,
  id: '',
};
export default Book;
