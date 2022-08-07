import { CART_DETAILS, CART_COUNT } from "./cartType";

export const setCartDetails = (data) => {
  return {
    type: CART_DETAILS,
    payload: data,
  };
};

export const setCartCount = (data) => {
  return {
    type: CART_COUNT,
    payload: data,
  };
};
