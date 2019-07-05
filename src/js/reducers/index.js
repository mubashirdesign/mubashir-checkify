import { combineReducers } from "redux";
import fetchCities from './fetchCities';
import userInput from './userInput';
import fetchCityRestaurants from './fetchCityRestaurants';

export default combineReducers({
 cities: fetchCities,
 searchQuery: userInput,
 cityRestaurants: fetchCityRestaurants
});
