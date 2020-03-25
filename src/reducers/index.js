const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_PLAZA':
      console.log(action.payload)
      if (action.payload == '') {
        return {
          ...state,
          establecimientos: state.establecimientosOri,
        };
      }
      return {
        ...state,
        establecimientos: state.establecimientos.filter((item) => (
          item.name == action.payload)),
      };

    default:
      return state;
  }
};
export default reducer;
