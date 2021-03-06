const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  items: [],
  isLoading: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_BOOK:
      return {
        ...state,
        items: state.items.filter(i=> i.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

export const addToCart = (item) =>({
  type: ADD_BOOK,
  payload: item
});

export const removeFromCart = (id) =>({
  type: REMOVE_BOOK,
  payload: id
});
