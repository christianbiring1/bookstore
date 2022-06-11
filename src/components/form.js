import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sendBook } from '../redux/books/books';

const Form = () => {
  const refTitle = useRef();
  const refAuthor = useRef();
  const refcategory = useRef();

  const dispatch = useDispatch();
  const submitBook = (e) => {
    e.preventDefault();
    dispatch(sendBook({
      item_id: Math.random(),
      title: refTitle.current.value,
      author: refAuthor.current.value,
      category: refcategory.current.value,
    }));
    refAuthor.current.value = '';
    refTitle.current.value = '';
  };
  return (
    <div id="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => submitBook(e)}>
        <input ref={refTitle} type="text" name="title" placeholder="Title" required />
        <input ref={refAuthor} type="text" name="author" placeholder="Author" required />
        <select required>
          <option value="" ref={refcategory}>Categories</option>
          <option value="Economy">Economy</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Business">Business</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit" id="addbtn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
