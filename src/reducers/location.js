export default function location(state = 'Default Location', action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return Object.assign({}, state, {
        location: action.payload
      });

    default:
      return state;
  }
}
