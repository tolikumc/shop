const SET_FILTER = 'SET_FILTER';
const SEARCH_QUERY = 'SEARCH_QUERY';

const initialState = {
  filterBy: 'all',
  searchQuery: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

export const setSearchQuery = value => ({
  type: SEARCH_QUERY,
  payload: value
});
