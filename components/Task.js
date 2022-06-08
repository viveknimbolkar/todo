import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itelLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

// stylesheet for item
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itelLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "#55bcf6",
    borderRadius: 4,
    marginLeft: 5,
    opacity: 0.4,
  },
  itemText: {
      maxWidth: "80%",
      marginLeft:10
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: 'blue',
        borderRadius: 10,
        borderWidth: 3,
        opacity:0.6
  }
});
export default Task;
