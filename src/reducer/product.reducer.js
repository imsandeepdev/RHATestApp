import {
  product_list,
  product_list_error,
  product_list_success,
} from '../constants/common';

const initial_state = {
  loading: false,
  productInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case product_list:
      return {
        ...state,
        loading: true,
      };
    case product_list_success:
      return {
        loading: false,
        productInit: payload,
      };
    case product_list_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
