import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  // delete task
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text style={styles.appTitle}>My Tasks</Text>
        <View style={styles.item}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={()=>completeTask()} key={index}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder="Write your task..."
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskwrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 40,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 60,
    padding: 10,
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 270,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
