import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onGoalInputChange = input => {
    setEnteredGoal(input);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelModal = () => {
    props.onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Course Goal"}
          style={styles.input}
          onChangeText={onGoalInputChange}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}><Button title="ADD" onPress={addGoalHandler} /></View>
          <View style={styles.buttonStyle}><Button title="CANCEL" color="red" onPress={cancelModal} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: '60%'
  },
  buttonStyle: {
    width: '40%'
  }
});

export default GoalInput;
