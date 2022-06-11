import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, handleRemove }) => (
  <>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={handleRemove}>Remove</button>
    <button type="button">Edit</button>

  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
