import { UserActionTypes } from "./user.types";

// actions carries a payload of information from your application to store in state
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
