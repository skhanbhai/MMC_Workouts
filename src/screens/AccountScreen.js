import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { navigateAway } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={navigateAway} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

// import React, { useContext } from "react";
// import { View, StyleSheet } from "react-native";
// import { NavigationEvents } from "react-navigation";
// import { Context as AuthContext } from "../context/AuthContext";
// import { Text, Button, Input } from "react-native-elements";
// import Spacer from "./components/Spacer";

// const AccountScreen = ({ navigation }) => {
//   const { signout } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Text h3> Account Sign Out</Text>
//       <Spacer>
//         <Button title="Sign Out" onPress={signout} />
//       </Spacer>
//     </View>
//   );
// };

// AccountScreen.navigationOptions = () => {
//   return {
//     header: null,
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginBottom: 250,
//   },
// });

// export default AccountScreen;
