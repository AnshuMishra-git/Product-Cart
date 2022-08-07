import { CART_DETAILS, CART_COUNT } from "./cartType";

const initialState = {
  cart_detail: [],
  cartCount: 0
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_DETAILS:
      return {
        ...state,
        cart_detail: payload,
      };
    case CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
