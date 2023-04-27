import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)
  return (
    <>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>HomeScreen </Text>
      </View>
      {/* <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("Images")}
      >
        <Text style={styles.buttonText}>Go to Images </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
      >
        <Text style={styles.buttonText}>Go to list </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.buttonText}>Go to Login </Text>
      </TouchableOpacity>
      <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}> Or</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("signUp")}
      >
        <Text style={styles.buttonText}>Go to SignUp </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button2: {
    backgroundColor: "red",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  loginButton:{
    backgroundColor: "#444654",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  signUpButton:{
    backgroundColor:"#0D293A",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//   },
//   button:{
//     marginVertical:10,
//     border:"2px solid red",
//     backgroundColor:"red"
//   }
// });

export default HomeScreen;
