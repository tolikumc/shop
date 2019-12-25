const SET_FILTER = 'SET_FILTER';

const initialState = {
  filterBy: 'all'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return{
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;

export const setFilter = filter =>({
  type: SET_FILTER,
  payload: filter
});
