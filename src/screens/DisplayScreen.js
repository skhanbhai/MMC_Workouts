import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Card from "./components/InfoCard";
import CardSection from "./components/CardSection";
// const squatData = require("../../data/compoundExercises/squat.json");

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const DisplayScreen = ({ data }) => {
  const DisplayScreen = { data }.data;

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          scrollHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {DisplayScreen.map(({ title, exercise, think, photo, index }) => (
            <Card width={WIDTH} key={title}>
              <View style={styles.column}>
                <Image
                  key={title}
                  resizeMode="stretch"
                  style={styles.photo}
                  source={photo}
                />
                <CardSection
                  height={HEIGHT}
                  width={WIDTH}
                  title="Instruction"
                  text={exercise}
                />
                <CardSection
                  height={HEIGHT}
                  width={WIDTH}
                  title="Focus On"
                  text={think}
                />
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    width: WIDTH * 0.995,
    height: HEIGHT * 0.28,
    borderRadius: 18,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.99,
  },
});

export default DisplayScreen;
