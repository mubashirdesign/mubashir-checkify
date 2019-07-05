import React from "react";
import { connect } from "react-redux";

class Restaurants extends React.Component {


  renderRestaurants() {
    //If the app level state has a selected city (action creator in the CityResults component), render the restaurants for the city
    if (this.props.selectedCity) {
      return this.props.selectedCity.restaurants.map(restaurant => {
        return (
          <div className="app__selectedResult--restaurant" key={restaurant.id}>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}, {restaurant.city}, {restaurant.state}</p>
            <p>${restaurant.price}</p>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="app__selectedResult">{this.renderRestaurants()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedCity: state.cityRestaurants.data };
};

export default connect(
  mapStateToProps,
  null
)(Restaurants);
