import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './form';
import Book from './book';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const library = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(addBook(NewBook));
  };
  const RemoveBook = (id) => {
    dispatch(removeBook(id));
    console.log(id);
  };
  return (
    <>
      {library.map((book) => (
        <Book title={book.title} author={book.author} key={book.id} RemoveBook={RemoveBook} />
      ))}
      <Form AddNewBook={AddNewBook} />
    </>
  );
};

export default Books;
