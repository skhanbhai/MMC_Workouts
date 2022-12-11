import React from "react";
import { View, StyleSheet, Button } from "react-native";
import DisplayScreen from "../../DisplayScreen";
const DisplayData = require("../../../../data/biceps/regularBicepCurl.json");

const RegularBicepCurlScreen = () => {
  return (
    <>
      <DisplayScreen data={DisplayData} />
    </>
  );
};

const styles = StyleSheet.create({});

export default RegularBicepCurlScreen;
