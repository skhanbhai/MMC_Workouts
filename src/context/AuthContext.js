import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../helperfunctions/navigationRefs";

const squatData = require("../../data/compoundExercises/squat.json");

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("ExerciseScreen");
  } else {
    navigate("Signin");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const navigateAway = () => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    console.log("token is present");
    AsyncStorage.remove();
    // dispatch({ type: "signout" });
    navigate("ExerciseScreen");
  } else {
    console.log("token not there");
  }

  // navigate("Signin");
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("ExerciseScreen");
    } catch (err) {
      // console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("ExerciseScreen");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

// const signout = (dispatch) => async () => {
//   // await AsyncStorage.removeItem("token");
//   // dispatch({ type: "signout" });
//   navigate("ExerciseScreen");
// };

const signout = () => async () => {
  const token = await AsyncStorage.getItem("token");
  console.log(token);
  navigate("ExerciseScreen");
  // await AsyncStorage.remove();

  // dispatch({ type: "signout" });
  // navigate("loginFlow");
};

// const squats = () => {
//   navigate("Squat", squatData);
// };

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
    navigateAway,
    // squats,
  },
  { token: null, errorMessage: "" }
);
