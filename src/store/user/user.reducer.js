import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
