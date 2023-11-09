/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
} from 'react-native';

export default function ToDoList({ tasks }) {

  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText} placeholder="Add a new task">{task}</Text>
              <Button title="Add"/>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
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
