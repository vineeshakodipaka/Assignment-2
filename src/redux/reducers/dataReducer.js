
// dataReducer.js

const initialState = {
  data: [], // Your data array
  activeCountry: "London", // Set the first button as active by default
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_COUNTRY':
      return {
        ...state,
        activeCountry: action.payload,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;