import React from "react";
import { View, StyleSheet, Button } from "react-native";
import DisplayScreen from "../../DisplayScreen";
const DisplayData = require("../../../../data/triceps/narrowGripBench.json");

const NarrowGripBenchScreen = () => {
  return (
    <>
      <DisplayScreen data={DisplayData} />
    </>
  );
};

const styles = StyleSheet.create({});

export default NarrowGripBenchScreen;
