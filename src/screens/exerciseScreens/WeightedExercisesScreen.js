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

const WeightedExercisesScreen = ({ navigation }) => {
  const [exercise, setExercises] = useState([
    {
      title: "Compound Exercises",
      photolink: require("../../../assets/pics/titlescreen/compound_exercises.jpg"),
      link: "Compound Exercises",
    },
    {
      title: "Abs",
      photolink: require("../../../assets/pics/titlescreen/abs.jpg"),
      link: "Abs",
    },
    {
      title: "Biceps",
      photolink: require("../../../assets/pics/titlescreen/biceps.jpg"),
      link: "Biceps",
    },
    {
      title: "Triceps",
      photolink: require("../../../assets/pics/titlescreen/triceps.jpg"),
      link: "Triceps",
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 1,
    width: WIDTH * 1,
    resizeMode: "contain",
  },
  photo: {
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH * 0.75,
    height: HEIGHT * 0.2,
    // marginRight: 20,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 14,
  },
});

export default WeightedExercisesScreen;
