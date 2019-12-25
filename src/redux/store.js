import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from "./books-reducer";
import cartReducer from "./cart-reducer";
import filterReducer from "./filter-reducer";


const reducers = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  filter: filterReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;