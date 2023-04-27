import React from "react";
import { Text, StyleSheet, Button, FlatList, View } from "react-native";

function ComponentScreen() {
  const friends = [
    {
      name: "frank",
      age:20
    },
    {
      name: "john",
      age:22
    },
    {
      name: "wick",
      age:10
    },
    {
      name: "walter",
      age:70
    },
    {
      name: "mee",
      age:222
    },
    {
      name: "ahmed",
      age:66
    },
    {
      name: "khan",
      age:45
    },
    {
      name: "jawan",
      age:11
    },
    {
      name: "waer",
      age:44
    },
    {
      name: "nawab",
      age:30
    },
    {
      name: "jessi",
      age:24
    },
  ];
  return (
    <>
      <View >
        <Text style={styles.heading}>Friends List</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(friend) => friend?.name}
          data={friends}
          renderItem={({ item, index }) => {
            return <Text style={styles.textStyles}>{`Name - ${item?.name} - Age -${item?.age}`}</Text>;
          }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textStyles: {
    marginVertical: 50,
  },
  heading:{
    fontSize:30
  }
});

export default ComponentScreen;
