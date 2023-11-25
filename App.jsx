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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainLayout from './layouts/MainLayout';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="ToDoForm">
          {() => (
            <MainLayout>
              <SafeAreaView>
                <ScrollView>
                  <ToDoList tasks={task} />
                  <ToDoForm addTask={addTask} />
                </ScrollView>
              </SafeAreaView>
            </MainLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
