import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles(props.width).containerStyle}>{props.children}</View>
  );
};

const styles = (WIDTH) =>
  StyleSheet.create({
    containerStyle: {
      width: WIDTH,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      borderBottomWidth: 0,
      //   shadowColor: "#000",
    },
  });

export default Card;
