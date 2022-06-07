const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];
let initialId = 0;

export const addBook = title => {
  return {
    type: ADD_BOOK,
    id: initialId++,
    title
  }
}

export const removeBook = title => {
  return {
    type: REMOVE_BOOK,
    title
  }
}

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ];
    case REMOVE_BOOK:
      return state.map((book) => (book.id !== action.id));
    default:
      return state;   
  }
}

export default BookReducer;
