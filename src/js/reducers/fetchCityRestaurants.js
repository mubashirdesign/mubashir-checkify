export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CITYRESTAURANTS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
