import React from "react";
import { connect } from "react-redux";

//action creator to fetch all the cities and store userInput based on their search
import { fetchCities, userInput } from "../actions";

class Search extends React.Component {
  componentDidMount() {
    //Query all the cities from the openTable API and store it in the app level state
    this.props.fetchCities();
  }

  userInput = event => {
    //store userInput into app level state
    this.props.userInput(event.target.value);
  };

  render() {
    return (
      <div className="app__sidebar--searchInput">
        <input
          placeholder="Search City"
          value={this.props.searchQuery}
          onChange={this.userInput}
        />
      </div>
    );
  }
}

//Store the state value of the userInput back into the search input
const mapStateToProps = state => {
  return { searchQuery: state.searchQuery };
};

export default connect(
  mapStateToProps,
  { fetchCities, userInput }
)(Search);
