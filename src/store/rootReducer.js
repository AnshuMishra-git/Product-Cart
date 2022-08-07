import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer"

const rootReducer = combineReducers({
    cartData: cartReducer
});

export default rootReducer;