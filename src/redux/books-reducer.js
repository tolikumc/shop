const SET_BOOKS = 'SET_BOOKS';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  items: [],
  isLoading: false,
  filterBy: 'all'
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: [...action.payload],
        isLoading: true
      };
    case SET_FILTER:
      console.log(action.payload);
      return{
        ...state,
        filterBy: action.payload
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

export const setFilter = filter =>({
  type: SET_FILTER,
  payload: filter
});
