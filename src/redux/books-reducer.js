const SET_BOOKS = 'SET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';

const initialState = {
  books: [{
    id: 0,
    title: 'Test'
  }]
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, ...action.payload]
      };
    default:
      return state;
  }
};

export default booksReducer;
