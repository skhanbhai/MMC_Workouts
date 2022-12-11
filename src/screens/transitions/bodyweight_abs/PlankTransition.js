import React from "react";
import { View, StyleSheet, Button } from "react-native";
import DisplayScreen from "../../DisplayScreen";
const DisplayData = require("../../../../data/bodyweight_abs/plank");

const PlankScreen = () => {
  return (
    <>
      <DisplayScreen data={DisplayData} />
    </>
  );
};

const styles = StyleSheet.create({});

export default PlankScreen;
