import React from "react";
import { View, StyleSheet, Button } from "react-native";
import DisplayScreen from "../../DisplayScreen";
const DisplayData = require("../../../../data/triceps/oneArmTricep.json");

const OneArmTricepScreen = () => {
  return (
    <>
      <DisplayScreen data={DisplayData} />
    </>
  );
};

const styles = StyleSheet.create({});

export default OneArmTricepScreen;
