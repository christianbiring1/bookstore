import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Form = ({ AddNewBook }) => {
  const [newBook, setnewBook] = useState({ title: '', author: '' });

  return (
    <div id="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => {
        AddNewBook(e, newBook);
        setnewBook({ title: '', author: '' });
      }}
      >
        <input type="text" name="title" placeholder="Title" required onChange={(e) => setnewBook({ ...newBook, title: e.target.value })} />
        <input type="text" name="author" placeholder="Author" required onChange={(e) => setnewBook({ ...newBook, author: e.target.value })} />
        <button type="submit" id="addbtn">ADD BOOK</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  AddNewBook: PropTypes.func.isRequired,
};

export default Form;
