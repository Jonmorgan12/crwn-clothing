export const addItemToCart = (cartItems, cartItemsToAdd) => {
  //.fing() will go through the array and find the first item based on the condition that we pass in
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );
  //if existingCartItem exist return the cartItem with the matching id
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //the cartItem is not found within the array, return new array with existing cartItems with a base quantity of 1
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
