/* eslint-disable prettier/prettier */

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
    addTask(newTask);
    setNewTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setNewTask}
        value={newTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

