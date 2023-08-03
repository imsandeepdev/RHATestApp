import {
    cart_list,
    cart_list_success,
    cart_list_error
} from '../constants/common';

const initial_state = {
  loading: false,
  cartInit: {},
  error: '',
};

const reducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case cart_list:
      return {
        ...state,
        loading: true,
      };
    case cart_list_success:
      return {
        loading: false,
        cartInit: payload,
      };
    case cart_list_error:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
