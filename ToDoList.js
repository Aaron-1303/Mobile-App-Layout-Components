import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ToDoList({ tasks, removeTask }) {
  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <View key={task} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
          <Button title="Remove" onPress={() => removeTask(task)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;