export default (state = '', action) => {
  switch (action.type) {
    case 'CHANGEAUTH':
      return Object.assign({}, state, {isFetching: !state.isFetching})
    default:
      return state
  }
}