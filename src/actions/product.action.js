import {Config} from '../config';
import {
    product_list,
    product_list_error,
    product_list_success} from '../constants/common';
import api from '../services/api';

export const ProductList = () => {
  return {
    type: product_list,
  };
};
export const ProductListSuccess = payload => {
  return {
    type: product_list_success,
    payload,
  };
};
export const ProductListError = error => {
  return {
    type: product_list_error,
    payload: error,
  };
};

export const ProductListRequest = (success, failed) => {
  return dispatch => {
    dispatch(ProductList());
    api
      .multiGetRequest({
        needAuth: false,
        url: Config.PRODUCTLISTAPI,
      })
      .then(response => {
        dispatch(ProductListSuccess(response));
        success?.(response);
      })
      .catch(error => {
        dispatch(ProductListError(error));
        failed?.(error);
        console.log('Error: ', error);
      });
  };
};
