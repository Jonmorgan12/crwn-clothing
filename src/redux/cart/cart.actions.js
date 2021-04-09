import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//defined the actual action itself, a function that gets the item that generates a new action with the action TYPE of ADD_ITEM, passing the item in as the payload.
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
