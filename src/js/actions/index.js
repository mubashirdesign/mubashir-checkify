// import openTable API to allow action creators to call and retrieve data from API
import openTable from '../apis/openTableAPI';



//Fetch cities action used in SearchBar ComponentDidMount Method to initially store all list of cities
export const fetchCities = () => async dispatch => {
  const response = await openTable.get(`/cities`);
  dispatch({ type: "FETCH_CITIES", payload: response});
};


//User input action creator to send user search query to the state in order for CityResults component to render the list of cities based on user search
export const userInput = (searchInput) => {
  return {
    type: 'USER_SEARCH',
    payload: searchInput
  }
};

//Fetch City Restaurant action creator on button click in the CityResults component to query api on what city was selected and store it in state so Restaurants component can render
export const fetchCityRestaurants = (cityId) => async dispatch => {
  const response = await openTable.get(`/restaurants?city=${cityId}`);
  dispatch({ type: "FETCH_CITYRESTAURANTS", payload: response});
};
