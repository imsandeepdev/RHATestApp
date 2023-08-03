import {Config} from '../config';
import {
  cart_list,
  cart_list_success,
  cart_list_error
} from '../constants/common';
import api from '../services/api';

export const CartList = () => {
  return {
    type: cart_list,
  };
};
export const CartListSuccess = payload => {
  return {
    type: cart_list_success,
    payload,
  };
};
export const CartListError = error => {
  return {
    type: cart_list_error,
    payload: error,
  };
};

export const CartListRequest = (success, failed) => {
  return dispatch => {
    dispatch(CartList());
    api
      .multiGetRequest({
        needAuth: false,
        url: Config.CARTLISTAPI,
      })
      .then(response => {
        dispatch(CartListSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(CartListError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
