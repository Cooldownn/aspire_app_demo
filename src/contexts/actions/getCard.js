import { axiosInstance } from '../../config/axiosInstance';
import {
  GET_CARD_FAIL,
  GET_CARD_LOADING,
  GET_CARD_SUCCESS,
} from '../actionType';

export const getCardDetail = () => (dispatch) => {
  dispatch({
    type: GET_CARD_LOADING,
  });

  axiosInstance
    .get('https://dummy/api')
    .then((response) => {
      dispatch({
        type: GET_CARD_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CARD_FAIL,
        payload: err.response,
      });
    });
};
