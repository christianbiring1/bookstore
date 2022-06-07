import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Bookreducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  book: Bookreducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
