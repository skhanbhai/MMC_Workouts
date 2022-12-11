import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

import WeightedExercisesScreen from "./src/screens/exerciseScreens/WeightedExercisesScreen";

import CompoundExercisesScreen from "./src/screens/exerciseScreens/CompoundExercisesScreen";
import AbsScreen from "./src/screens/exerciseScreens/AbsScreen";
import BicepsScreen from "./src/screens/exerciseScreens/BicepsScreen";
import TricepsScreen from "./src/screens/exerciseScreens/TricepsScreen";

import SquatScreen from "./src/screens/transitions/compoundExercises/SquatScreenTransition";
import DeadLiftScreen from "./src/screens/transitions/compoundExercises/DeadLiftScreenTransition";
import BenchScreen from "./src/screens/transitions/compoundExercises/BenchScreenTransition";

import RussianDumbellTwistScreen from "./src/screens/transitions/abs/RussianDumbellTwistTransition";
import WeightedAbPulldownScreen from "./src/screens/transitions/abs/WeightedAbPulldownTransition";
import WeightedSitUpScreen from "./src/screens/transitions/abs/WeightedSitUpTransition";

import HammerCurlScreen from "./src/screens/transitions/biceps/HammerCurlTransition";
import BicepCableScreen from "./src/screens/transitions/biceps/BicepCableTransition";
import RegularBicepCurlScreen from "./src/screens/transitions/biceps/RegularBicepCurlTransition";

import TricepPulldownScreen from "./src/screens/transitions/triceps/TricepPulldownTransition";
import NarrowGripBenchScreen from "./src/screens/transitions/triceps/NarrowGripBenchTransition";
import OneArmTricepScreen from "./src/screens/transitions/triceps/OneArmTricepTransition";

import BodyWeightExercisesScreen from "./src/screens/exerciseScreens/BodyWeightExercisesScreen";
import BodyWeightAbsScreen from "./src/screens/exerciseScreens/Bodyweight_AbsScreen";
import BodyWeightChestScreen from "./src/screens/exerciseScreens/Bodyweight_ChestScreen";

import BentLegTwistScreen from "./src/screens/transitions/bodyweight_abs/BentLegTwistTransition";
import RegularSitUpScreen from "./src/screens/transitions/bodyweight_abs/RegularSitUpsTransition";
import HeelsHighScreen from "./src/screens/transitions/bodyweight_abs/HeelsHighTransition";
import HeelTouchScreen from "./src/screens/transitions/bodyweight_abs/HeelTouchTransition";
import ReverseCrunchScreen from "./src/screens/transitions/bodyweight_abs/ReverseCrunchTransition";
import PlankScreen from "./src/screens/transitions/bodyweight_abs/PlankTransition";

import PressUpScreen from "./src/screens/transitions/bodyweight_chest/PressUpTransition";
import InclinedPressUp from "./src/screens/transitions/bodyweight_chest/InclinedPressUpTransition";
import DeclinedPressUp from "./src/screens/transitions/bodyweight_chest/DeclinedPressUpTransition";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/helperfunctions/navigationRefs";

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen,
  // }),
  mainFlow: createBottomTabNavigator({
    Weighted: createStackNavigator(
      {
        "Weighted Exercises": WeightedExercisesScreen,

        "Compound Exercises": CompoundExercisesScreen,
        Squat: SquatScreen,
        "Dead Lift": DeadLiftScreen,
        "Bench Press": BenchScreen,

        Abs: AbsScreen,
        "Weighted Ab Pulldown": WeightedAbPulldownScreen,
        "Weighted Sit Up Crunch": WeightedSitUpScreen,
        "Russian Dumbell Twist": RussianDumbellTwistScreen,

        Biceps: BicepsScreen,
        "Hammer Curl": HammerCurlScreen,
        "Bicep Cable": BicepCableScreen,
        "Regular Curl": RegularBicepCurlScreen,

        Triceps: TricepsScreen,
        "Weighted Tricep PullDown": TricepPulldownScreen,
        "Narrow Grip Bench": NarrowGripBenchScreen,
        "One Arm Tricep PullDown": OneArmTricepScreen,
      },
      {
        navigationOptions: {
          tabBarIcon: () => {
            return <Icon name="md-medal" size={25} />;
          },
        },
      }
    ),
    Bodyweight: createStackNavigator(
      {
        "Bodyweight Exercises": BodyWeightExercisesScreen,

        "Bodyweight Abs": BodyWeightAbsScreen,
        "Bent Leg Twist": BentLegTwistScreen,
        "Sit up Crunch": RegularSitUpScreen,
        "Heels High": HeelsHighScreen,
        "Heel Touch": HeelTouchScreen,
        "Reverse Crunch": ReverseCrunchScreen,
        Plank: PlankScreen,

        "Bodyweight Chest": BodyWeightChestScreen,
        "Press Up": PressUpScreen,
        "Inclined Press Up": InclinedPressUp,
        "Declined Press Up": DeclinedPressUp,
      },
      {
        navigationOptions: {
          tabBarIcon: () => {
            return <Icon name="md-body" size={25} />;
          },
        },
      }
    ),

    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="md-home" size={25} />;
        },
      },
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
