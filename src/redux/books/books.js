const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

export const addBook = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default:
      return state;
  }
};

export default BookReducer;
