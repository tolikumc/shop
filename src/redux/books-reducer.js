const SET_BOOKS = 'SET_BOOKS';

const initialState = {
  items: [],
  isLoading: false
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: [...action.payload],
        isLoading: true
      };
    default:
      return state;
  }
};

export default booksReducer;

export const setBooks = books =>({
  type: SET_BOOKS,
  payload: books
});
