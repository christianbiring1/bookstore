import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const GET_BOOK = 'bookstore/books/GET_BOOK';
const POST_BOOK = 'bookstore/books/POST_BOOK';

const PAGE_URL = `${BASE_URL}/wEKvIqnMSLMT7g9ng5Yj/books`;

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBook = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});

export const getBooks = (books) => ({
  type: GET_BOOK,
  books,
});

export const postBook = (book) => ({
  type: POST_BOOK,
  book,
});

export const sendBook = (book) => async (dispatch) => {
  await axios.post(PAGE_URL, book);
  dispatch(addBook(book));
};

export const fetchBook = () => async (dispatch) => {
  const response = await axios.get(PAGE_URL);
  const BooksData = await response.data;
  const books = [];
  Object.entries(BooksData).forEach((book) => {
    books.push({
      item_id: book[0],
      ...book[1][0],
    });
  });
  dispatch(getBooks(books));
};

export const deleteBook = (Id) => async (dispatch) => {
  axios.delete(`${PAGE_URL}/${Id}`);
  dispatch(removeBook(Id));
};

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return [...state].filter((book) => (book.item_id !== action.id));
    case GET_BOOK:
      return action.books;
    default:
      return state;
  }
};

export default BookReducer;
