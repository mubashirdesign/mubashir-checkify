import React from "react";
import { connect } from "react-redux";

import { fetchCityRestaurants } from "../actions";

class CityResults extends React.Component {
//function to set state with selected city based on button click on the list
  fetchCityRestaurants = () => {
    //Action creator to fetch the restaurants for a city based on the user input
    this.props.fetchCityRestaurants(this.props.searchQuery);
  };

//function to render the list of cities based on the user input in the search bar
  renderList() {
//if the state level user input is empty, don't return anything
    if (!this.props.searchQuery) {
      return <div />;
    }
//else if user search query exists at state level
//convert the object of cities stored at state level from the search component into an array
    let arr = Object.entries(this.props.cities);

//filter the array based on the search query then return it using the map function with the onClick eventhandler for the fetchCityRestaurants method
    return arr[1][1]
      .filter(name => {
        return name.toLowerCase().includes(this.props.searchQuery);
      })
      .map(city => {
        return (
          <li key={city} onClick={this.fetchCityRestaurants}>
            {city}
          </li>
        );
      });
  }

  render() {
  //If the cities object at state level is empty, just return nothing  
    if (!this.props.cities) {
      return <div />;
    }
//Else return the div and run the renderList Function
    return (
      <div className="app__sidebar--searchResults">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { cities: state.cities.data, searchQuery: state.searchQuery };
};

export default connect(
  mapStateToProps,
  { fetchCityRestaurants }
)(CityResults);
