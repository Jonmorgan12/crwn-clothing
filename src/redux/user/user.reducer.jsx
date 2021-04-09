import { UserActionTypes } from "./user.types";

// the action is imported and returns an object with properties to update state
const Initial_State = {
  currentUser: null,
};

//function that gets a state obj and action
const userReducer = (state = Initial_State, action) => {
  // case statement and default value, like a conditional statement
  //conditional, statement === the action.type return the proper payload, otherwise return the cuurent state
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
