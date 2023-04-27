import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

function ImageScreen() {
  return (
    <View >
      <Text style={styles.TextStyles}>Images</Text>
      <ImageDetail title={"forest"} score={"12"} imageSource={require("../../assets/forest.jpg")}/>
      <ImageDetail title={"beach"} score={"15"} imageSource={require("../../assets/beach.jpg")}/>
      <ImageDetail title={"mountain"} score={"20"} imageSource={require("../../assets/mountain.jpg")}/>

    </View>
  );
}
const styles = StyleSheet.create({
  TextStyles:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:10
  }
}) 
export default ImageScreen;
