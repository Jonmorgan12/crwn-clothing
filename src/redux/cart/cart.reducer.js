import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    //which the reducer listens for in the new case for that new action type we made, so when the action comes in we can me sure that what we are doing is returning the new state of our overall cart reducer
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //spreading in all new array values, and any additional values at the end of the array
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
