import React from 'react';
import PropTypes from 'prop-types';
import Progress from './load';

const Book = ({
  title, author, category, handleRemove,
}) => (
  <div className="book-container">
    <div className="book-wrapper">
      <p className="normal-text dark font-bold">
        {category}
      </p>
      <h4 className="title-book">{title}</h4>
      <p className="normal-text dark blue-text">{author}</p>
      <div className="book-buttons">
        <button type="button">Comment</button>
        <button type="button" onClick={handleRemove}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <Progress />
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
