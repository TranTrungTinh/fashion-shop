import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  if(type === UserActionTypes.SET_CURRENT_USER) {
    return { ...state, currentUser: payload }
  }
  return state;
};

export default userReducer;