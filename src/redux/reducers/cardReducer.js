// cardReducer.js

const initialState = {
  details: null, // Initial state is null since details are not available yet
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARD_DETAILS_SUCCESS':
      return {
        ...state,
        details: action.payload, // Update details when fetched successfully
      };
    default:
      return state;
  }
};

export default cardReducer;
