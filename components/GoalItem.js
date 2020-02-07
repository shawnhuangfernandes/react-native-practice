import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = (props) => {
    return (
        <View style={styles.goal}>
            <Text>{props.title}</Text>
          </View>
    );
};

const styles = StyleSheet.create({
    goal: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
      }
})

export default GoalItem;