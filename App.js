import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoForm onAddTask={handleAddTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
