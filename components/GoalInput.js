import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onGoalInputChange = input => {
    setEnteredGoal(input);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Course Goal"}
          style={styles.textField}
          onChangeText={onGoalInputChange}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={props.addGoalHandler.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textField: { width: "80%", borderBottomColor: "black", borderBottomWidth: 1 }
});

export default GoalInput;
