import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
function ImageDetail({title,imageSource,score}) {
  return (
    <View>
      <Image source={imageSource}/>
      <Text> Image of {title} score  - {score} </Text>
    </View>
  );
}
const styles = StyleSheet.create({}) 
export default ImageDetail;
