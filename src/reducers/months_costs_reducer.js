import { GET_MONTHS_COSTS } from '../actions';

export default function (state = [], action) {
  switch(action.type) {
    case GET_MONTHS_COSTS:
      return action.payload;
    default:
      return state;
  }
}
