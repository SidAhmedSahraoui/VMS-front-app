import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  UPDATE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from "../types";

import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
    return;
  }

  try {
    dispatch(setLoading());
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Update password
export const updatePassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    //dispatch(setLoadingSettings());

    const res = await axios.put("api/users/password", formData, config);

    dispatch({ type: UPDATE_PASSWORD, payload: res.data });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({
      //type: SETTINGS_ERROR,
      payload: error?.response?.data,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post("/api/users", formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error?.response?.data,
    });
  }
};

// Login user
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post("api/auth", formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.response?.data,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
