import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TitleCard from "../components/TitleCard";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const BodyWeightExercisesScreen = ({ navigation }) => {
  const [exercise, setExercises] = useState([
    {
      title: "Abs",
      photolink: require("../../../assets/pics/titlescreen/abs2.jpg"),
      link: "Bodyweight Abs",
    },
    {
      title: "Chest",
      photolink: require("../../../assets/pics/titlescreen/chest.jpeg"),
      link: "Bodyweight Chest",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={exercise}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate(item.link)}
          >
            <TitleCard>
              <Image
                key={item.title}
                resizeMode="stretch"
                style={styles.photo}
                source={item.photolink}
              />
              <Text style={styles.text}>{item.title}</Text>
            </TitleCard>
          </TouchableOpacity>
        )}
        directionalLockEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   photo: {
//     width: "95%",
//     height: "70%",
//     borderRadius: 18,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 1,
    width: WIDTH * 1,
  },
  photo: {
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH * 0.75,
    height: HEIGHT * 0.2,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 14,
  },
  // cardContainer: {
  //   paddingTop: 30,
  //   paddingBottom: 30,
  //   shadowColor: "rgba(0, 0, 0, 0.5)",
  //   shadowOffset: { x: 0, y: 10 },
  //   shadowOpacity: 1,
  //   borderLeftColor: "blue",
  //   borderLeftWidth: 10,
  //   alignSelf: "stretch",
  //   backgroundColor: "white",
  //   marginTop: 20,
  // },
  // cardContent: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginLeft: 20,
  // },
});

export default BodyWeightExercisesScreen;
