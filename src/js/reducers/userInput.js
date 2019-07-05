export default (state = "", action) => {
    switch (action.type) {
      case 'USER_SEARCH':
          return action.payload
      default:
        return state;
    }
  };
  