import React from "react";
import { View, StyleSheet, Button } from "react-native";
import DisplayScreen from "../../DisplayScreen";
const {
  DisplayData,
} = require("../../../../data/bodyweight_abs/bentLegTwist.js");
// const DisplayData = require("../../../../data/bodyweight_abs/bentLegTwist.json");

const BentLegTwistScreen = () => {
  // console.log({ DisplayData });
  return (
    <>
      <DisplayScreen data={DisplayData} />
    </>
  );
};

const styles = StyleSheet.create({});

export default BentLegTwistScreen;
