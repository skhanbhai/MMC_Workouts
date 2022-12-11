import React from "react";
import { StyleSheet, View } from "react-native";

const TitleCard = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // height: "50%",
    marginHorizontal: 20,
    marginVertical: 6,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
