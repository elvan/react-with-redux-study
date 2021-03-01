import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case EDIT_STREAM:
    case FETCH_STREAM:
    case FETCH_STREAMS:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default streamReducer;
