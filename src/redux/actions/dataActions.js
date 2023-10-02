// Define an action to set the active country for filtering
export const setActiveCountry = (country) => (dispatch) => {
  dispatch({ type: 'SET_ACTIVE_COUNTRY', payload: country });
};

// Define an action to fetch data from the API
export const fetchData = () => async (dispatch) => {
  try {
    // Fetch data from the API
    const response = await fetch("https://64c37c1ceb7fd5d6ebd0ebc4.mockapi.io/brands");
    const data = await response.json();
    
    // Dispatch the data to the Redux store
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
  }
};