import {
  GET_CARD_FAIL,
  GET_CARD_LOADING,
  GET_CARD_SUCCESS,
} from '../actionType';
import cardInitialState from '../initialStates/cardInitialState';

const defaultState = cardInitialState;
export default card = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CARD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_CARD_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
