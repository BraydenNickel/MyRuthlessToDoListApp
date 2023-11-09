/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useState} from 'react';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [task, setTask] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  const addTask = newTask => {
    setTask([...task, newTask]);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList tasks={task} />
        <ToDoForm addTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
