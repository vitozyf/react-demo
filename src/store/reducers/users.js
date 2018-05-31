export default (state = '', action) => {
  switch (action.type) {
    case 'CHANGEUSER':
      return Object.assign({}, state, {isFetching: !state.isFetching})
    default:
      return state
  }
}