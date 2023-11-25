/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}) {
  const [task, setTask] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  const addTask = newTask => {
    setTask([...task, newTask]);
  };

    return (
        <>
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.title}>This is my Ruthless To-Do-List</Text>
                <Text style={styles.subtitle}>Organize your tasks</Text>
                <ToDoList tasks={task} />
                <ToDoForm addTask={addTask} />

                <Button title="Go to About" onPress={() => navigation.navigate('About')} />
            </View>
        </MainLayout>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 10,
    },
});
