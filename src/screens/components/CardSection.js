import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardSection = ({ height, width, title, text }) => {
  return (
    <View style={styles(height, width).containerStyle}>
      <Text style={styles(height, width).card_title}>{title}</Text>
      <Text style={styles(height, width).card_body}>{text}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   containerStyle: {
//     borderBottomWidth: 1,
//     backgroundColor: "#f1f1f1",
//   },
//   card_title: {
//     color: "red",
//   },
// });

const styles = (HEIGHT, WIDTH) =>
  StyleSheet.create({
    containerStyle: {
      height: HEIGHT * 0.17,
      width: WIDTH * 0.1,
      borderWidth: 1.5,
      backgroundColor: "#f1f1f1",
      marginTop: 15,
      marginBottom: 10,
      marginLeft: "2%",
      width: "96%",
      borderRadius: 20,
    },

    card_title: {
      //   backgroundColor: "#fff",
      fontSize: 25,
      padding: 10,
      paddingLeft: 20,
    },

    card_body: {
      fontSize: 17,
      padding: 10,
      paddingLeft: 20,
    },
  });

export default CardSection;
