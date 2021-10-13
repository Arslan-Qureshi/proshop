import * as actions from "../constants/userConstants";
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loading: true };
    case actions.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actions.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case actions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return { loading: true };
    case actions.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actions.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actions.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actions.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case actions.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true };
    case actions.USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case actions.USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
